'use server';

import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '465', 10),
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function sendContactEmail(formData: FormData) {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const message = formData.get('message') as string;

  if (!name || !email || !message) {
    return { error: 'Veuillez remplir tous les champs.' };
  }

  try {
    // 1. Envoyer la notification à vous-même (Propriétaire du site)
    const info = await transporter.sendMail({
      from: `"13AS Contact" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER, // The destination email
      replyTo: email,
      subject: `Nouveau message de ${name} via le site 13AS`,
      html: `
        <h2>Nouvelle demande de contact 13AS</h2>
        <p><strong>Nom :</strong> ${name}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Message :</strong></p>
        <p style="white-space: pre-wrap;">${message}</p>
      `
    });

    // 2. Envoyer un email de confirmation automatique au client
    await transporter.sendMail({
      from: `"13AS - Danse du Lion" <${process.env.SMTP_USER}>`,
      to: email, // Email du client
      subject: `Confirmation de votre demande de contact - 13AS`,
      html: `
        <div style="font-family: sans-serif; color: #333;">
          <h2>Bonjour ${name},</h2>
          <p>Nous vous confirmons la bonne réception de votre demande via notre site 13AS.</p>
          <p>Notre équipe prendra connaissance de votre message et vous répondra dans les plus brefs délais.</p>
          <br/>
          <p><strong>Rappel de votre message :</strong></p>
          <blockquote style="border-left: 4px solid #dc2626; padding-left: 10px; color: #555; white-space: pre-wrap;">
            ${message}
          </blockquote>
          <br/>
          <p>À très bientôt,</p>
          <p><strong>L'équipe 13AS</strong></p>
        </div>
      `
    });

    return { success: true, data: info.messageId };
  } catch (error) {
    console.error("Erreur Nodemailer:", error);
    return { error: 'Impossible d\'envoyer le message pour le moment. Veuillez réessayer plus tard.' };
  }
}
