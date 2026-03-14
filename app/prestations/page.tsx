import type { Metadata } from 'next';
import MediaPlaceholder from '@/components/MediaPlaceholder';
import { FadeIn } from '@/components/AnimatedText';
import PageTransition from '@/components/PageTransition';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import TransitionLink from '@/components/TransitionLink';

export const metadata: Metadata = {
  title: 'Nos Prestations | 13AS',
  description: 'Des solutions complètes pour sublimer l\'art de la danse du lion asiatique lors de vos événements : mariages, inaugurations et événements corporatifs.',
  keywords: ['prestations', 'danse du lion', 'mariages', 'inaugurations', 'événements professionnels', 'spectacle asiatique']
};

export default function Prestations() {
  const services = [
    {
      id: '01',
      title: 'Mariages',
      desc: 'Le moment idéal pour partager bonheur, prospérité et meilleurs vœux aux mariés avec une danse spectaculaire qui épatera vos invités.',
      benefits: ['Touche culturelle authentique', 'Spectacle interactif', 'Vœux de prospérité', 'Animation mémorable'],
      img: '/images/prestation-mariage-fiancailles-danse-lion.jpg'
    },
    {
      id: '02',
      title: 'Inaugurations',
      desc: 'Nous inaugurons l\'ouverture de vos restaurants et commerces avec une cérémonie traditionnelle dynamique destinée à vous apporter chance et succès.',
      benefits: ['Cérémonie du Cueillir le Vert (Cai Qing)', 'Bénédiction du commerce', 'Attirer l\'attention du public', 'Rituel traditionnel complet'],
      img: '/images/inauguration-restaurant-commerce-danse-lion.jpg'
    },
    {
      id: '03',
      title: 'Événements Privés',
      desc: 'Nous intervenons pour des événements professionnels ou privés afin d\'apporter bonheur, énergie et cohésion d\'équipe à vos collaborateurs.',
      benefits: ['Team Building', 'Soirées d\'entreprise', 'Célébrations de fin d\'année', 'Spectacle sur-mesure'],
      img: '/images/animation-evenement-prive-entreprise-danse-lion.jpg'
    }
  ];

  return (
    <PageTransition>
      <div className="container mx-auto px-6 md:px-12 py-20">
        <FadeIn>
          <h1 className="font-display text-6xl md:text-8xl font-bold tracking-tighter uppercase mb-6">Prestations</h1>
          <p className="text-xl text-neutral-600 max-w-2xl mb-20">Nous mettons notre passion et notre énergie à votre service pour rendre vos événements inoubliables.</p>
        </FadeIn>

        <div className="space-y-32">
          {services.map((service, i) => (
            <div key={service.id} className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <FadeIn className={`lg:col-span-5 ${i % 2 !== 0 ? 'lg:order-2' : ''}`}>
                <div className="font-mono text-6xl text-neutral-200 font-bold mb-6">{service.id}</div>
                <h2 className="font-display text-4xl md:text-5xl font-bold uppercase tracking-tight mb-6">{service.title}</h2>
                <p className="text-lg text-neutral-600 mb-8 leading-relaxed">{service.desc}</p>
                <ul className="space-y-4 mb-10">
                  {service.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center gap-3 font-medium">
                      <CheckCircle2 size={20} className="text-red-600" />
                      {benefit}
                    </li>
                  ))}
                </ul>
                <TransitionLink href="/contact" className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-full font-medium hover:bg-red-700 transition-colors">
                  Demander un devis <ArrowRight size={18} />
                </TransitionLink>
              </FadeIn>
              <FadeIn delay={0.2} className={`lg:col-span-7 ${i % 2 !== 0 ? 'lg:order-1' : ''}`}>
                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                  <img src={service.img} alt={service.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                </div>
              </FadeIn>
            </div>
          ))}
        </div>
      </div>
    </PageTransition>
  );
}
