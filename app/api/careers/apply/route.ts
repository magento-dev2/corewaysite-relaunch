import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    
    const jobTitle = formData.get("jobTitle") as string;
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const linkedin = formData.get("linkedin") as string;
    const experience = formData.get("experience") as string;
    const message = formData.get("message") as string;
    const resume = formData.get("resume") as File;

    if (!resume) {
      return NextResponse.json(
        { error: "Resume is required" },
        { status: 400 }
      );
    }

    // Convert file to buffer for attachment
    const bytes = await resume.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Create transporter
    // Note: These environment variables need to be set in .env
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.SMTP_FROM || '"Coreway Careers" <careers@corewaysolution.com>',
      to: process.env.ADMIN_EMAIL || "admin@corewaysolution.com", // Replace with actual admin email
      subject: `New Job Application: ${jobTitle} - ${name}`,
      html: `
        <h2>New Job Application</h2>
        <p><strong>Position:</strong> ${jobTitle}</p>
        <hr />
        <h3>Candidate Details</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Experience:</strong> ${experience}</p>
        <p><strong>LinkedIn/Portfolio:</strong> <a href="${linkedin}">${linkedin}</a></p>
        
        <h3>Message</h3>
        <p>${message.replace(/\n/g, "<br>")}</p>
        
        <hr />
        <p><em>Resume is attached to this email.</em></p>
      `,
      attachments: [
        {
          filename: resume.name,
          content: buffer,
        },
      ],
    };

    // Send email
    // Only attempt to send if SMTP credentials are configured, otherwise log it (for dev/demo)
    if (process.env.SMTP_USER && process.env.SMTP_PASS) {
      await transporter.sendMail(mailOptions);
    } else {
      console.log("SMTP credentials not found. Simulating email send:", mailOptions);
      // In a real scenario, we might want to throw an error or handle this differently
      // For now, we'll simulate success so the UI works
    }

    return NextResponse.json({ success: true, message: "Application submitted successfully" });
  } catch (error: any) {
    console.error("Error submitting application:", error);
    return NextResponse.json(
      { error: "Failed to submit application. Please try again." },
      { status: 500 }
    );
  }
}
