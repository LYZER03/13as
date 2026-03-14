import type { Metadata } from 'next';
import MediaPlaceholder from '@/components/MediaPlaceholder';
import { FadeIn, ScaleIn, ScrollScale } from '@/components/AnimatedText';
import PageTransition from '@/components/PageTransition';
import TransitionLink from '@/components/TransitionLink';
import { ArrowRight } from 'lucide-react';
import HeroSlideshow from '@/components/HeroSlideshow';
import HeroScrollEffect from '@/components/HeroScrollEffect';
import InteractiveChineseText from '@/components/InteractiveChineseText';
import InteractiveMediaCard from '@/components/InteractiveMediaCard';

export const metadata: Metadata = {
  title: '13AS | Chinese Lion Dance Visual Design',
  description: '13AS is a visual design studio specializing in the art, culture, and motion of the Chinese lion dance.',
  keywords: ['13AS', 'chinese lion dance', 'visual design', 'cultural art', 'motion design']
};

export default function Home() {
  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden bg-black -mt-24">
        <HeroScrollEffect>
          {/* Fullscreen Auto-playing Slideshow */}
          <HeroSlideshow />

          {/* Layered Overlay Content */}
          <div className="w-full px-4 md:px-6 relative z-20 flex flex-col h-full pt-32 pb-12 text-white pointer-events-none">
            {/* Vertical Chinese Text */}
            <div className="absolute right-6 md:right-12 top-1/2 -translate-y-1/2 pointer-events-auto z-50">
              <InteractiveChineseText />
            </div>

            {/* Main Title Centered (Removed) */}
            <div className="flex flex-col items-center justify-center flex-1 w-full">
            </div>

            {/* Bottom Bar: Paragraph (Left) & Button (Right) */}
            <div className="w-full flex flex-col md:flex-row justify-between items-end mt-auto gap-8">
              <FadeIn delay={0.4} className="max-w-xl text-left">
                <p className="text-xl md:text-3xl font-bold leading-relaxed tracking-wide drop-shadow-md">
                  La plus grande équipe de danse du lion de France. <span className="text-neutral-300">Moment parfait pour partager bonheur et meilleurs vœux.</span>
                </p>
              </FadeIn>
              <FadeIn delay={0.2} className="pointer-events-auto">
                <TransitionLink href="/portfolio" className="inline-flex items-center gap-2 bg-red-600 text-white px-8 py-4 rounded-full font-medium hover:bg-red-700 transition-colors shadow-xl">
                  Voir nos réalisations <ArrowRight size={18} />
                </TransitionLink>
              </FadeIn>
            </div>
          </div>
        </HeroScrollEffect>
      </section>

      {/* Content that slides over the hero */}
      <div className="relative z-10 bg-white">
        <div className="bg-black">
          {/* Gradient Divider */}
          <div className="h-px w-full bg-gradient-to-r from-transparent via-neutral-500/50 to-transparent" />

          {/* Intro Section */}
          <section className="py-32 bg-black text-white flex items-center justify-center min-h-[60vh]">
            <div className="container mx-auto px-6 md:px-12 text-center flex flex-col items-center">
              <ScrollScale>
                <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter uppercase max-w-5xl leading-tight mx-auto">
                  La tradition <span className="text-red-600">Millénaire</span> pour <span className="text-red-600">épater vos invités</span>.
                </h2>
              </ScrollScale>
            </div>
          </section>
        </div>

        {/* Portfolio Preview */}
        <section className="py-32 container mx-auto px-6 md:px-12">
        <div className="flex justify-between items-end mb-16">
          <FadeIn>
            <h2 className="font-display text-5xl md:text-7xl font-bold tracking-tighter uppercase">Nos meilleurs<br/>moments</h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <TransitionLink href="/portfolio" className="hidden md:inline-flex items-center gap-2 border-b-2 border-black pb-1 font-medium hover:text-red-600 hover:border-red-600 transition-colors">
              Voir tous les projets <ArrowRight size={18} />
            </TransitionLink>
          </FadeIn>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {[
            { media: '/images/spectacle-danse-lion-nouvel-an-chinois-paris.webp', title: 'Nouvel An Chinois' },
            { media: '/video/spectacle-danse-lion-paris-13-1.mp4', title: 'Inauguration', isVideo: true },
            { media: '/images/prestation-mariage-fiancailles-danse-lion.jpg', title: 'Mariage' },
            { media: '/video/prestation-danse-lion-versailles-nakhon-thai.mp4', title: 'Évènements Privés', isVideo: true },
          ].map((item, i) => (
            <FadeIn key={i} delay={i * 0.1} className={i % 2 !== 0 ? 'md:mt-24' : ''}>
              <InteractiveMediaCard 
                media={item.media} 
                title={item.title} 
                isVideo={item.isVideo} 
              />
            </FadeIn>
          ))}
        </div>
        <div className="mt-12 md:hidden">
          <TransitionLink href="/portfolio" className="inline-flex items-center gap-2 border-b-2 border-black pb-1 font-medium hover:text-red-600 hover:border-red-600 transition-colors">
            Voir tous les projets <ArrowRight size={18} />
          </TransitionLink>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-32 bg-neutral-50 border-t border-neutral-200">
        <div className="container mx-auto px-6 md:px-12">
          <FadeIn>
            <h2 className="font-display text-5xl md:text-7xl font-bold tracking-tighter uppercase mb-16">Nos Services</h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Mariage', desc: 'Moment parfait pour partager bonheur et meilleurs vœux aux mariés avec une danse pour épater les invités.' },
              { title: 'Inauguration', desc: 'Nous inaugurons l’ouverture de vos restaurants afin de vous souhaiter le meilleur pour votre commerce.' },
              { title: 'Événements privés', desc: 'Nous avons possibilité d’intervenir pour des événements privés au sein de votre entreprise pour apporter du bonheur aux collaborateurs.' }
            ].map((service, i) => (
              <FadeIn key={service.title} delay={i * 0.1} className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="font-mono text-sm text-red-600 mb-8">0{i + 1}</div>
                <h3 className="font-display text-2xl font-bold uppercase tracking-tight mb-4">{service.title}</h3>
                <p className="text-neutral-600 mb-8">{service.desc}</p>
                <TransitionLink href="/prestations" className="inline-flex items-center gap-2 text-sm font-medium hover:text-red-600 transition-colors">
                  En savoir plus <ArrowRight size={16} />
                </TransitionLink>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-32 container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <div className="relative w-full aspect-square rounded-full overflow-hidden shadow-2xl">
              <img src="/images/portrait-equipe-13as-nouvel-an.jpg" alt="L'Équipe" className="object-cover w-full h-full hover:scale-105 transition-transform duration-700" />
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <h2 className="font-display text-5xl md:text-7xl font-bold tracking-tighter uppercase mb-8">L'Équipe</h2>
            <p className="text-xl text-neutral-600 mb-8 leading-relaxed">
              Nous sommes la plus grande équipe de danse du lion en France, basés au 19 Avenue de Choisy, 75013 Paris. Venez découvrir notre histoire et notre passion pour cet art traditionnel.
            </p>
            <TransitionLink href="/histoire" className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-full font-medium hover:bg-red-700 transition-colors shadow-lg">
              Découvrir notre histoire <ArrowRight size={18} />
            </TransitionLink>
          </FadeIn>
        </div>
      </section>
      </div>
    </PageTransition>
  );
}
