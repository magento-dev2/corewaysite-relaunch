import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import fs from 'fs';
import path from 'path';
import { Buffer } from 'buffer';

const blogListSelect = {
  id: true,
  title: true,
  slug: true,
  excerpt: true,
  coverImage: true,
  createdAt: true,
  readTime: true,
  faqSchema: true,
  author: true,
  isActive: true,
  metaTitle: true,
  metaDescription: true,
  metaKeywords: true,
  ctaTitle: true,
  ctaDescription: true,
  ctaButton1Text: true,
  ctaButton1Link: true,
  ctaButton2Text: true,
  ctaButton2Link: true,
} as const;

const blogListFallbackSelect = {
  id: true,
  title: true,
  slug: true,
  excerpt: true,
  coverImage: true,
  createdAt: true,
  isActive: true,
  metaTitle: true,
  metaDescription: true,
  metaKeywords: true,
  ctaTitle: true,
  ctaDescription: true,
  ctaButton1Text: true,
  ctaButton1Link: true,
  ctaButton2Text: true,
  ctaButton2Link: true,
} as const;

function hasMissingColumn(error: unknown, columnName: string) {
  if (!(error instanceof Error)) {
    return false;
  }

  return error.message.includes(columnName)
    || error.message.includes(`column \`${columnName}\` does not exist`)
    || error.message.includes(`column: '${columnName}'`)
    || error.message.includes(`column: "${columnName}"`);
}

function hasUnknownBlogField(error: unknown, fieldName: string) {
  return error instanceof Error
    && (error.message.includes(`Unknown field \`${fieldName}\``)
      || error.message.includes(`Unknown argument \`${fieldName}\``));
}

function isMissingBlogOptionalColumn(error: unknown) {
  return hasMissingColumn(error, 'Blog.readTime')
    || hasMissingColumn(error, 'Blog.faqSchema')
    || hasMissingColumn(error, 'Blog.author')
    || hasMissingColumn(error, 'readTime')
    || hasMissingColumn(error, 'faqSchema')
    || hasMissingColumn(error, 'author')
    || hasUnknownBlogField(error, 'readTime')
    || hasUnknownBlogField(error, 'faqSchema')
    || hasUnknownBlogField(error, 'author');
}

function normalizeReadTime(value: unknown) {
  if (value === undefined || value === null || value === '') {
    return 9;
  }

  const parsed = typeof value === 'string' ? Number.parseInt(value, 10) : Number(value);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : 9;
}

function normalizeFAQSchema(value: unknown): string | null {
  if (value === undefined || value === null || value === '') {
    return null;
  }

  if (typeof value === 'string') {
    return value;
  }

  try {
    return JSON.stringify(value);
  } catch {
    return null;
  }
}

export async function GET() {
  try {
    const blogs = await prisma.blog.findMany({
      select: blogListSelect,
      orderBy: { createdAt: 'desc' },
    });
    return NextResponse.json(blogs);
  } catch (error) {
    if (isMissingBlogOptionalColumn(error)) {
      const blogs = await prisma.blog.findMany({
        select: blogListFallbackSelect,
        orderBy: { createdAt: 'desc' },
      });

      return NextResponse.json(blogs.map((blog) => ({
        ...blog,
        readTime: null,
        faqSchema: null,
        author: null,
      })));
    }

    return NextResponse.json({ error: 'Error fetching blogs' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    let coverImageUrl = body.coverImage;

    if (coverImageUrl) {
      let buffer: Buffer | null = null;
      let ext = 'jpg';

      // ✅ CASE 1: Direct image URL starting with http
      if (coverImageUrl.startsWith('http')) {
        try {
          const res = await fetch(coverImageUrl, {
            headers: {
              'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
            }
          });
          if (res.ok) {
            buffer = Buffer.from(await res.arrayBuffer());
            // Extract extension from URL if possible
            const urlMatch = coverImageUrl.match(/\.(png|jpg|jpeg|webp|gif|svg)(?:\?|$)/i);
            if (urlMatch) {
              ext = urlMatch[1].toLowerCase();
            }
          } else {
            console.error(`Failed to fetch image from URL: ${coverImageUrl}, Status: ${res.status}`);
          }
        } catch (fetchError) {
          console.error(`Error fetching image from URL: ${coverImageUrl}`, fetchError);
          // Fallback: Don't fail the whole request, just proceed without image or with placeholder
        }
      }
      // ✅ CASE 2: Data URI base64 format (data:image/...)
      else if (coverImageUrl.startsWith('data:image')) {
        // Remove newlines and whitespace for robust regex matching
        const cleanCoverImage = coverImageUrl.replace(/\s/g, '');
        // Updated regex to support svg+xml and simple svg
        const matches = cleanCoverImage.match(/^data:image\/(png|jpeg|jpg|webp|gif|svg|svg\+xml);base64,(.+)$/);
        if (matches) {
          ext = matches[1];
          if (ext === 'svg+xml') ext = 'svg'; // Normalizer extension
          buffer = Buffer.from(matches[2], 'base64');
        }
      }
      // ✅ CASE 3: Raw base64 string
      else {
        // Remove newlines and check if it's base64
        const cleanBase64 = coverImageUrl.replace(/\s/g, '');
        if (/^[A-Za-z0-9+/=]+$/.test(cleanBase64)) {
          buffer = Buffer.from(cleanBase64, 'base64');
        }
      }

      // If we successfully got a buffer, save it locally
      if (buffer) {
        let uploadDir = path.join(process.cwd(), 'public/blog-img');
        const customPath = '/var/www/html/coreway_relaunch/public/blog-img/';

        // Check if custom server path exists (Production environment)
        if (fs.existsSync(customPath)) {
          uploadDir = customPath;
        }

        const fileName = `${Date.now()}.${ext}`;

        // Create folder if not exists
        if (!fs.existsSync(uploadDir)) {
          fs.mkdirSync(uploadDir, { recursive: true });
        }

        const filePath = path.join(uploadDir, fileName);
        fs.writeFileSync(filePath, buffer);

        // Update coverImageUrl to the local path
        coverImageUrl = `https://www.corewaysolution.com/blog-img/${fileName}`;
      }
    }

    // Check for unique slug
    let slug = body.slug;
    const existingBlog = await prisma.blog.findUnique({
      where: { slug },
      select: { id: true },
    });
    if (existingBlog) {
      slug = `${slug}-${Date.now()}`;
    }

    // Save blog with coverImageUrl in DB
    const baseData = {
      title: body.title,
      slug: slug,
      content: typeof body.content === 'string' ? body.content : JSON.stringify(body.content),
      excerpt: body.excerpt,
      coverImage: coverImageUrl,
      faqSchema: normalizeFAQSchema(body.faqSchema),
      author: body.author || null,
      metaTitle: body.metaTitle,
      metaDescription: body.metaDescription,
      metaKeywords: body.metaKeywords,
      isActive: body.isActive ?? true,
      publishedAt: new Date(),
      ctaTitle: body.ctaTitle,
      ctaDescription: body.ctaDescription,
      ctaButton1Text: body.ctaButton1Text,
      ctaButton1Link: body.ctaButton1Link,
      ctaButton2Text: body.ctaButton2Text,
      ctaButton2Link: body.ctaButton2Link,
    };

    let blog;

    try {
      blog = await prisma.blog.create({
        data: {
          ...baseData,
          readTime: normalizeReadTime(body.readTime),
        },
        select: { id: true, slug: true },
      });
    } catch (error) {
      if (!isMissingBlogOptionalColumn(error)) {
        throw error;
      }

      const legacyBaseData = { ...baseData } as typeof baseData & { faqSchema?: string | null; author?: string | null };
      delete legacyBaseData.faqSchema;
      delete legacyBaseData.author;
      blog = await prisma.blog.create({
        data: legacyBaseData,
        select: { id: true, slug: true },
      });
    }

    return NextResponse.json(blog);
  } catch (error: unknown) {
    console.error('Error in POST /api/blogs:', error);
    return NextResponse.json({ error: error instanceof Error ? error.message : 'Error creating blog' }, { status: 500 });
  }
}
