// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { sendContactForm } from '@/lib/api';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, subject, message } = req.body;
    const formData = { name, email, subject, message };

    try {
      // Call your sendContactForm function or implement the email sending logic here
      await sendContactForm(formData);

      res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Failed to send email.' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}

