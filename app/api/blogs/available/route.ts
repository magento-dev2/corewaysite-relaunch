import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const excludeId = searchParams.get('excludeId');

        const blogs = await prisma.blog.findMany({
            where: {
                isActive: true,
                ...(excludeId ? { id: { not: excludeId } } : {}),
            },
            select: {
                id: true,
                title: true,
                slug: true,
            },
            orderBy: { createdAt: 'desc' },
        });

        return NextResponse.json(blogs);
    } catch (error) {
        return NextResponse.json({ error: 'Error fetching available blogs' }, { status: 500 });
    }
}
