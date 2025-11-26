import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const slug = searchParams.get('slug');

        if (slug) {
            const caseStudy = await prisma.caseStudy.findUnique({
                where: { slug },
            });
            return NextResponse.json(caseStudy);
        }

        const caseStudies = await prisma.caseStudy.findMany({
            orderBy: { createdAt: 'desc' },
        });
        return NextResponse.json(caseStudies);
    } catch (error) {
        return NextResponse.json({ error: 'Error fetching case studies' }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        const body = await request.json();

        const caseStudy = await prisma.caseStudy.create({
            data: {
                ...body,
                publishedAt: new Date(),
            },
        });

        return NextResponse.json(caseStudy);
    } catch (error) {
        console.error('Error creating case study:', error);
        return NextResponse.json({ error: 'Error creating case study' }, { status: 500 });
    }
}
