import React from 'react';
import EmailTemplate from '../../components/EmailTemplate';

import { Resend } from 'resend';
const resend = new Resend('re_123456789');

export default async function send(req, res) {
  try {
    const data = await resend.sendEmail({
      from: 'onboarding@resend.dev',
      to: 'user@gmail.com',
      subject: 'hello world',
      react: <EmailTemplate firstName="John" product="MyApp" />,
    });

    res.status(200).json(data);
  } catch (e) {
    res.status(400).json(e);
  }
}
