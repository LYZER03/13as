'use client';

import { useRef } from 'react';
import TransitionLink from '@/components/TransitionLink';

interface InteractiveMediaCardProps {
  media: string;
  title: string;
  isVideo?: boolean;
}

export default function InteractiveMediaCard({ media, title, isVideo }: InteractiveMediaCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    if (isVideo && videoRef.current) {
      videoRef.current.play().catch(() => {
        // Handle playback error silently if browser policy blocks autoplay
      });
    }
  };

  const handleMouseLeave = () => {
    if (isVideo && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <TransitionLink 
      href="/portfolio" 
      className="block group" 
      onMouseEnter={handleMouseEnter} 
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative w-full aspect-[4/5] rounded-xl mb-6 overflow-hidden">
        {isVideo ? (
          <video 
            ref={videoRef}
            src={media} 
            muted 
            playsInline 
            className="object-cover w-full h-full grayscale group-hover:grayscale-0 group-hover:scale-[1.02] transition-all duration-500 ease-in-out" 
          />
        ) : (
          <img 
            src={media} 
            alt={title} 
            className="object-cover w-full h-full grayscale group-hover:grayscale-0 group-hover:scale-[1.02] transition-all duration-500 ease-in-out" 
          />
        )}
      </div>
      <h3 className="font-display text-2xl font-bold uppercase tracking-tight">{title}</h3>
      <p className="text-neutral-500 mt-2">Événement / Prestation</p>
    </TransitionLink>
  );
}
