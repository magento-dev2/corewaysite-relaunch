import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

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
        const { title, slug, content, excerpt, coverImage, metaTitle, metaDescription, metaKeywords, relatedArticleIds, isActive } = body;

        const blog = await prisma.blog.create({
            data: {
                title,
                slug,
                content,
                excerpt,
                coverImage,
                metaTitle,
                metaDescription,
                metaKeywords,
                isActive: isActive ?? true,
                publishedAt: new Date(),
                relatedArticles: relatedArticleIds && relatedArticleIds.length > 0
                    ? { connect: relatedArticleIds.map((id: string) => ({ id })) }
                    : undefined,
            },
        });
        return NextResponse.json(blog);
    } catch (error) {
        return NextResponse.json({ error: 'Error creating blog' }, { status: 500 });
    }
}
