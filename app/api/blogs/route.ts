import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import fs from 'fs';
import path from 'path';

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
  const body = await request.json();
  let coverImageUrl = body.coverImage;

  if (coverImageUrl && coverImageUrl.startsWith('data:image')) {
    // Extract base64 part
    const matches = coverImageUrl.match(/^data:image\/(png|jpeg|jpg);base64,(.+)$/);
    if (matches) {
      const ext = matches[1];
      const base64Data = matches[2];
      const fileName = `${Date.now()}.${ext}`;
      const filePath = path.join(
        '/var/www/html/coreway_relaunch/public/assets/wp-content/uploads',
        fileName
      );
      fs.writeFileSync(filePath, Buffer.from(base64Data, 'base64'));
      coverImageUrl = `https://www.corewaysolution.com/assets/wp-content/uploads/${fileName}`;
    }
  }

  // Save blog with coverImageUrl in DB
  const blog = await prisma.blog.create({
    data: {
      title: body.title,
      slug: body.slug,
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
}