import { NextRequest, NextResponse } from 'next/server';

interface ContactFormData {
    name: string;
    email: string;
    phone?: string;
    company?: string;
    subject: string;
    message: string;
    recaptchaToken: string;
}

interface RecaptchaResponse {
    success: boolean;
    challenge_ts?: string;
    hostname?: string;
    'error-codes'?: string[];
}

export async function POST(request: NextRequest) {
    try {
        const body: ContactFormData = await request.json();
        const { name, email, phone, company, subject, message, recaptchaToken } = body;

        // Validate required fields
        if (!name || !email || !subject || !message) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        // Validate reCAPTCHA token
        if (!recaptchaToken) {
            return NextResponse.json(
                { error: 'reCAPTCHA token is required' },
                { status: 400 }
            );
        }

        // Verify reCAPTCHA with Google
        const recaptchaSecret = process.env.RECAPTCHA_SECRET_KEY;

        if (!recaptchaSecret) {
            console.error('RECAPTCHA_SECRET_KEY is not configured');
            return NextResponse.json(
                { error: 'Server configuration error' },
                { status: 500 }
            );
        }

        const recaptchaVerifyUrl = 'https://www.google.com/recaptcha/api/siteverify';
        const recaptchaResponse = await fetch(recaptchaVerifyUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: `secret=${recaptchaSecret}&response=${recaptchaToken}`,
        });

        const recaptchaData: RecaptchaResponse = await recaptchaResponse.json();

        if (!recaptchaData.success) {
            console.error('reCAPTCHA verification failed:', recaptchaData['error-codes']);
            return NextResponse.json(
                { error: 'reCAPTCHA verification failed. Please try again.' },
                { status: 400 }
            );
        }

        // reCAPTCHA verification successful
        // Log the contact form submission (in production, you would save to database or send email)
        console.log('Contact Form Submission (Verified):');
        console.log('-----------------------------------');
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Phone:', phone || 'N/A');
        console.log('Company:', company || 'N/A');
        console.log('Subject:', subject);
        console.log('Message:', message);
        console.log('reCAPTCHA Verified:', recaptchaData.success);
        console.log('Timestamp:', recaptchaData.challenge_ts);
        console.log('-----------------------------------');

        // TODO: Add your email sending logic here
        // Example: await sendEmail({ to: 'contact@yourcompany.com', ...formData });

        return NextResponse.json(
            {
                success: true,
                message: 'Your message has been sent successfully!'
            },
            { status: 200 }
        );

    } catch (error) {
        console.error('Contact form error:', error);
        return NextResponse.json(
            { error: 'An error occurred while processing your request' },
            { status: 500 }
        );
    }
}
