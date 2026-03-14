'use client';

import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';

const characters = [
  { char: '傲', pinyin: 'Ào', meaning: 'Fierté' },
  { char: '譽', pinyin: 'Yù', meaning: 'Honneur' },
  { char: '舞', pinyin: 'Wǔ', meaning: 'Danse' },
  { char: '獅', pinyin: 'Shī', meaning: 'Lion' },
  { char: '協', pinyin: 'Xié', meaning: 'Association' },
  { char: '會', pinyin: 'Huì', meaning: 'Société' },
];

function Character({ item, delay }: { item: typeof characters[0]; delay: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="relative flex items-center justify-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Calligraphy Glow Effect (Brush in motion) */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotate: -15 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.8, rotate: 10 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center"
          >
            {/* Ink dab simulation */}
            <div className="absolute w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,_rgba(220,38,38,0.35)_0%,_transparent_60%)] blur-[2px] mix-blend-screen" />
            <div className="absolute w-[150%] h-[150%] bg-red-600/20 rounded-[40%_60%_70%_30%] blur-md transform -skew-x-12 rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* The Character */}
      <motion.span
        animate={{
          scale: isHovered ? 1.15 : 1,
          color: isHovered ? '#ffffff' : 'rgba(255,255,255,0.85)',
          textShadow: isHovered
            ? '0 0 20px rgba(220,38,38,0.6)'
            : '0 4px 10px rgba(0,0,0,0.5)',
        }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="relative z-10 text-3xl md:text-4xl lg:text-5xl font-light cursor-crosshair select-none"
      >
        {item.char}
      </motion.span>

      {/* Tooltip (Chinese Ink Effect) */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, x: 20, filter: 'blur(4px)' }}
            animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, x: 10, filter: 'blur(4px)' }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="absolute right-full top-1/2 -translate-y-1/2 mr-6 md:mr-8 pointer-events-none z-20"
          >
            {/* Ink-like Tooltip Container */}
            <div className="relative flex flex-col items-end text-right min-w-[140px]">
              {/* Organic ink background */}
              <div
                className="absolute inset-0 bg-black/85 backdrop-blur-md -z-10 overflow-hidden"
                style={{
                  borderRadius: '4px 12px 4px 16px', // Subtle organic shape
                  boxShadow: '0 10px 30px -5px rgba(0,0,0,0.8)',
                }}
              >
                {/* Red ink bleed from the right edge */}
                <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_right,_rgba(220,38,38,0.8)_0%,_transparent_80%)]" />
              </div>

              {/* Elegant content */}
              <div className="px-5 py-3 border-r-2 border-red-600/80 w-full relative">
                <div className="text-red-500 font-mono text-[10px] tracking-[0.2em] uppercase mb-1 opacity-90">
                  {item.pinyin}
                </div>
                <div className="text-white font-light tracking-widest text-sm uppercase whitespace-nowrap">
                  {item.meaning}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function InteractiveChineseText() {
  return (
    <div className="flex flex-col items-center gap-6 md:gap-8">
      {characters.map((item, index) => (
        <Character key={index} item={item} delay={0.6 + index * 0.1} />
      ))}
    </div>
  );
}
