'use client';

import { useState } from 'react';
import MediaPlaceholder from '@/components/MediaPlaceholder';
import { FadeIn } from '@/components/AnimatedText';

const projects = [
  { id: 1, title: 'Défilé Paris 13', category: 'Nouvel An Chinois', aspect: 'aspect-[4/5]', img: '/images/spectacle-danse-lion-nouvel-an-chinois-paris.webp' },
  { id: 2, title: 'Ouverture Restaurant', category: 'Inauguration', aspect: 'aspect-square', img: '/images/inauguration-restaurant-commerce-danse-lion.jpg' },
  { id: 3, title: 'Célébration Fiançailles', category: 'Mariage', aspect: 'aspect-[3/4]', img: '/images/prestation-mariage-fiancailles-danse-lion.jpg' },
  { id: 4, title: 'Préparatifs 2026', category: 'Nouvel An Chinois', aspect: 'aspect-square', img: '/images/preparation-nouvel-an-chinois-13as.jpg' },
  { id: 5, title: 'Prestation Privée', category: 'Évènement Privé', aspect: 'aspect-[4/5]', img: '/images/equipe-13as-troupe-danse-lion-paris.jpg' },
  { id: 6, title: 'Défilé Paris 13', category: 'Nouvel An Chinois', aspect: 'aspect-video', img: '/images/defile-danse-lion-paris-13-nouvel-an.webp' },
];

const categories = ['Tout', ...Array.from(new Set(projects.map(p => p.category)))];

export default function PortfolioGrid() {
  const [activeCategory, setActiveCategory] = useState('Tout');

  const filteredProjects = activeCategory === 'Tout' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <>
      <FadeIn delay={0.2} className="mb-12">
        <div className="flex flex-wrap gap-3">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category
                  ? 'bg-black text-white'
                  : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200 hover:text-black'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </FadeIn>

      <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
        {filteredProjects.map((project, i) => (
          <FadeIn key={`${project.id}-${activeCategory}`} delay={i * 0.1} className="break-inside-avoid">
            <div className="group cursor-pointer">
              <div className="overflow-hidden rounded-xl mb-4 relative">
                <img src={project.img} alt={project.title} className={`w-full ${project.aspect} object-cover group-hover:scale-105 transition-transform duration-700`} />
              </div>
              <h3 className="font-display text-xl font-bold uppercase tracking-tight">{project.title}</h3>
              <p className="text-sm text-neutral-500 mt-1">{project.category}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </>
  );
}
