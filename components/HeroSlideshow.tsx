'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const images = [
  '/images/lion-dance-franco-asiatique-paris-13.jpg',
  '/images/equipe-13as-troupe-danse-lion-paris.jpg',
  '/images/equipe-13as-en-preparation.jpg',
  '/images/animation-evenement-prive-entreprise-danse-lion.jpg',
];

export default function HeroSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {images.map((src, index) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={src}
            alt={`Slideshow image ${index + 1}`}
            fill
            priority={index === 0}
            className="object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      ))}
      {/* Subtle dark radial gradient overlay to ensure text legibility */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,0,0,0.3)_0%,_rgba(0,0,0,0.8)_100%)] z-10" />
    </div>
  );
}
