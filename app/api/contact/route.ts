import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Verify reCAPTCHA token with Google
async function verifyRecaptcha(token: string): Promise<boolean> {
  try {
    const secretKey = process.env.RECAPTCHA_SECRET_KEY;
    
    if (!secretKey) {
      console.warn('RECAPTCHA_SECRET_KEY not configured');
      return true; // Allow submission if reCAPTCHA is not configured
    }

    const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `secret=${secretKey}&response=${token}`,
    });

    const data = await response.json();
    return data.success;
  } catch (error) {
    console.error('reCAPTCHA verification error:', error);
    return false;
  }
}

// export async function POST(req: Request) {
//   try {
//     const body = await req.json();
//     const { name, email, phone, company, subject, message, recaptchaToken } = body;

//     // Validate required fields
//     if (!name || !email || !message) {
//       return NextResponse.json(
//         { error: 'Missing required fields: name, email, and message are required' },
//         { status: 400 }
//       );
//     }

//     // Validate email format
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(email)) {
//       return NextResponse.json(
//         { error: 'Invalid email format' },
//         { status: 400 }
//       );
//     }

//     // Verify reCAPTCHA token
//     if (recaptchaToken) {
//       const isValidRecaptcha = await verifyRecaptcha(recaptchaToken);
//       if (!isValidRecaptcha) {
//         return NextResponse.json(
//           { error: 'reCAPTCHA verification failed. Please try again.' },
//           { status: 400 }
//         );
//       }
//     }

//     // Check if email credentials are configured
//     if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
//       console.error('Email credentials not configured');
//       return NextResponse.json(
//         { error: 'Email service is not configured. Please contact the administrator.' },
//         { status: 500 }
//       );
//     }

//     // Create a transporter
//      const transporter = nodemailer.createTransport({
//       host: process.env.SMTP_HOST,
//       port: Number(process.env.SMTP_PORT),
//       secure: false, // SparkPost uses TLS on 587
//       auth: {
//         user: process.env.SMTP_USER,
//         pass: process.env.SMTP_PASS,
//       },
//       tls: { rejectUnauthorized: false },
//     });

//     const mailOptions = {
//       from: `"${process.env.FROM_NAME}" <${process.env.FROM_EMAIL}>`,
//       to: process.env.MAIL_TO,
//       replyTo: `"${name}" <${email}>`,
//       subject: subject || "New Contact Form Submission",
//       html: `
//         <div style="font-family:Arial, sans-serif; max-width:600px; margin:auto; padding:20px; background:#ffffff; border-radius:8px; border:1px solid #eee">
          
//           <h2 style="text-align:center; color:#4B4B4B;">New Contact Submission</h2>
          
//           <p><strong>Name:</strong> ${name}</p>
//           <p><strong>Email:</strong> ${email}</p>
//           ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ""}
//           ${company ? `<p><strong>Company:</strong> ${company}</p>` : ""}
//           <p><strong>Subject:</strong> ${subject || "General Inquiry"}</p>

//           <div style="margin-top:15px; padding:15px; background:#f9f9f9; border-radius:6px; border:1px solid #ddd">
//             <strong>Message:</strong>
//             <div style="margin-top:8px; white-space:pre-wrap;">
//               ${message.replace(/\n/g, "<br>")}
//             </div>
//           </div>

//           <p style="margin-top:30px; text-align:center; font-size:12px; color:#888;">
//             Email sent from Coreway Solution Contact Form<br>
//             ${new Date().toLocaleString()}
//           </p>
//         </div>
//       `,
//     };

//     await transporter.sendMail(mailOptions);

//     console.log(`Contact form submission from ${name} (${email}) sent successfully`);

//     return NextResponse.json({ 
//       success: true, 
//       message: 'Thank you for your message! We will get back to you soon.' 
//     });
//   } catch (error) {
//     console.error('Error sending email:', error);
    
//     // Provide more specific error messages
//     if (error instanceof Error) {
//       if (error.message.includes('Invalid login')) {
//         return NextResponse.json(
//           { error: 'Email service authentication failed. Please contact the administrator.' },
//           { status: 500 }
//         );
//       }
//     }
    
//     return NextResponse.json(
//       { error: 'Failed to send your message. Please try again later or contact us directly.' },
//       { status: 500 }
//     );
//   }
// }


export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, company, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true, 
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: { rejectUnauthorized: false },
    });

    const plainText = `
New Contact Submission

Name: ${name}
Email: ${email}
${phone ? `Phone: ${phone}` : ""}
${company ? `Company: ${company}` : ""}
Subject: ${subject || "General Inquiry"}

Message:
${message}

Sent on: ${new Date().toLocaleString()}
`;

const htmlContent = `
<html>
<body style="font-family:Arial, sans-serif; max-width:600px; margin:auto; padding:20px; background:#ffffff; border-radius:8px; border:1px solid #eee">

  <h2 style="text-align:center; color:#4B4B4B;">New Contact Submission</h2>

  <p><strong>Name:</strong> ${name}</p>
  <p><strong>Email:</strong> ${email}</p>
  ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ""}
  ${company ? `<p><strong>Company:</strong> ${company}</p>` : ""}
  <p><strong>Subject:</strong> ${subject || "General Inquiry"}</p>

  <div style="margin-top:15px; padding:15px; background:#f9f9f9; border-radius:6px; border:1px solid #ddd">
    <strong>Message:</strong>
    <div style="margin-top:8px; white-space:pre-wrap;">
      ${message.replace(/\n/g, "<br>")}
    </div>
  </div>

  <p style="margin-top:30px; text-align:center; font-size:12px; color:#888;">
    Email sent from Coreway Solution Contact Form<br>
    ${new Date().toLocaleString()}
  </p>
</body>
</html>
`;

const mailOptions = {
  from: `"${process.env.FROM_NAME}" <${process.env.FROM_EMAIL}>`,

  // FIX: Avoid forged freemail reply-to
  replyTo: `"${name} via Contact Form" <no-reply@corewaysolution.com>`,

  to: process.env.MAIL_TO,
  subject: subject || "New Contact Form Submission",
  text: plainText,     // FIX: Add plain text version
  html: htmlContent,   // FIX: Add <html> wrapper

  // FIX: Improve spam score
  headers: {
    "List-Unsubscribe": `<mailto:no-reply@corewaysolution.com>`,
  }
};

await transporter.sendMail(mailOptions);


    return NextResponse.json({
      success: true,
      message: "Your message has been sent successfully!",
    });
  } catch (error) {
    console.error("Email Error:", error);
    return NextResponse.json(
      { error: "Failed to send your message." },
      { status: 500 }
    );
  }
}