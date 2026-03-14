import type { Metadata } from 'next';
import MediaPlaceholder from '@/components/MediaPlaceholder';
import { FadeIn } from '@/components/AnimatedText';
import PageTransition from '@/components/PageTransition';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact | 13AS',
  description: 'Prêt à démarrer votre prochain projet ou prestation ? Contactez Lion Dance Franco Asiatique pour discuter de vos événements.',
  keywords: ['contact', 'nous engager', 'contact 13as', 'démarrer un projet', 'prestation danse du lion']
};

export default function Contact() {
  return (
    <PageTransition>
      <div className="container mx-auto px-6 md:px-12 py-20">
        <FadeIn>
          <h1 className="font-display text-6xl md:text-8xl font-bold tracking-tighter uppercase mb-6">Bonjour.</h1>
          <p className="text-xl text-neutral-600 max-w-2xl mb-20">Prêt à discuter de votre événement ? Nous serions ravis de collaborer avec vous.</p>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <FadeIn delay={0.2}>
            <ContactForm />
          </FadeIn>

          <FadeIn delay={0.4} className="space-y-12 lg:pl-12">
            <div>
              <h3 className="font-mono text-sm text-neutral-500 uppercase tracking-widest mb-4">Email Direct</h3>
              <a href="mailto:13asiespectacle@gmail.com" className="font-display text-3xl md:text-4xl font-bold hover:text-red-600 transition-colors">13asiespectacle@gmail.com</a>
            </div>
            <div>
              <h3 className="font-mono text-sm text-neutral-500 uppercase tracking-widest mb-4">Téléphone</h3>
              <p className="text-lg font-medium mb-1">Tommy: <a href="tel:+337XXXXXXXX" className="hover:text-red-600 transition-colors">+33 7 XXXXXXXXX</a></p>
            </div>
            <div>
              <h3 className="font-mono text-sm text-neutral-500 uppercase tracking-widest mb-4">Localisation</h3>
              <p className="text-lg font-medium">19 rue de XXXXXXXXX<br />Paris, France 75013</p>
            </div>
          </FadeIn>
        </div>
      </div>
    </PageTransition>
  );
}
