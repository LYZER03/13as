'use server';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(formData: FormData) {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const message = formData.get('message') as string;

  if (!name || !email || !message) {
    return { error: 'Veuillez remplir tous les champs.' };
  }

  try {
    const { data, error } = await resend.emails.send({
      from: '13AS Contact <onboarding@resend.dev>', // Should eventually be configured to user's verified domain on Resend
      to: 'lyzerdong03@gmail.com',
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

    if (error) {
      console.error("Erreur Resend:", error.message);
      return { error: 'Impossible d\'envoyer le message pour le moment. Veuillez réessayer plus tard.' };
    }

    return { success: true, data };
  } catch (err) {
    return { error: 'Une erreur est survenue lors de l\'envoi du message.' };
  }
}
