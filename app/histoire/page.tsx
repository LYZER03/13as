import type { Metadata } from 'next';
import MediaPlaceholder from '@/components/MediaPlaceholder';
import { FadeIn } from '@/components/AnimatedText';
import PageTransition from '@/components/PageTransition';

export const metadata: Metadata = {
  title: 'Notre Histoire | 13AS',
  description: 'Découvrez l\'histoire de 13AS, de nos débuts à l\'équipe de danse du lion que nous sommes aujourd\'hui.',
  keywords: ['à propos', 'notre histoire', 'histoire 13as', 'danse du lion', 'paris']
};

export default function Histoire() {
  return (
    <PageTransition>
      <div className="container mx-auto px-6 md:px-12 py-20">
        <FadeIn>
          <h1 className="font-display text-6xl md:text-8xl font-bold tracking-tighter uppercase mb-6">Notre<br/>Histoire</h1>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-20">
          <FadeIn delay={0.2} className="relative">
            <div className="sticky top-32">
              <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
                <img src="/images/fondateurs-13as-danse-lion-paris.jpg" alt="L'Équipe" className="object-cover w-full h-full" />
              </div>
            </div>
          </FadeIn>
          
          <div className="space-y-24 pt-12">
            <FadeIn>
              <h2 className="font-display text-3xl font-bold uppercase mb-6">Le Commencement</h2>
              <p className="text-lg text-neutral-600 leading-relaxed">
                Née d'une passion commune pour les arts martiaux et la culture asiatique, 13AS a été fondée avec pour mission de promouvoir et préserver l'art millénaire de la danse du lion en France. Ce qui a commencé comme un petit groupe d'amis s'entraînant sans relâche s'est rapidement transformé en une troupe reconnue.
              </p>
            </FadeIn>
            
            <FadeIn>
              <div className="relative w-full aspect-video rounded-xl my-8 overflow-hidden shadow-lg">
                <img src="/images/entrainement-danse-lion-13as.jpg" alt="Entraînement de Danse du Lion" className="object-cover w-full h-full" />
              </div>
            </FadeIn>

            <FadeIn>
              <h2 className="font-display text-3xl font-bold uppercase mb-6">L'Évolution</h2>
              <p className="text-lg text-neutral-600 leading-relaxed">
                Au fil des années, notre équipe s'est agrandie. Nous avons participé à de multiples compétitions, devenant même les dignes représentants de cet art lors des grands défilés du Nouvel An Lunaire, notamment dans le 13e arrondissement de Paris.
              </p>
            </FadeIn>

            <FadeIn>
              <blockquote className="border-l-4 border-red-600 pl-6 py-2 my-12">
                <p className="font-display text-3xl italic font-medium leading-tight">
                  &quot;La danse du lion n'est pas qu'une simple performance. C'est le battement de cœur de notre culture, donné vie grâce au mouvement, à la musique et à la tradition.&quot;
                </p>
              </blockquote>
            </FadeIn>

            <FadeIn>
              <h2 className="font-display text-3xl font-bold uppercase mb-6">Aujourd'hui</h2>
              <p className="text-lg text-neutral-600 leading-relaxed">
                Aujourd'hui, nous sommes fiers d'être la plus grande équipe de danse du lion en France. Notre objectif reste inchangé : transmettre notre savoir aux nouvelles générations et partager des moments inoubliables de bonheur et de prospérité avec notre public.
              </p>
            </FadeIn>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
