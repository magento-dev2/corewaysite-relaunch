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

// export async function POST(request: Request) {
//   const body = await request.json();
  
//   let coverImageUrl = body.coverImage;

//   if (coverImageUrl) {

//     // ✅ CASE 1: Direct image URL → use as-is
//     if (coverImageUrl.startsWith('http://') || coverImageUrl.startsWith('https://')) {
//       // Do nothing, already a valid URL
//     } else {
//       let base64Data = coverImageUrl;
//       let ext = 'png';

//       // ✅ CASE 2: data:image/...;base64,
//       if (coverImageUrl.startsWith('data:image')) {
//         const matches = coverImageUrl.match(/^data:image\/(png|jpeg|jpg|webp);base64,(.+)$/);
//         if (!matches) {
//           throw new Error('Invalid base64 image format');
//         }
//         ext = matches[1];
//         base64Data = matches[2];
//       }

//       // ✅ CASE 3: raw base64 string (n8n image agent)
//       const fileName = `${Date.now()}.${ext}`;
//       const filePath = path.join(
//         '/var/www/html/coreway_relaunch/public/assets/wp-content/uploads',
//         fileName
//       );

//       fs.writeFileSync(filePath, Buffer.from(base64Data, 'base64'));

//       coverImageUrl = `https://www.corewaysolution.com/assets/wp-content/uploads/${fileName}`;
//     }
//   }


//   // Save blog with coverImageUrl in DB
//   const blog = await prisma.blog.create({
//     data: {
//       title: body.title,
//       slug: body.slug,
//       content: typeof body.content === 'string' ? body.content : JSON.stringify(body.content),
//       excerpt: body.excerpt,
//       coverImage: coverImageUrl,
//       metaTitle: body.metaTitle,
//       metaDescription: body.metaDescription,
//       metaKeywords: body.metaKeywords,
//       isActive: body.isActive ?? true,
//       publishedAt: new Date(),
//     },
//   });

//   return NextResponse.json(blog);
// }

export async function POST(request: Request) {
  const body = await request.json();
  let coverImageUrl = body.coverImage;

  if (coverImageUrl) {

    // ✅ If URL → Download and save locally
    if (coverImageUrl.startsWith('http')) {
      const res = await fetch(coverImageUrl);
      if (!res.ok) throw new Error('Failed to download image');

      const buffer = Buffer.from(await res.arrayBuffer());

      // Get extension from URL or default jpg
      const ext = coverImageUrl.includes('.png') ? 'png' :
                  coverImageUrl.includes('.webp') ? 'webp' :
                  'jpg';

      const fileName = `${Date.now()}.${ext}`;
      const uploadDir = path.join(process.cwd(), 'public/blog-img');

      // Create folder if not exists
      if (!fs.existsSync(uploadDir)) {
        fs.mkdirSync(uploadDir, { recursive: true });
      }

      const filePath = path.join(uploadDir, fileName);
      fs.writeFileSync(filePath, buffer);

      // Save public URL
      coverImageUrl = `/blog-img/${fileName}`;
    }

    // ✅ If base64 → your existing logic here (optional)
  }

  // Save blog in DB
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