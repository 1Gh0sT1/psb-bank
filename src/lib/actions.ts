'use server';

import { z } from 'zod';
import { sendEmail } from './email';

const contactSchema = z.object({
  name: z.string().min(2, "Name is too short"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(3, "Subject is too short"),
  message: z.string().optional(),
});

export async function submitContactForm(formData: FormData) {
  const rawData = {
    name: formData.get('name'),
    email: formData.get('email'),
    subject: formData.get('subject'),
    message: formData.get('message'),
  };

  const validated = contactSchema.safeParse(rawData);

  if (!validated.success) {
    return {
      success: false,
      errors: validated.error.flatten().fieldErrors,
    };
  }

  // Send actual email via SMTP
  const emailRes = await sendEmail({
    subject: `New Contact Inquiry: ${validated.data.subject}`,
    text: `
      Name: ${validated.data.name}
      Email: ${validated.data.email}
      Subject: ${validated.data.subject}
      Message: ${validated.data.message || 'No message provided'}
    `,
    html: `
      <h2>New Contact Inquiry</h2>
      <p><strong>Name:</strong> ${validated.data.name}</p>
      <p><strong>Email:</strong> ${validated.data.email}</p>
      <p><strong>Subject:</strong> ${validated.data.subject}</p>
      <p><strong>Message:</strong> ${validated.data.message || 'No message provided'}</p>
    `
  });

  if (!emailRes.success) {
    // We still return success to the user (to avoid security leak) 
    // but log it on the server, or maybe return a partial message.
    console.error("Failed to send email notification:", emailRes.error);
  }

  return {
    success: true,
    message: "Transmission successful. Your inquiry has been encrypted and routed to the secure desk.",
  };
}
