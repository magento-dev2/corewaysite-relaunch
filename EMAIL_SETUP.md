# Email Configuration Setup Guide

## Quick Setup Instructions

### 1. Install Dependencies (Already Done ✓)
```bash
npm install nodemailer @types/nodemailer
```

### 2. Configure Email Credentials

Add these variables to your `.env` file:

```env
# Email Configuration for Contact Form
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password-here

# reCAPTCHA Configuration (if not already set)
RECAPTCHA_SECRET_KEY=your-recaptcha-secret-key
```

### 3. Get Gmail App Password

For Gmail (easiest method):

1. Go to your Google Account: https://myaccount.google.com/
2. Enable 2-Factor Authentication if not already enabled
3. Go to App Passwords: https://myaccount.google.com/apppasswords
4. Select "Mail" and "Other (Custom name)"
5. Name it "Coreway Contact Form"
6. Copy the 16-character password
7. Use this password in `EMAIL_PASS` (without spaces)

### 4. Test the Contact Form

1. Start your dev server: `npm run dev`
2. Navigate to your contact page
3. Fill out the form and submit
4. Check d.devloper002@gmail.com for the email

## Features Implemented

✅ **Backend API** (`/app/api/contact/route.ts`)
- reCAPTCHA verification with Google API
- Email validation (format check)
- Professional HTML email template with styling
- Error handling with specific messages
- Sends to: d.devloper002@gmail.com
- Reply-to set to sender's email for easy responses

✅ **Frontend Form** (`/components/contact/ContactForm.tsx`)
- All fields working (name, email, phone, company, subject, message)
- reCAPTCHA integration
- Success and error message display
- Form validation

## Email Template Preview

The emails sent to d.devloper002@gmail.com will have:
- Professional gradient header
- Organized fields with icons
- Clickable email address for quick reply
- Timestamp of submission
- Clean, modern design

## Troubleshooting

**Error: "Invalid login"**
- Make sure you're using an App Password, not your regular Gmail password
- Verify 2FA is enabled on your Google account

**Error: "Email service not configured"**
- Check that `EMAIL_USER` and `EMAIL_PASS` are set in `.env`
- Restart your dev server after adding env variables

**reCAPTCHA not working**
- Verify `RECAPTCHA_SECRET_KEY` is set in `.env`
- The API will still work if reCAPTCHA is not configured (with a warning)
