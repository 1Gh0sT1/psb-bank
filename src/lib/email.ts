import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT) || 465,
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function sendEmail({ subject, text, html }: { subject: string; text: string; html?: string }) {
  if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
    console.warn('SMTP credentials not configured. Email will not be sent.');
    return { success: false, error: 'SMTP configuration missing' };
  }

  try {
    const info = await transporter.sendMail({
      from: `"PSB Portal" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_RECEIVER_EMAIL || process.env.SMTP_USER,
      subject: subject,
      text: text,
      html: html,
    });

    console.log('Message sent: %s', info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error };
  }
}
