import { NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';
import { prisma } from '@/lib/prisma';
import { normalizeFAQSchema } from '@/lib/faq-schema';
import {
    getMissingBlogOptionalFields,
    isMissingBlogOptionalColumn,
    omitBlogOptionalFields,
    withMissingBlogOptionalFields,
} from '@/lib/blog-optional-fields';

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

function normalizeReadTime(value: unknown) {
    if (value === undefined || value === null || value === '') {
        return 9;
    }

    const parsed = typeof value === 'string' ? Number.parseInt(value, 10) : Number(value);
    return Number.isFinite(parsed) && parsed > 0 ? parsed : 9;
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

            let missingFields = getMissingBlogOptionalFields(error);

            while (true) {
                try {
                    const fallbackBlog = await prisma.blog.findUnique({
                        where: { id },
                        select: {
                            ...omitBlogOptionalFields(blogEditSelect, missingFields),
                            relatedArticles: {
                                select: relatedArticleSelect,
                            },
                        },
                    });

                    blog = fallbackBlog ? withMissingBlogOptionalFields(fallbackBlog, missingFields) : null;
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
        const { title, slug, content, excerpt, coverImage, readTime, faqSchema, author, metaTitle, metaDescription, metaKeywords, relatedArticleIds, isActive,
            ctaTitle, ctaDescription, ctaButton1Text, ctaButton1Link, ctaButton2Text, ctaButton2Link
        } = body;

        const baseData = {
            title,
            slug,
            content: typeof content === 'string' ? content : JSON.stringify(content),
            excerpt,
            coverImage,
            faqSchema: normalizeFAQSchema(faqSchema),
            author: author || null,
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

            let missingFields = getMissingBlogOptionalFields(error);

            while (true) {
                try {
                    blog = await prisma.blog.update({
                        where: { id },
                        data: omitBlogOptionalFields({
                            ...baseData,
                            readTime: normalizeReadTime(readTime),
                        }, missingFields),
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
        console.error('Error updating blog:', error);
        return NextResponse.json({ error: error instanceof Error ? error.message : 'Error updating blog' }, { status: 500 });
    }
}

export async function DELETE(_request: Request, { params }: { params: Promise<{ id: string }> }) {
    try {
        const { id } = await params;
        const deletedBlog = await prisma.blog.delete({
            where: { id },
            select: { slug: true },
        });

        revalidatePath('/blog');
        revalidatePath(`/blog/${deletedBlog.slug}`);

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
            select: { id: true, isActive: true, slug: true },
        });

        revalidatePath('/blog');
        revalidatePath(`/blog/${blog.slug}`);

        return NextResponse.json(blog);
    } catch {
        return NextResponse.json({ error: 'Error updating blog status' }, { status: 500 });
    }
}
