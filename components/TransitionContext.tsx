'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';

interface TransitionContextType {
  navigate: (href: string) => void;
}

const TransitionContext = createContext<TransitionContextType | null>(null);

export function useTransition() {
  const context = useContext(TransitionContext);
  if (!context) {
    throw new Error('useTransition must be used within a TransitionProvider');
  }
  return context;
}

export function TransitionProvider({ children }: { children: React.ReactNode }) {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const pathname = usePathname();
  const router = useRouter();

  // Handle initial load
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsInitialLoad(false);
    }, 1200); // Show loader for 1.2s on hard refresh
    return () => clearTimeout(timer);
  }, []);

  const isTransitioningRef = React.useRef(isTransitioning);
  useEffect(() => {
    isTransitioningRef.current = isTransitioning;
  }, [isTransitioning]);

  // Handle route changes (finish transition when pathname changes)
  useEffect(() => {
    if (isTransitioningRef.current) {
      // Wait a bit after the new page renders to fade out
      const timer = setTimeout(() => {
        setIsTransitioning(false);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [pathname]);

  const navigate = (href: string) => {
    if (href === pathname) return;
    setIsTransitioning(true);
    
    // Wait for the fade-in animation to complete (500ms) before navigating
    setTimeout(() => {
      router.push(href);
    }, 500);
  };

  const showLoader = isInitialLoad || isTransitioning;

  return (
    <TransitionContext.Provider value={{ navigate }}>
      {children}
      <AnimatePresence mode="wait">
        {showLoader && (
          <motion.div
            key="global-loader"
            initial={{ opacity: isInitialLoad ? 1 : 0, y: "0%" }}
            animate={{ opacity: 1, y: "0%" }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-red-600"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: isInitialLoad ? 0.2 : 0.1 }}
            >
              <h1 className="font-display text-4xl md:text-6xl lg:text-8xl font-black tracking-tighter text-black">
                13as<span className="text-white">.liondance</span>
              </h1>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </TransitionContext.Provider>
  );
}
