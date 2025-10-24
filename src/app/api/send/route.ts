import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { name, subject, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_TO,
        pass: process.env.EMAIL_PASS,
      },
    });

    const htmlTemplate = `
      <div style="font-family: 'Arial', sans-serif; padding: 20px; background-color: #f8f9fa;">
        <div style="max-width: 600px; margin: auto; background-color: #ffffff; border-radius: 10px; box-shadow: 0 4px 10px rgba(0,0,0,0.1);">
          <div style="background: linear-gradient(to right, #007bff, #6f42c1); color: white; padding: 15px 20px; border-top-left-radius: 10px; border-top-right-radius: 10px;">
            <h2 style="margin: 0;">📩 New Portfolio Message</h2>
          </div>

          <div style="padding: 20px; color: #333;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject || 'No subject provided'}</p>
            <hr style="border: none; border-top: 1px solid #ddd; margin: 15px 0;">
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap; line-height: 1.5;">${message}</p>
          </div>

          <div style="background-color: #f1f1f1; padding: 10px 20px; border-bottom-left-radius: 10px; border-bottom-right-radius: 10px; text-align: center; font-size: 12px; color: #666;">
            <p>🚀 This email was sent from your portfolio contact form.</p>
          </div>
        </div>
      </div>
    `;

    const mailOptions = {
      from: process.env.EMAIL_TO,
      to: process.env.EMAIL_TO,
      subject: `Portfolio Contact: ${subject || 'No Subject'}`,
      html: htmlTemplate,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({
      success: true,
      message: 'Email sent successfully!',
    });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
