'use client';
import TransitionLink from '@/components/TransitionLink';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const links = [
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/prestations', label: 'Prestations' },
  { href: '/histoire', label: 'Notre Histoire' },
  { href: '/contact', label: 'Contact' },
];

export default function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [maxScale, setMaxScale] = useState(3.5);

  useEffect(() => {
    const handleResize = () => {
      if (pathname !== '/') {
        setMaxScale(1.0);
        return;
      }
      
      if (window.innerWidth < 768) {
        setMaxScale(1.0); // Mobile
      } else if (window.innerWidth < 1024) {
        setMaxScale(1.2); // Tablet
      } else {
        setMaxScale(1.5); // Desktop
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [pathname]);

  const { scrollY } = useScroll();
  const logoScale = useTransform(scrollY, [0, 200], [maxScale, 1]);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  return (
    <header className="fixed top-0 w-full z-50 py-6 pointer-events-none">
      <div className="w-full pl-4 pr-6 md:pl-6 md:pr-8 flex items-center justify-between relative pointer-events-none">
        
        {/* Logo (Left) */}
        <div className="flex-1 pointer-events-auto">
          <motion.div style={{ scale: logoScale, transformOrigin: 'left center', width: 'fit-content' }}>
            <TransitionLink href="/" className={`font-display text-2xl font-bold tracking-tighter z-50 relative block ${pathname === '/' ? 'text-white' : 'text-black'}`} onClick={() => setIsOpen(false)}>
              13as<span className="text-red-600">.liondance</span>
            </TransitionLink>
          </motion.div>
        </div>
        
        {/* Desktop Nav (Centered on Desktop, Right on Tablet) */}
        <div className="hidden md:flex flex-1 justify-end lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:justify-center pointer-events-auto">
          <nav className="flex gap-6 lg:gap-8">
            {links.map((link) => (
              <TransitionLink key={link.href} href={link.href} className="relative text-xs font-medium tracking-wide uppercase">
                <span className={pathname === link.href ? 'text-red-600 font-bold' : 'text-neutral-400 hover:text-red-600'}>
                  {link.label}
                </span>
              </TransitionLink>
            ))}
          </nav>
        </div>

        {/* Mobile Toggle (Right) */}
        <div className="flex-1 flex justify-end md:hidden pointer-events-auto">
          <button className={`z-50 relative p-2 transition-colors ${isOpen ? 'text-red-600' : (pathname === '/' ? 'text-white hover:text-red-600' : 'text-black hover:text-red-600')}`} onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="fixed inset-0 bg-black z-40 flex flex-col items-center justify-center gap-8 pointer-events-auto"
            >
              {links.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                >
                  <TransitionLink 
                    href={link.href} 
                    onClick={() => setIsOpen(false)}
                    className={`font-display text-4xl uppercase tracking-tighter ${pathname === link.href ? 'text-red-600 font-bold' : 'text-neutral-500 hover:text-red-600'}`}
                  >
                    {link.label}
                  </TransitionLink>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
