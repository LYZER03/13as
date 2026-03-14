import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { TransitionProvider } from '@/components/TransitionContext';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space' });

export const metadata: Metadata = {
  title: '13AS | La Danse du Lion',
  description: 'La plus grande équipe de danse du lion de France. Moment parfait pour partager bonheur et meilleurs vœux.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} scroll-smooth`} suppressHydrationWarning>
      <body className="bg-white text-black font-sans antialiased selection:bg-red-600 selection:text-white flex flex-col min-h-screen" suppressHydrationWarning>
        <TransitionProvider>
          <Navigation />
          <main className="flex-grow pt-24">
            {children}
          </main>
          <Footer />
        </TransitionProvider>
      </body>
    </html>
  );
}
