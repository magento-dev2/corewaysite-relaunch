import { NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';
import { prisma } from '@/lib/prisma';
import { normalizeFAQSchema } from '@/lib/faq-schema';
import { normalizeReadTimeValue } from '@/lib/read-time';
import {
  getMissingBlogOptionalFields,
  isMissingBlogOptionalColumn,
  omitBlogOptionalFields,
  withMissingBlogOptionalFields,
} from '@/lib/blog-optional-fields';
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

function normalizeBlogFaqSchema<T extends { faqSchema?: string | null }>(blog: T): T {
  return {
    ...blog,
    faqSchema: normalizeFAQSchema(blog.faqSchema),
  };
}

export async function GET() {
  try {
    const blogs = await prisma.blog.findMany({
      select: blogListSelect,
      orderBy: { createdAt: 'desc' },
    });
    return NextResponse.json(blogs.map(normalizeBlogFaqSchema));
  } catch (error) {
    if (isMissingBlogOptionalColumn(error)) {
      console.error('[blogs GET] Optional blog field fallback triggered', {
        error: error instanceof Error ? error.message : String(error),
        fields: getMissingBlogOptionalFields(error),
      });

      let missingFields = getMissingBlogOptionalFields(error);

      while (true) {
        try {
          const blogs = await prisma.blog.findMany({
            select: omitBlogOptionalFields(blogListSelect, missingFields),
            orderBy: { createdAt: 'desc' },
          });

          return NextResponse.json(
            blogs
              .map((blog) => withMissingBlogOptionalFields(blog, missingFields))
              .map(normalizeBlogFaqSchema),
          );
        } catch (innerError) {
          if (!isMissingBlogOptionalColumn(innerError)) {
            throw innerError;
          }

          console.error('[blogs GET] Additional optional blog fields missing during fallback', {
            error: innerError instanceof Error ? innerError.message : String(innerError),
            fields: getMissingBlogOptionalFields(innerError),
          });

          const nextMissingFields = Array.from(new Set([
            ...missingFields,
            ...getMissingBlogOptionalFields(innerError),
          ]));

          if (nextMissingFields.length === missingFields.length) {
            throw innerError;
          }

          missingFields = nextMissingFields;
        }
      }
    }

    console.error('[blogs GET] Unhandled error fetching blogs', {
      error: error instanceof Error ? error.message : String(error),
    });
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
          readTime: normalizeReadTimeValue(body.readTime),
        },
        select: { id: true, slug: true },
      });
    } catch (error) {
      if (!isMissingBlogOptionalColumn(error)) {
        throw error;
      }

      let missingFields = getMissingBlogOptionalFields(error);

      while (true) {
        try {
          blog = await prisma.blog.create({
            data: omitBlogOptionalFields(
              {
                ...baseData,
                readTime: normalizeReadTimeValue(body.readTime),
              },
              missingFields,
            ),
            select: { id: true, slug: true },
          });
          break;
        } catch (innerError) {
          if (!isMissingBlogOptionalColumn(innerError)) {
            throw innerError;
          }

          const nextMissingFields = Array.from(new Set([
            ...missingFields,
            ...getMissingBlogOptionalFields(innerError),
          ]));

          if (nextMissingFields.length === missingFields.length) {
            throw innerError;
          }

          missingFields = nextMissingFields;
        }
      }
    }

    revalidatePath('/blog');
    revalidatePath(`/blog/${blog.slug}`);

    return NextResponse.json(blog);
  } catch (error: unknown) {
    console.error('Error in POST /api/blogs:', error);
    return NextResponse.json({ error: error instanceof Error ? error.message : 'Error creating blog' }, { status: 500 });
  }
}
