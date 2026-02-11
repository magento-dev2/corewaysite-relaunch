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
        const res = await fetch(coverImageUrl);
        if (res.ok) {
          buffer = Buffer.from(await res.arrayBuffer());
          // Extract extension from URL if possible
          const urlMatch = coverImageUrl.match(/\.(png|jpg|jpeg|webp|gif|svg)(?:\?|$)/i);
          if (urlMatch) {
            ext = urlMatch[1].toLowerCase();
          }
        }
      }
      // ✅ CASE 2: Data URI base64 format (data:image/...)
      else if (coverImageUrl.startsWith('data:image')) {
        const matches = coverImageUrl.match(/^data:image\/(png|jpeg|jpg|webp|gif|svg);base64,(.+)$/);
        if (matches) {
          ext = matches[1];
          buffer = Buffer.from(matches[2], 'base64');
        }
      }
      // ✅ CASE 3: Raw base64 string
      else if (/^[A-Za-z0-9+/=]+$/.test(coverImageUrl)) {
        buffer = Buffer.from(coverImageUrl, 'base64');
        // Default to jpg for raw base64 unless we can detect it (complex, sticking to jpg)
      }

      // If we successfully got a buffer, save it locally
      if (buffer) {
        const fileName = `${Date.now()}.${ext}`;
        const uploadDir = path.join(process.cwd(), 'public/blog-img');

        // Create folder if not exists
        if (!fs.existsSync(uploadDir)) {
          fs.mkdirSync(uploadDir, { recursive: true });
        }

        const filePath = path.join(uploadDir, fileName);
        fs.writeFileSync(filePath, buffer);

        // Update coverImageUrl to the local path
        coverImageUrl = `/blog-img/${fileName}`;
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