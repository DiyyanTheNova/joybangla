'use client';

import { useState } from 'react';
import Button from '@/components/ui/Button';

export default function LeadMagnetForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) throw new Error('Failed to submit');
      setStatus('success');
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <section className="py-24 px-6 md:px-12 bg-bh-black/60 backdrop-blur-sm border-t border-bh-white/5 text-center">
      <div className="max-w-xl mx-auto">
        <span className="inline-block text-bh-red font-heading text-sm uppercase tracking-[0.2em] mb-4">
          Free Resource
        </span>
        <h3 className="font-heading text-3xl md:text-4xl text-bh-white mb-4">
          Steal Our Viral Hooks Framework
        </h3>
        <p className="font-body text-bh-ivory/70 mb-8 text-sm">
          Enter your email to receive our internal blueprint directly in your inbox via Resend.
        </p>

        {status === 'success' ? (
          <div className="p-4 bg-green-950/50 border border-green-500/30 text-green-300 rounded-sm">
            Success! Check your inbox for the download link.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="founder@company.com"
              className="flex-1 px-5 py-3 rounded-sm bg-bh-black border border-bh-white/10 text-bh-white placeholder-bh-ivory/30 focus:outline-none focus:border-bh-red"
            />
            <Button variant="primary" size="sm">
              {status === 'loading' ? 'Sending...' : 'Send PDF'}
            </Button>
          </form>
        )}
        {status === 'error' && (
          <p className="text-red-400 text-xs mt-2">Something went wrong. Please try again.</p>
        )}
      </div>
    </section>
  );
}