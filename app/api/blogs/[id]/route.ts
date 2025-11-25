import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(request: Request, { params }: { params: Promise<{ id: string }> }) {
    try {
        const { id } = await params;
        const blog = await prisma.blog.findUnique({
            where: { id },
        });
        if (!blog) {
            return NextResponse.json({ error: 'Blog not found' }, { status: 404 });
        }
        return NextResponse.json(blog);
    } catch (error) {
        return NextResponse.json({ error: 'Error fetching blog' }, { status: 500 });
    }
}

export async function PUT(request: Request, { params }: { params: Promise<{ id: string }> }) {
    try {
        const { id } = await params;
        const body = await request.json();
        const { title, slug, content, excerpt, coverImage } = body;

        const blog = await prisma.blog.update({
            where: { id },
            data: {
                title,
                slug,
                content,
                excerpt,
                coverImage,
            },
        });
        return NextResponse.json(blog);
    } catch (error) {
        return NextResponse.json({ error: 'Error updating blog' }, { status: 500 });
    }
}

export async function DELETE(request: Request, { params }: { params: Promise<{ id: string }> }) {
    try {
        const { id } = await params;
        await prisma.blog.delete({
            where: { id },
        });
        return NextResponse.json({ message: 'Blog deleted' });
    } catch (error) {
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
        });
        return NextResponse.json(blog);
    } catch (error) {
        return NextResponse.json({ error: 'Error updating blog status' }, { status: 500 });
    }
}
