import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
    try {
        const caseStudies = await prisma.caseStudy.findMany({
            where: { isActive: true },
            select: {
                id: true,
                title: true,
                slug: true,
                client: true,
                industry: true,
            },
            orderBy: { createdAt: 'desc' },
        });

        return NextResponse.json(caseStudies);
    } catch (error) {
        return NextResponse.json({ error: 'Error fetching case studies' }, { status: 500 });
    }
}
