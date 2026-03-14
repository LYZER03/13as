'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import { ReactNode } from 'react';

export default function HeroScrollEffect({ children }: { children: ReactNode }) {
  const { scrollY } = useScroll();
  
  // Move down slightly slower than the scroll speed for a parallax effect
  const y = useTransform(scrollY, [0, 1000], [0, 300]);
  // Fade out as it gets covered
  const opacity = useTransform(scrollY, [0, 600], [1, 0]);

  return (
    <motion.div 
      style={{ y, opacity }} 
      className="absolute inset-0 w-full h-full flex flex-col"
    >
      {children}
    </motion.div>
  );
}
