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

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, company, subject, message, recaptchaToken } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields: name, email, and message are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Verify reCAPTCHA token
    if (recaptchaToken) {
      const isValidRecaptcha = await verifyRecaptcha(recaptchaToken);
      if (!isValidRecaptcha) {
        return NextResponse.json(
          { error: 'reCAPTCHA verification failed. Please try again.' },
          { status: 400 }
        );
      }
    }

    // Check if email credentials are configured
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error('Email credentials not configured');
      return NextResponse.json(
        { error: 'Email service is not configured. Please contact the administrator.' },
        { status: 500 }
      );
    }

    // Create a transporter
    // Note: For Gmail, you need to use an App Password if 2FA is enabled
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Enhanced email template with professional styling
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'd.devloper002@gmail.com',
      replyTo: email, // Allow direct reply to the sender
      subject: `New Contact Form Submission: ${subject || 'General Inquiry'}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body {
              font-family: Arial, sans-serif;
              line-height: 1.6;
              color: #333;
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
            }
            .header {
              background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
              color: white;
              padding: 20px;
              border-radius: 8px 8px 0 0;
              text-align: center;
            }
            .content {
              background: #f9f9f9;
              padding: 30px;
              border: 1px solid #e0e0e0;
              border-radius: 0 0 8px 8px;
            }
            .field {
              margin-bottom: 15px;
              padding: 10px;
              background: white;
              border-left: 4px solid #667eea;
              border-radius: 4px;
            }
            .label {
              font-weight: bold;
              color: #667eea;
              display: block;
              margin-bottom: 5px;
            }
            .value {
              color: #333;
            }
            .message-box {
              background: white;
              padding: 15px;
              border-radius: 4px;
              border: 1px solid #e0e0e0;
              margin-top: 10px;
              white-space: pre-wrap;
            }
            .footer {
              text-align: center;
              margin-top: 20px;
              padding-top: 20px;
              border-top: 1px solid #e0e0e0;
              color: #666;
              font-size: 12px;
            }
          </style>
        </head>
        <body>
          <div class="header">
            <h1 style="margin: 0;">📧 New Contact Form Submission</h1>
          </div>
          <div class="content">
            <div class="field">
              <span class="label">👤 Name:</span>
              <span class="value">${name}</span>
            </div>
            
            <div class="field">
              <span class="label">📧 Email:</span>
              <span class="value"><a href="mailto:${email}">${email}</a></span>
            </div>
            
            ${phone ? `
            <div class="field">
              <span class="label">📱 Phone:</span>
              <span class="value">${phone}</span>
            </div>
            ` : ''}
            
            ${company ? `
            <div class="field">
              <span class="label">🏢 Company:</span>
              <span class="value">${company}</span>
            </div>
            ` : ''}
            
            <div class="field">
              <span class="label">📋 Subject:</span>
              <span class="value">${subject || 'General Inquiry'}</span>
            </div>
            
            <div class="field">
              <span class="label">💬 Message:</span>
              <div class="message-box">${message.replace(/\n/g, '<br>')}</div>
            </div>
            
            <div class="footer">
              <p>This email was sent from the Coreway contact form</p>
              <p>Received on: ${new Date().toLocaleString('en-US', { 
                dateStyle: 'full', 
                timeStyle: 'long' 
              })}</p>
            </div>
          </div>
        </body>
        </html>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    console.log(`Contact form submission from ${name} (${email}) sent successfully`);

    return NextResponse.json({ 
      success: true, 
      message: 'Thank you for your message! We will get back to you soon.' 
    });
  } catch (error) {
    console.error('Error sending email:', error);
    
    // Provide more specific error messages
    if (error instanceof Error) {
      if (error.message.includes('Invalid login')) {
        return NextResponse.json(
          { error: 'Email service authentication failed. Please contact the administrator.' },
          { status: 500 }
        );
      }
    }
    
    return NextResponse.json(
      { error: 'Failed to send your message. Please try again later or contact us directly.' },
      { status: 500 }
    );
  }
}
