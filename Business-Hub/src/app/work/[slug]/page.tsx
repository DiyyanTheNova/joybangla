import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import AnimatedCounter from '@/components/ui/AnimatedCounter';
import { sanityClient } from '@/lib/sanity';

// --- TYPES ---
interface CaseStudy {
  title: string;
  client: string;
  year: string;
  category: string;
  heroImage: string;
  challenge: string;
  strategy: string;
  results: { label: string; value: number; suffix: string }[];
  gallery: { url: string; alt: string }[];
}

// --- MOCK DATA FALLBACK (Remove this when Sanity is fully connected) ---
const mockCaseStudy: CaseStudy = {
  title: "Digital Ecosystem Overhaul",
  client: "TechVentures Ltd",
  year: "2024",
  category: "Brand & Web Strategy",
  heroImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80",
  challenge: "TechVentures was struggling with a fragmented digital presence. Their marketplace, job board, and research portal operated in silos, causing a 40% drop-off in user retention. They needed a unified, premium ecosystem.",
  strategy: "We implemented a 'One Login, Everything' architecture. We redesigned the UI using the Black Authority theme, integrated a headless CMS for centralized content, and optimized the core web vitals to ensure sub-second load times across all modules.",
  results: [
    { label: "User Retention", value: 85, suffix: "%" },
    { label: "Page Load Speed", value: 98, suffix: "/100" },
    { label: "Conversion Rate", value: 340, suffix: "%" },
  ],
  gallery: [
    { url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80", alt: "Dashboard UI" },
    { url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80", alt: "Analytics View" },
  ]
};

// --- SERVER COMPONENT ---
export default async function CaseStudyPage({ params }: { params: { slug: string } }) {
  // TODO: Replace with actual Sanity fetch when ready
  // const data = await sanityClient.fetch(`*[_type == "caseStudy" && slug.current == "${params.slug}"][0]`);
  // if (!data) notFound();
  
  const data = mockCaseStudy; // Using mock data for now

  return (
    <main className="min-h-screen bg-bh-black text-bh-ivory pt-32 pb-24">
      
      {/* Navigation Back */}
      <div className="px-6 md:px-12 mb-12">
        <Link href="/" className="inline-flex items-center gap-2 text-bh-ivory/60 hover:text-bh-white transition-colors font-heading text-sm uppercase tracking-wider">
          <ArrowLeft className="w-4 h-4" /> Back to Work
        </Link>
      </div>

      {/* Hero Section */}
      <section className="px-6 md:px-12 mb-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-4 mb-8">
            <span className="px-4 py-2 border border-bh-white/10 rounded-sm text-xs font-heading uppercase tracking-wider text-bh-red">{data.category}</span>
            <span className="px-4 py-2 border border-bh-white/10 rounded-sm text-xs font-heading uppercase tracking-wider text-bh-ivory/60">{data.client} — {data.year}</span>
          </div>
          
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-bh-white leading-[1.05] mb-12 max-w-5xl">
            {data.title}
          </h1>

          {/* Hero Image */}
          <div className="relative w-full aspect-21/9 overflow-hidden border border-bh-white/10 rounded-sm">
            <Image 
              src={data.heroImage} 
              alt={data.title} 
              fill 
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Challenge & Strategy (Editorial Layout) */}
      <section className="px-6 md:px-12 mb-24 border-t border-bh-white/5 pt-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <span className="block font-heading text-xs uppercase tracking-[0.2em] text-bh-gold mb-6">01 — The Challenge</span>
            <p className="font-body text-2xl md:text-3xl text-bh-white leading-relaxed font-light">
              {data.challenge}
            </p>
          </div>
          <div className="md:pt-16">
            <span className="block font-heading text-xs uppercase tracking-[0.2em] text-bh-gold mb-6">02 — The Strategy</span>
            <p className="font-body text-lg text-bh-ivory/70 leading-relaxed">
              {data.strategy}
            </p>
            <button className="mt-8 inline-flex items-center gap-2 text-bh-white font-heading text-sm uppercase tracking-wider border-b border-bh-red pb-1 hover:text-bh-red transition-colors">
              View Live Project <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Results (Big Numbers) */}
      <section className="px-6 md:px-12 mb-24 border-t border-bh-white/5 pt-24">
        <div className="max-w-7xl mx-auto">
          <span className="block font-heading text-xs uppercase tracking-[0.2em] text-bh-gold mb-12">03 — The Results</span>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {data.results.map((result, i) => (
              <div key={i} className="p-8 border border-bh-white/10 bg-bh-white/2">
                <AnimatedCounter end={result.value} suffix={result.suffix} className="text-6xl md:text-7xl text-bh-white mb-4" />
                <p className="font-heading text-sm uppercase tracking-wider text-bh-ivory/60">{result.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="px-6 md:px-12 border-t border-bh-white/5 pt-24">
        <div className="max-w-7xl mx-auto">
          <span className="block font-heading text-xs uppercase tracking-[0.2em] text-bh-gold mb-12">04 — Visual Delivery</span>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.gallery.map((img, i) => (
              <div key={i} className="relative aspect-4/3 overflow-hidden border border-bh-white/10">
                <Image src={img.url} alt={img.alt} fill className="object-cover hover:scale-105 transition-transform duration-700" />
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}