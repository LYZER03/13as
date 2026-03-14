import TransitionLink from '@/components/TransitionLink';
import { Facebook, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-32 pb-20">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-5 gap-12">
        <div className="col-span-1 md:col-span-2">
          <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tighter mb-6 uppercase">
            Créons ensemble.
          </h2>
          <TransitionLink href="/contact" className="inline-block border-b-2 border-white pb-1 text-lg font-medium hover:text-red-600 hover:border-red-600 transition-colors">
            Démarrer un projet
          </TransitionLink>
        </div>
        <div>
          <h3 className="font-mono text-xs text-neutral-500 uppercase tracking-widest mb-6">Contact</h3>
          <ul className="space-y-3 text-sm">
            <li className="text-neutral-300">19 rue de XXXXXXXXX<br />75013 Paris, France</li>
            <li><a href="tel:+337XXXXXXXX" className="hover:text-red-600 transition-colors">+33 7 XXXXXXXXX</a></li>
            <li><a href="mailto:13asiespectacle@gmail.com" className="hover:text-red-600 transition-colors">13asiespectacle@gmail.com</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-mono text-xs text-neutral-500 uppercase tracking-widest mb-6">Navigation</h3>
          <ul className="space-y-3 text-sm">
            <li><TransitionLink href="/portfolio" className="hover:text-red-600 transition-colors">Portfolio</TransitionLink></li>
            <li><TransitionLink href="/prestations" className="hover:text-red-600 transition-colors">Prestations</TransitionLink></li>
            <li><TransitionLink href="/histoire" className="hover:text-red-600 transition-colors">Notre Histoire</TransitionLink></li>
            <li><TransitionLink href="/contact" className="hover:text-red-600 transition-colors">Contact</TransitionLink></li>
          </ul>
        </div>
        <div>
          <h3 className="font-mono text-xs text-neutral-500 uppercase tracking-widest mb-6">Réseaux</h3>
          <div className="flex gap-4">
            <a href="https://www.facebook.com/p/13AS-La-Danse-du-Lion-100067409374573/" className="hover:text-red-600 transition-colors text-neutral-300" aria-label="Facebook">
              <Facebook size={24} />
            </a>
            <a href="https://www.instagram.com/13as.liondance/" className="hover:text-red-600 transition-colors text-neutral-300" aria-label="Instagram">
              <Instagram size={24} />
            </a>
            <a href="#" className="hover:text-red-600 transition-colors text-neutral-300" aria-label="YouTube">
              <Youtube size={24} />
            </a>
            <a href="https://www.tiktok.com/tag/13as?is_from_webapp=1&sender_device=pc" className="hover:text-red-600 transition-colors text-neutral-300" aria-label="TikTok">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-6 md:px-12 mt-20 pt-8 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center text-sm text-neutral-500">
        <p>&copy; {new Date().getFullYear()} 13AS. Tous droits réservés.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <TransitionLink href="#" className="hover:text-red-600">Politique de confidentialité</TransitionLink>
          <TransitionLink href="#" className="hover:text-red-600">Conditions d'utilisation</TransitionLink>
        </div>
      </div>
    </footer>
  );
}
