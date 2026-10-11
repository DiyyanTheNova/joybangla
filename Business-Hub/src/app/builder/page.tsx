import Link from "next/link";
import { ArrowLeft, Code, Brain, Sparkles } from "lucide-react";

export default function BuilderPage() {
  return (
    <main className="min-h-screen pt-32 pb-20 px-6 md:px-12 bg-bh-black">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="font-body text-sm text-bh-ivory/50 hover:text-bh-red transition-colors mb-8 inline-flex items-center gap-2">
          <ArrowLeft size={16} /> Back to Home
        </Link>
        
        <div className="text-center mb-12">
          <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center bg-bh-red/10 border border-bh-red/30 rounded-sm">
            <Code size={40} className="text-bh-red" />
          </div>
          <h1 className="font-heading text-4xl md:text-5xl text-bh-ivory mb-4">
            Built by <span className="text-bh-red">[Ariel.Mew]</span>
          </h1>
          <p className="font-body text-lg text-bh-ivory/60">
            Developer • Creator • Problem Solver
          </p>
        </div>

        <div className="space-y-8">
          <div className="p-8 border border-bh-white/10 rounded-sm">
            <h2 className="font-heading text-2xl text-bh-ivory mb-4">The Story</h2>
            <p className="font-body text-bh-ivory/70 leading-relaxed mb-4">
              This platform was built using a combination of human creativity and AI collaboration. 
              Every line of code, every design decision, and every feature was crafted with purpose.
            </p>
            <p className="font-body text-bh-ivory/70 leading-relaxed">
              I used my brain to architect the vision and AI as a powerful co-pilot to accelerate 
              development. The result? A fast, smooth, and useful digital ecosystem , so f you mew.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-6 bg-bh-white/5 border border-bh-white/10 rounded-sm text-center">
              <Brain className="w-8 h-8 mx-auto mb-3 text-bh-ivory" />
              <h3 className="font-heading text-sm text-bh-ivory mb-2">Human Strategy</h3>
              <p className="font-body text-xs text-bh-ivory/60">Vision & Architecture</p>
            </div>
            <div className="p-6 bg-bh-white/5 border border-bh-white/10 rounded-sm text-center">
              <Sparkles className="w-8 h-8 mx-auto mb-3 text-bh-red" />
              <h3 className="font-heading text-sm text-bh-ivory mb-2">AI Collaboration</h3>
              <p className="font-body text-xs text-bh-ivory/60">Accelerated Development</p>
            </div>
            <div className="p-6 bg-bh-white/5 border border-bh-white/10 rounded-sm text-center">
              <Code className="w-8 h-8 mx-auto mb-3 text-bh-gold" />
              <h3 className="font-heading text-sm text-bh-ivory mb-2">Modern Tech</h3>
              <p className="font-body text-xs text-bh-ivory/60">Next.js + Sanity</p>
            </div>
          </div>

          <div className="p-8 border border-bh-gold/20 bg-bh-gold/5 rounded-sm">
            <h3 className="font-heading text-xl text-bh-gold mb-4">Tech Stack</h3>
            <ul className="font-body text-sm text-bh-ivory/70 space-y-2">
              <li>• Next.js 14 (App Router)</li>
              <li>• TypeScript</li>
              <li>• Tailwind CSS</li>
              <li>• Sanity CMS</li>
              <li>• Framer Motion</li>
              <li>• Resend (Email)</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}