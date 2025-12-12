// import { NextRequest, NextResponse } from "next/server";
// import nodemailer from "nodemailer";

// export async function POST(req: NextRequest) {
//   try {
//     const formData = await req.formData();
    
//     const jobTitle = formData.get("jobTitle") as string;
//     const name = formData.get("name") as string;
//     const email = formData.get("email") as string;
//     const phone = formData.get("phone") as string;
//     const linkedin = formData.get("linkedin") as string;
//     const experience = formData.get("experience") as string;
//     const currentCompany = formData.get("currentCompany") as string;
//     const skills = formData.get("skills") as string;
//     const primaryTechnology = formData.get("primaryTechnology") as string;
//     const message = formData.get("message") as string;
//     const noticePeriod = formData.get("noticePeriod") as string;
//     const expectedSalary = formData.get("expectedSalary") as string;
//     const relocate = formData.get("relocate") as string;
//     const resume = formData.get("resume") as File;

//     if (!resume) {
//       return NextResponse.json(
//         { error: "Resume is required" },
//         { status: 400 }
//       );
//     }

//     // Convert file to buffer for attachment
//     const bytes = await resume.arrayBuffer();
//     const buffer = Buffer.from(bytes);

//     // Create transporter using same Gmail config as contact form
//     const transporter = nodemailer.createTransport({
//       service: 'gmail',
//       auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS,
//       },
//     });

//     // Email content - using same config as contact form
//     const mailOptions = {
//       from: process.env.EMAIL_USER,
//       to: 'd.devloper002@gmail.com', // Same as contact form recipient
//       replyTo: email, // Allow direct reply to applicant
//       subject: `New Job Application: ${jobTitle} - ${name}`,
//       html: `
//         <!DOCTYPE html>
//         <html>
//         <head>
//           <style>
//             body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
//             .container { max-width: 600px; margin: 0 auto; padding: 20px; }
//             .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 10px 10px 0 0; }
//             .content { background: #f9f9f9; padding: 20px; border-radius: 0 0 10px 10px; }
//             .section { margin-bottom: 20px; background: white; padding: 15px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
//             .section h3 { margin-top: 0; color: #667eea; border-bottom: 2px solid #667eea; padding-bottom: 10px; }
//             .field { margin: 10px 0; }
//             .label { font-weight: bold; color: #555; }
//             .value { color: #333; }
//             .skills { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 10px; }
//             .skill-tag { background: #667eea; color: white; padding: 5px 12px; border-radius: 15px; font-size: 14px; }
//           </style>
//         </head>
//         <body>
//           <div class="container">
//             <div class="header">
//               <h1 style="margin: 0;">🎯 New Job Application</h1>
//               <p style="margin: 10px 0 0 0; opacity: 0.9;">Position: ${jobTitle}</p>
//             </div>
            
//             <div class="content">
//               <!-- Personal Information -->
//               <div class="section">
//                 <h3>📋 Personal Information</h3>
//                 <div class="field"><span class="label">Name:</span> <span class="value">${name}</span></div>
//                 <div class="field"><span class="label">Email:</span> <span class="value"><a href="mailto:${email}">${email}</a></span></div>
//                 <div class="field"><span class="label">Phone:</span> <span class="value">${phone}</span></div>
//                 ${linkedin ? `<div class="field"><span class="label">LinkedIn:</span> <span class="value"><a href="${linkedin}" target="_blank">${linkedin}</a></span></div>` : ''}
//               </div>
              
//               <!-- Professional Experience -->
//               <div class="section">
//                 <h3>💼 Professional Experience</h3>
//                 <div class="field"><span class="label">Years of Experience:</span> <span class="value">${experience}</span></div>
//                 ${currentCompany ? `<div class="field"><span class="label">Current/Last Company:</span> <span class="value">${currentCompany}</span></div>` : ''}
//                 ${primaryTechnology ? `<div class="field"><span class="label">Primary Technology:</span> <span class="value">${primaryTechnology}</span></div>` : ''}
//                 ${noticePeriod ? `<div class="field"><span class="label">Notice Period:</span> <span class="value">${noticePeriod}</span></div>` : ''}
//               </div>
              
//               <!-- Technical Skills -->
//               ${skills ? `
//               <div class="section">
//                 <h3>🛠️ Technical Skills</h3>
//                 <div class="skills">
//                   ${skills.split(',').map(skill => `<span class="skill-tag">${skill.trim()}</span>`).join('')}
//                 </div>
//               </div>
//               ` : ''}
              
//               <!-- Additional Information -->
//               <div class="section">
//                 <h3>ℹ️ Additional Information</h3>
//                 ${expectedSalary ? `<div class="field"><span class="label">Expected Salary:</span> <span class="value">${expectedSalary}</span></div>` : ''}
//                 ${relocate ? `<div class="field"><span class="label">Willing to Relocate:</span> <span class="value">${relocate}</span></div>` : ''}
//                 ${message ? `
//                   <div class="field">
//                     <span class="label">Cover Letter/Message:</span>
//                     <div style="margin-top: 10px; padding: 15px; background: #f5f5f5; border-left: 4px solid #667eea; border-radius: 4px;">
//                       ${message.replace(/\n/g, "<br>")}
//                     </div>
//                   </div>
//                 ` : ''}
//               </div>
              
//               <!-- Resume -->
//               <div class="section">
//                 <h3>📎 Resume</h3>
//                 <p style="margin: 0; color: #666;">Resume is attached to this email: <strong>${resume.name}</strong></p>
//               </div>
              
//               <div style="text-align: center; margin-top: 20px; padding-top: 20px; border-top: 2px solid #e0e0e0;">
//                 <p style="color: #999; font-size: 14px; margin: 0;">
//                   Submitted via Coreway Solutions Careers Portal
//                 </p>
//               </div>
//             </div>
//           </div>
//         </body>
//         </html>
//       `,
//       attachments: [
//         {
//           filename: resume.name,
//           content: buffer,
//         },
//       ],
//     };

//     // Send email
//     // Only attempt to send if EMAIL credentials are configured
//     if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
//       await transporter.sendMail(mailOptions);
//     } else {
//       console.log("EMAIL_USER or EMAIL_PASS not found in .env. Simulating email send:", mailOptions);
//     }

//     return NextResponse.json({ success: true, message: "Application submitted successfully" });
//   } catch (error: any) {
//     console.error("Error submitting application:", error);
//     return NextResponse.json(
//       { error: "Failed to submit application. Please try again." },
//       { status: 500 }
//     );
//   }
// }
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
    const currentCompany = formData.get("currentCompany") as string;
    const skills = formData.get("skills") as string;
    const primaryTechnology = formData.get("primaryTechnology") as string;
    const message = formData.get("message") as string;
    const noticePeriod = formData.get("noticePeriod") as string;
    const expectedSalary = formData.get("expectedSalary") as string;
    const relocate = formData.get("relocate") as string;
    const resume = formData.get("resume") as File;

    if (!resume) {
      return NextResponse.json({ error: "Resume is required" }, { status: 400 });
    }

    const bytes = await resume.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Create SMTP transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 465,
      secure: true, // false for STARTTLS
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: { rejectUnauthorized: false },
    });

    // Simple HTML email content
    const mailOptions = {
      from: `"${process.env.FROM_NAME}" <${process.env.FROM_EMAIL}>`,
      to: process.env.MAIL_TO,
      replyTo: `"${name}" <${email}>`,
      subject: `New Job Application: ${jobTitle} - ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width:600px; margin:auto; padding:20px; background:#fff; border:1px solid #ddd; border-radius:8px;">
          <h2 style="color:#333;">New Job Application</h2>
          <p><strong>Position:</strong> ${jobTitle}</p>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          ${linkedin ? `<p><strong>LinkedIn:</strong> <a href="${linkedin}" target="_blank">${linkedin}</a></p>` : ''}
          <p><strong>Experience:</strong> ${experience}</p>
          ${currentCompany ? `<p><strong>Current Company:</strong> ${currentCompany}</p>` : ''}
          ${primaryTechnology ? `<p><strong>Primary Technology:</strong> ${primaryTechnology}</p>` : ''}
          ${noticePeriod ? `<p><strong>Notice Period:</strong> ${noticePeriod}</p>` : ''}
          ${skills ? `<p><strong>Skills:</strong> ${skills}</p>` : ''}
          ${expectedSalary ? `<p><strong>Expected Salary:</strong> ${expectedSalary}</p>` : ''}
          ${relocate ? `<p><strong>Willing to Relocate:</strong> ${relocate}</p>` : ''}
          ${message ? `<p><strong>Cover Letter:</strong><br>${message.replace(/\n/g, "<br>")}</p>` : ''}
          <p><strong>Resume:</strong> Attached (${resume.name})</p>
          <p style="color:#777; font-size:12px; margin-top:20px;">Submitted via Coreway Solutions Careers Portal</p>
        </div>
      `,
      attachments: [
        {
          filename: resume.name,
          content: buffer,
        },
      ],
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: "Application submitted successfully" });

  } catch (error: any) {
    console.error("Email sending error:", error);
    return NextResponse.json({ error: "Failed to submit application. Please try again." }, { status: 500 });
  }
}

