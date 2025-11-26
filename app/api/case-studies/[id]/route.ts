import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(
    request: Request,
    props: { params: Promise<{ id: string }> }
) {
    const params = await props.params;
    try {
        const caseStudy = await prisma.caseStudy.findUnique({
            where: { id: params.id },
        });

        if (!caseStudy) {
            return NextResponse.json({ error: 'Case study not found' }, { status: 404 });
        }

        return NextResponse.json(caseStudy);
    } catch (error) {
        return NextResponse.json({ error: 'Error fetching case study' }, { status: 500 });
    }
}

export async function PUT(
    request: Request,
    props: { params: Promise<{ id: string }> }
) {
    const params = await props.params;
    try {
        const body = await request.json();

        const caseStudy = await prisma.caseStudy.update({
            where: { id: params.id },
            data: body,
        });

        return NextResponse.json(caseStudy);
    } catch (error) {
        console.error('Error updating case study:', error);
        return NextResponse.json({ error: 'Error updating case study' }, { status: 500 });
    }
}

export async function DELETE(
    request: Request,
    props: { params: Promise<{ id: string }> }
) {
    const params = await props.params;
    try {
        await prisma.caseStudy.delete({
            where: { id: params.id },
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        return NextResponse.json({ error: 'Error deleting case study' }, { status: 500 });
    }
}
