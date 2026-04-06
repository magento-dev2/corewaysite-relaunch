import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

const relatedArticleSelect = {
    id: true,
    title: true,
    slug: true,
    excerpt: true,
    coverImage: true,
    createdAt: true,
    isActive: true,
} as const;

const blogEditSelect = {
    id: true,
    title: true,
    slug: true,
    content: true,
    excerpt: true,
    coverImage: true,
    readTime: true,
    faqSchema: true,
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

const blogEditFallbackSelect = {
    id: true,
    title: true,
    slug: true,
    content: true,
    excerpt: true,
    coverImage: true,
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
    return error instanceof Error && error.message.includes(columnName);
}

function isMissingBlogOptionalColumn(error: unknown) {
    return hasMissingColumn(error, 'Blog.readTime') || hasMissingColumn(error, 'Blog.faqSchema');
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

export async function GET(_request: Request, { params }: { params: Promise<{ id: string }> }) {
    try {
        const { id } = await params;
        let blog;

        try {
            blog = await prisma.blog.findUnique({
                where: { id },
                select: {
                    ...blogEditSelect,
                    relatedArticles: {
                        select: relatedArticleSelect,
                    },
                },
            });
        } catch (error) {
            if (!isMissingBlogOptionalColumn(error)) {
                throw error;
            }

            const fallbackBlog = await prisma.blog.findUnique({
                where: { id },
                select: {
                    ...blogEditFallbackSelect,
                    relatedArticles: {
                        select: relatedArticleSelect,
                    },
                },
            });

            blog = fallbackBlog
                ? {
                    ...fallbackBlog,
                    readTime: null,
                    faqSchema: null,
                }
                : null;
        }

        if (!blog) {
            return NextResponse.json({ error: 'Blog not found' }, { status: 404 });
        }
        return NextResponse.json(blog);
    } catch {
        return NextResponse.json({ error: 'Error fetching blog' }, { status: 500 });
    }
}

export async function PUT(request: Request, { params }: { params: Promise<{ id: string }> }) {
    try {
        const { id } = await params;
        const body = await request.json();
        const { title, slug, content, excerpt, coverImage, readTime, faqSchema, metaTitle, metaDescription, metaKeywords, relatedArticleIds, isActive,
            ctaTitle, ctaDescription, ctaButton1Text, ctaButton1Link, ctaButton2Text, ctaButton2Link
        } = body;

        const baseData = {
            title,
            slug,
            content: typeof content === 'string' ? content : JSON.stringify(content),
            excerpt,
            coverImage,
            faqSchema: normalizeFAQSchema(faqSchema),
            isActive,
            metaTitle,
            metaDescription,
            metaKeywords,
            ctaTitle,
            ctaDescription,
            ctaButton1Text,
            ctaButton1Link,
            ctaButton2Text,
            ctaButton2Link,
            relatedArticles: relatedArticleIds !== undefined
                ? { set: relatedArticleIds.map((articleId: string) => ({ id: articleId })) }
                : undefined,
        };

        let blog;

        try {
            blog = await prisma.blog.update({
                where: { id },
                data: {
                    ...baseData,
                    readTime: normalizeReadTime(readTime),
                },
                select: { id: true, slug: true },
            });
        } catch (error) {
            if (!isMissingBlogOptionalColumn(error)) {
                throw error;
            }

            blog = await prisma.blog.update({
                where: { id },
                data: baseData,
                select: { id: true, slug: true },
            });
        }

        return NextResponse.json(blog);
    } catch (error: unknown) {
        console.error('Error updating blog:', error);
        return NextResponse.json({ error: error instanceof Error ? error.message : 'Error updating blog' }, { status: 500 });
    }
}

export async function DELETE(_request: Request, { params }: { params: Promise<{ id: string }> }) {
    try {
        const { id } = await params;
        await prisma.blog.delete({
            where: { id },
        });
        return NextResponse.json({ message: 'Blog deleted' });
    } catch {
        return NextResponse.json({ error: 'Error deleting blog' }, { status: 500 });
    }
}

export async function PATCH(request: Request, { params }: { params: Promise<{ id: string }> }) {
    try {
        const { id } = await params;
        const body = await request.json();
        const { isActive } = body;

        const blog = await prisma.blog.update({
            where: { id },
            data: { isActive },
            select: { id: true, isActive: true },
        });
        return NextResponse.json(blog);
    } catch {
        return NextResponse.json({ error: 'Error updating blog status' }, { status: 500 });
    }
}
