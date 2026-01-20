import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: Request) {
  try {
    const formData = await request.json();
    
    const emailContent = `
      New Contact Form Submission
      
      Name: ${formData.name}
      Email: ${formData.email}
      Phone: ${formData.phone}
      Service: ${formData.service}
      WeChat: ${formData.wechat || 'Not provided'}
      SMS Consent: ${formData.smsConsent ? 'Yes' : 'No'}
      
      Message:
      ${formData.message}
    `;
    
    const resend = new Resend(process.env.RESEND_API_KEY);
    
    // Use Resend's test email for the "from" address
    const result = await resend.emails.send({
      from: 'INV@cchtrip.com',
      to: 'INV@cchtrip.com',
      subject: 'CCH - Contact Us Form Submission',
      text: emailContent,
    });
    
    console.log('Email sent successfully:', result);
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json({ error: 'Failed to process form' }, { status: 500 });
  }
}