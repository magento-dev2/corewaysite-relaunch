import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// GET - fetch all contacts for admin view
export async function GET() {
    try {
        const contacts = await prisma.contactList.findMany({
            orderBy: { createdAt: 'desc' },
        });
        return NextResponse.json(contacts);
    } catch (error) {
        console.error('Error fetching contacts:', error);
        return NextResponse.json({ error: 'Failed to fetch contacts' }, { status: 500 });
    }
}

// POST - upsert by email (called on Step 1 - email only)
export async function POST(req: Request) {
    try {
        const { email } = await req.json();

        if (!email) {
            return NextResponse.json({ error: 'Email is required' }, { status: 400 });
        }

        const contact = await prisma.contactList.upsert({
            where: { email },
            update: { updatedAt: new Date() },
            create: { email, status: 'email_only' },
        });

        return NextResponse.json({ success: true, id: contact.id });
    } catch (error) {
        console.error('Error saving contact email:', error);
        return NextResponse.json({ error: 'Failed to save contact' }, { status: 500 });
    }
}

// PUT - update full contact record (called after full form submission)
export async function PUT(req: Request) {
    try {
        const { email, name, company, message, ndaAccepted } = await req.json();

        if (!email) {
            return NextResponse.json({ error: 'Email is required' }, { status: 400 });
        }

        const contact = await prisma.contactList.upsert({
            where: { email },
            update: {
                name: name || null,
                company: company || null,
                message: message || null,
                ndaAccepted: ndaAccepted ?? false,
                status: 'completed',
            },
            create: {
                email,
                name: name || null,
                company: company || null,
                message: message || null,
                ndaAccepted: ndaAccepted ?? false,
                status: 'completed',
            },
        });

        return NextResponse.json({ success: true, id: contact.id });
    } catch (error) {
        console.error('Error updating contact:', error);
        return NextResponse.json({ error: 'Failed to update contact' }, { status: 500 });
    }
}
