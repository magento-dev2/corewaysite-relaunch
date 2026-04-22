import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email } = body;

    if (!email) {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    // Upsert entry in ContactList
    await prisma.contactList.upsert({
      where: { email },
      update: {
        status: 'audit_report_requested',
        message: 'Requested a free audit report from blog.',
        updatedAt: new Date(),
      },
      create: {
        email,
        status: 'audit_report_requested',
        message: 'Requested a free audit report from blog.',
      },
    });

    // Send email to Admin
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp-relay.brevo.com',
      port: Number(process.env.SMTP_PORT) || 2525,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: `"Coreway Solution" <${process.env.SMTP_FROM}>`,
      to: process.env.ADMIN_EMAIL || "info@corewaysolution.com",
      subject: "New Audit Report Request",
      html: `
        <div style="font-family:Arial, sans-serif; max-width:600px; margin:auto; padding:20px; border:1px solid #eee">
          <h2 style="color:#7c3aed;">New Audit Report Request</h2>
          <p><strong>Email:</strong> ${email}</p>
          <p>This user has requested a free audit report from the blog content.</p>
          <hr />
          <p style="font-size:12px; color:#888;">Sent from Coreway Solution Audit Request Form</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({
      success: true,
      message: "Your request has been sent! We will get back to you within 24 hours.",
    });
  } catch (error) {
    console.error("Audit Report API Error:", error);
    return NextResponse.json(
      { error: "Failed to process request. Please try again later." },
      { status: 500 }
    );
  }
}
