import Link from "next/link";
import { Building2, FileText, Handshake, ArrowRight, Globe } from "lucide-react";

const partners = [
  { name: "Vertex Capital Group", sector: "Finance", logo: "VC" },
  { name: "Apex Innovations", sector: "Technology", logo: "AI" },
  { name: "Global Logistics Co.", sector: "Supply Chain", logo: "GL" },
  { name: "GreenFuture Labs", sector: "Energy", logo: "GF" },
];

const resources = [
  { title: "Q3 Market Briefing: Tech Sector", type: "Briefing", date: "Oct 2026" },
  { title: "Guide to Strategic Partnerships", type: "Guide", date: "Sep 2026" },
  { title: "Corporate Governance Standards", type: "Documentation", date: "Aug 2026" },
];

export default function BusinessPage() {
  return (
    <main className="min-h-screen bg-bh-black">
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 md:px-12 border-b border-bh-white/5">
        <div className="max-w-7xl mx-auto">
          <Link href="/" className="font-body text-sm text-bh-ivory/50 hover:text-bh-red transition-colors mb-8 inline-flex items-center gap-2">
            <ArrowRight size={16} className="rotate-180" /> Back to Home
          </Link>
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl text-bh-ivory mb-6">
            Business <span className="text-bh-red">Hub</span>
          </h1>
          <p className="font-body text-lg md:text-xl text-bh-ivory/60 max-w-3xl leading-relaxed">
            The institutional core of the ecosystem. Access corporate resources, strategic briefings, 
            and a network of verified enterprise partners.
          </p>
        </div>
      </section>

      {/* Featured Partners Grid */}
      <section className="py-24 px-6 md:px-12 border-b border-bh-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <Handshake className="text-bh-red" size={24} strokeWidth={1.5} />
            <h2 className="font-heading text-2xl md:text-3xl text-bh-ivory">Featured Partners</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-bh-white/10 border border-bh-white/10">
            {partners.map((partner) => (
              <div key={partner.name} className="bg-bh-black p-8 flex flex-col items-center text-center group hover:bg-bh-white/5 transition-colors cursor-pointer">
                <div className="w-16 h-16 flex items-center justify-center bg-bh-white/5 border border-bh-white/10 rounded-sm font-heading text-xl text-bh-ivory mb-4 group-hover:border-bh-red group-hover:text-bh-red transition-colors">
                  {partner.logo}
                </div>
                <h3 className="font-heading text-lg text-bh-ivory mb-1 group-hover:text-bh-white">{partner.name}</h3>
                <p className="font-body text-xs text-bh-ivory/50 uppercase tracking-wider">{partner.sector}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Resources List */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <FileText className="text-bh-red" size={24} strokeWidth={1.5} />
            <h2 className="font-heading text-2xl md:text-3xl text-bh-ivory">Corporate Resources</h2>
          </div>

          <div className="flex flex-col border-t border-bh-white/10">
            {resources.map((resource, index) => (
              <Link 
                href="/archive" 
                key={resource.title} 
                className="group py-8 border-b border-bh-white/10 grid grid-cols-1 md:grid-cols-12 gap-6 items-center transition-colors duration-300 hover:bg-bh-white/5 px-4 -mx-4 rounded-sm"
              >
                <div className="md:col-span-2 flex items-center gap-3">
                  <Globe size={16} className="text-bh-ivory/40" />
                  <span className="font-heading text-xs uppercase tracking-wider text-bh-ivory/60">{resource.type}</span>
                </div>
                <div className="md:col-span-8">
                  <h3 className="font-heading text-lg text-bh-ivory group-hover:text-bh-red transition-colors">
                    {resource.title}
                  </h3>
                </div>
                <div className="md:col-span-2 text-right">
                  <span className="font-body text-xs text-bh-ivory/40">{resource.date}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}