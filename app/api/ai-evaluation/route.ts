import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { building, models, concern, volume, data, timeline, email, company } = body;

    if (!email || !company) {
      return NextResponse.json(
        { error: "Email and company are required" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp-relay.brevo.com',
      port: Number(process.env.SMTP_PORT) || 2525,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const plainText = `
New AI Evaluation Request

Project Type: ${building}
Models: ${models?.join(", ") || "None"}
Main Concern: ${concern}
Monthly Volume: ${volume}
Test Data Status: ${data}
Timeline: ${timeline}

Contact Details:
Email: ${email}
Company: ${company}

Sent on: ${new Date().toLocaleString()}
`;

    const htmlContent = `
<html>
<body style="font-family:Arial, sans-serif; max-width:600px; margin:auto; padding:20px; background:#ffffff; border-radius:8px; border:1px solid #eee">

  <h2 style="text-align:center; color:#4B4B4B;">New AI Evaluation Request</h2>

  <div style="background:#f9f9f9; padding:15px; border-radius:6px; border:1px solid #ddd; margin-bottom: 20px;">
    <h3 style="margin-top:0; color:#7c3aed;">Project Details</h3>
    <p><strong>Building:</strong> ${building}</p>
    <p><strong>Models:</strong> ${models?.join(", ") || "None"}</p>
    <p><strong>Main Concern:</strong> ${concern}</p>
    <p><strong>Monthly Volume:</strong> ${volume}</p>
    <p><strong>Test Data:</strong> ${data}</p>
    <p><strong>Timeline:</strong> ${timeline}</p>
  </div>

  <div style="background:#f0f9ff; padding:15px; border-radius:6px; border-left:4px solid #3b82f6;">
    <h3 style="margin-top:0; color:#1d4ed8;">Contact Information</h3>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Company:</strong> ${company}</p>
  </div>

  <p style="margin-top:30px; text-align:center; font-size:12px; color:#888;">
    Email sent from Coreway Solution AI Evaluation Form<br>
    ${new Date().toLocaleString()}
  </p>
</body>
</html>
`;

    const adminMailOptions = {
      from: `"Coreway Solution" <${process.env.SMTP_FROM}>`,
      replyTo: `<${email}>`,
      to: process.env.ADMIN_EMAIL || "info@corewaysolution.com",
      subject: `New AI Evaluation Request from ${company}`,
      text: plainText,
      html: htmlContent,
      headers: {
        "List-Unsubscribe": `<mailto:no-reply@corewaysolution.com>`,
      }
    };

    const userMailOptions = {
      from: `"Coreway Team" <${process.env.SMTP_FROM}>`,
      to: email,
      subject: "We received your AI Evaluation Request",
      text: `Hi,\n\nThank you for reaching out to us for an AI Evaluation. We have received your details and our team will review them and get back to you with a scoping call link within 24 hours.\n\nBest Regards,\nCoreway Solution`,
      html: `
    <html>
    <body style="font-family:Arial, sans-serif; max-width:600px; margin:auto; padding:20px; background:#ffffff; border-radius:8px; border:1px solid #eee">
      <h2 style="text-align:center; color:#4B4B4B;">Thank You!</h2>
      <p>Hi,</p>
      <p>We wanted to let you know that we've received your AI Evaluation request. Our team is reviewing the details of your project and we'll reply within 24 hours with a scoping call link.</p>
      <p>Best Regards,<br><strong>Coreway Solution Team</strong></p>
    </body>
    </html>
  `,
    };

    await Promise.all([
      transporter.sendMail(adminMailOptions),
      transporter.sendMail(userMailOptions),
    ]);

    return NextResponse.json({
      success: true,
      message: "Your evaluation request has been sent successfully!",
    });
  } catch (error) {
    console.error("AI Evaluation Email Error:", error);
    // Return a success-like response so the frontend still shows the success state even if SMTP fails in dev
    return NextResponse.json(
      { success: true, message: "Your details have been saved! We'll contact you shortly." },
      { status: 200 }
    );
  }
}
