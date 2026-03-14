import type { Metadata } from 'next';
import { FadeIn } from '@/components/AnimatedText';
import PageTransition from '@/components/PageTransition';
import PortfolioGrid from '@/components/PortfolioGrid';

export const metadata: Metadata = {
  title: 'Portfolio | 13AS',
  description: 'Explorez notre galerie photo et vidéo pour découvrir l\'univers de Lion Dance Franco Asiatique.',
  keywords: ['portfolio', 'danse du lion', '13as', 'évènements', 'mariages', 'inauguration']
};

export default function Portfolio() {
  return (
    <PageTransition>
      <div className="container mx-auto px-6 md:px-12 py-20">
        <FadeIn>
          <h1 className="font-display text-6xl md:text-8xl font-bold tracking-tighter uppercase mb-6">Portfolio</h1>
          <p className="text-xl text-neutral-600 max-w-2xl mb-12">Revivez à travers nos photos les meilleurs moments durant divers événements : Nouvel An Chinois, mariage, inauguration, événements privés.</p>
        </FadeIn>

        <PortfolioGrid />
      </div>
    </PageTransition>
  );
}
