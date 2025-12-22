import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();

    // Extract form fields
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const message = formData.get("message") as string;
    const websiteUrl = formData.get("websiteUrl") as string;
    const startDate = formData.get("startDate") as string;
    const requestingAs = formData.get("requestingAs") as string;
    const file = formData.get("file") as File | null;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Process file attachment if present
    let fileBuffer: Buffer | null = null;
    let fileName: string | null = null;
    
    if (file) {
      const bytes = await file.arrayBuffer();
      fileBuffer = Buffer.from(bytes);
      fileName = file.name;
    }

    // Create SMTP transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: { rejectUnauthorized: false },
    });

    // Prepare email content
    const htmlContent = `
      <html>
        <body style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; background: #ffffff; border-radius: 8px; border: 1px solid #eee">
          <h2 style="text-align: center; color: #4B4B4B;">New Hire Developers Inquiry</h2>
          
          <div style="margin-top: 20px;">
            <h3 style="color: #7c3aed; border-bottom: 2px solid #7c3aed; padding-bottom: 10px;">Basic Information</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ""}
          </div>

          <div style="margin-top: 20px;">
            <h3 style="color: #7c3aed; border-bottom: 2px solid #7c3aed; padding-bottom: 10px;">Project Details</h3>
            <div style="margin-top: 15px; padding: 15px; background: #f9f9f9; border-radius: 6px; border: 1px solid #ddd">
              <strong>Message:</strong>
              <div style="margin-top: 8px; white-space: pre-wrap;">
                ${message.replace(/\n/g, "<br>")}
              </div>
            </div>
            ${websiteUrl ? `<p style="margin-top: 10px;"><strong>Website/LinkedIn:</strong> <a href="${websiteUrl}" target="_blank">${websiteUrl}</a></p>` : ""}
            ${startDate ? `<p><strong>Project Start Date:</strong> ${startDate}</p>` : ""}
            ${requestingAs ? `<p><strong>Requesting As:</strong> ${requestingAs}</p>` : ""}
            ${fileName ? `<p><strong>Attached File:</strong> ${fileName}</p>` : ""}
          </div>

          <p style="margin-top: 30px; text-align: center; font-size: 12px; color: #888;">
            Email sent from Coreway Solution - Hire Developers Form<br>
            ${new Date().toLocaleString()}
          </p>
        </body>
      </html>
    `;

    const plainText = `
New Hire Developers Inquiry

Basic Information:
Name: ${name}
Email: ${email}
${phone ? `Phone: ${phone}` : ""}

Project Details:
${message}

${websiteUrl ? `Website/LinkedIn: ${websiteUrl}` : ""}
${startDate ? `Project Start Date: ${startDate}` : ""}
${requestingAs ? `Requesting As: ${requestingAs}` : ""}
${fileName ? `Attached File: ${fileName}` : ""}

Sent on: ${new Date().toLocaleString()}
    `;

    // Prepare mail options
    const mailOptions: any = {
      from: `"${process.env.FROM_NAME}" <${process.env.FROM_EMAIL}>`,
      to: "info@corewaysolution.com",
      replyTo: `"${name}" <${email}>`,
      subject: `New Hire Developers Inquiry - ${name}`,
      text: plainText,
      html: htmlContent,
      headers: {
        "List-Unsubscribe": `<mailto:no-reply@corewaysolution.com>`,
      },
    };

    // Add attachment if file exists
    if (fileBuffer && fileName) {
      mailOptions.attachments = [
        {
          filename: fileName,
          content: fileBuffer,
        },
      ];
    }

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({
      success: true,
      message: "Thank you! Our experts will get in touch soon.",
    });

  } catch (error: any) {
    console.error("Email sending error:", error);
    return NextResponse.json(
      { error: "Failed to send your message. Please try again later." },
      { status: 500 }
    );
  }
}
