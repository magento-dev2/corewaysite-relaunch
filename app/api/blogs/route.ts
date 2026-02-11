import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import fs from 'fs';
import path from 'path';
import { Buffer } from 'buffer';

export async function GET() {
  try {
    const blogs = await prisma.blog.findMany({
      orderBy: { createdAt: 'desc' },
    });
    return NextResponse.json(blogs);
  } catch (error) {
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
    let existingBlog = await prisma.blog.findUnique({ where: { slug } });
    if (existingBlog) {
      slug = `${slug}-${Date.now()}`;
    }

    // Save blog with coverImageUrl in DB
    const blog = await prisma.blog.create({
      data: {
        title: body.title,
        slug: slug,
        content: typeof body.content === 'string' ? body.content : JSON.stringify(body.content),
        excerpt: body.excerpt,
        coverImage: coverImageUrl,
        metaTitle: body.metaTitle,
        metaDescription: body.metaDescription,
        metaKeywords: body.metaKeywords,
        isActive: body.isActive ?? true,
        publishedAt: new Date(),
      },
    });

    return NextResponse.json(blog);
  } catch (error: any) {
    console.error('Error in POST /api/blogs:', error);
    return NextResponse.json({ error: error.message || 'Error creating blog' }, { status: 500 });
  }
}