'use client';

import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { sendContactEmail } from '@/app/contact/actions';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  async function handleSubmit(formData: FormData) {
    setStatus('loading');
    setErrorMessage('');
    
    const result = await sendContactEmail(formData);
    
    if (result.error) {
      setErrorMessage(result.error);
      setStatus('error');
    } else {
      setStatus('success');
    }
  }

  if (status === 'success') {
    return (
      <div className="bg-green-50/50 border border-green-200 text-green-800 rounded-2xl p-8 text-center space-y-4">
        <h3 className="text-2xl font-display font-bold uppercase">Message Bien Reçu !</h3>
        <p>Merci de nous avoir contactés. Nous reviendrons vers vous très prochainement.</p>
        <button 
          onClick={() => setStatus('idle')}
          className="mt-4 border-b border-green-800 hover:text-green-600 hover:border-green-600 transition-colors pb-1"
        >
          Envoyer un autre message
        </button>
      </div>
    );
  }

  return (
    <form action={handleSubmit} className="space-y-8">
      <div>
        <label htmlFor="name" className="block text-sm font-medium uppercase tracking-wide mb-2">Nom & Prénom</label>
        <input 
          type="text" 
          id="name" 
          name="name" 
          required 
          className="w-full bg-transparent border-b border-neutral-300 py-3 focus:outline-none focus:border-red-600 transition-colors" 
          placeholder="Jean Dupont" 
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium uppercase tracking-wide mb-2">E-mail</label>
        <input 
          type="email" 
          id="email" 
          name="email" 
          required 
          className="w-full bg-transparent border-b border-neutral-300 py-3 focus:outline-none focus:border-red-600 transition-colors" 
          placeholder="jean@exemple.com" 
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium uppercase tracking-wide mb-2">Message</label>
        <textarea 
          id="message" 
          name="message" 
          required 
          rows={4} 
          className="w-full bg-transparent border-b border-neutral-300 py-3 focus:outline-none focus:border-red-600 transition-colors resize-none" 
          placeholder="Parlez-nous de votre projet..."
        ></textarea>
      </div>
      
      {status === 'error' && (
        <div className="text-red-600 text-sm font-medium">
          {errorMessage}
        </div>
      )}

      <button 
        type="submit" 
        disabled={status === 'loading'}
        className="inline-flex items-center gap-2 bg-red-600 text-white px-8 py-4 rounded-full font-medium hover:bg-red-700 transition-colors w-full justify-center md:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === 'loading' ? 'Envoi en cours...' : (
          <>Envoyer <ArrowRight size={18} /></>
        )}
      </button>
    </form>
  );
}
