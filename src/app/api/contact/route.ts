import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Lazily create the client at request time. `next build` evaluates every
    // route module to collect page data; instantiating Resend at module scope
    // would throw "Missing API key" during the build when the secret isn't set.
    // Keeping it runtime-only also means the secret never needs to be baked
    // into the production image.
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error('RESEND_API_KEY is not configured');
      return NextResponse.json(
        { error: 'Email service is not configured' },
        { status: 500 }
      );
    }
    const resend = new Resend(apiKey);

    // Send email using Resend
    await resend.emails.send({
      from: 'Business Hub <onboarding@resend.dev>', // Resend's test domain
      to: ['phoniexfnarr888@gmail.com'], // Change this to YOUR email
      subject: `New Contact: ${subject || 'No Subject'}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject || 'N/A'}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json({ 
      success: true, 
      message: 'Email sent successfully' 
    });
    
  } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}