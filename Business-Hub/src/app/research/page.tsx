import Link from "next/link";
import { Search, Filter, FileText, BookOpen, TrendingUp, Clock, ArrowRight } from "lucide-react";

// Mock Data
const categories = ["All", "Market Research", "Industry Reports", "Guides", "Case Studies", "Whitepapers"];

const resources = [
  {
    title: "The Future of Remote Work Ecosystems",
    category: "Research",
    type: "Whitepaper",
    readTime: "12 min read",
    date: "Oct 2026",
    desc: "A comprehensive analysis of how digital hubs are reshaping corporate infrastructure and talent distribution.",
    featured: true,
  },
  {
    title: "Scaling Your Business Hub Presence",
    category: "Guides",
    type: "Guide",
    readTime: "8 min read",
    date: "Sep 2026",
    desc: "Strategic frameworks for maximizing visibility and partnerships within the BH network.",
    featured: false,
  },
  {
    title: "Q3 2026 Tech Sector Market Briefing",
    category: "Industry Reports",
    type: "Report",
    readTime: "20 min read",
    date: "Sep 2026",
    desc: "Quarterly analysis of emerging technologies, investment trends, and market opportunities.",
    featured: true,
  },
  {
    title: "Case Study: Apex Innovations Growth Strategy",
    category: "Case Studies",
    type: "Case Study",
    readTime: "10 min read",
    date: "Aug 2026",
    desc: "How a mid-size tech firm scaled from 50 to 500 employees using strategic partnerships.",
    featured: false,
  },
  {
    title: "Guide to Strategic Partnerships in Digital Ecosystems",
    category: "Guides",
    type: "Guide",
    readTime: "15 min read",
    date: "Aug 2026",
    desc: "Best practices for identifying, approaching, and maintaining valuable business partnerships.",
    featured: false,
  },
];

export default function ResearchPage() {
  return (
    <main className="min-h-screen bg-bh-black">
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 md:px-12 border-b border-bh-white/5">
        <div className="max-w-7xl mx-auto">
          <Link href="/" className="font-body text-sm text-bh-ivory/50 hover:text-bh-red transition-colors mb-8 inline-flex items-center gap-2">
            <ArrowRight size={16} className="rotate-180" /> Back to Home
          </Link>
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl text-bh-ivory mb-6">
            Research & <span className="text-bh-red">Resources</span>
          </h1>
          <p className="font-body text-lg md:text-xl text-bh-ivory/60 max-w-3xl leading-relaxed">
            Knowledge discovery for professionals and businesses. Access market research, 
            industry reports, strategic guides, and case studies.
          </p>
        </div>
      </section>

      {/* Search & Filters */}
      <section className="py-12 px-6 md:px-12 border-b border-bh-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-grow relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-bh-ivory/40" size={20} />
              <input 
                type="text" 
                placeholder="Search research, guides, reports..." 
                className="w-full bg-bh-white/5 border border-bh-white/10 text-bh-ivory pl-12 pr-4 py-3 rounded-sm focus:outline-none focus:border-bh-red transition-colors placeholder:text-bh-ivory/30"
              />
            </div>
            <button className="flex items-center justify-center gap-2 bg-bh-white/5 border border-bh-white/10 text-bh-ivory px-6 py-3 rounded-sm hover:border-bh-ivory/30 transition-colors">
              <Filter size={18} />
              <span className="font-heading text-sm uppercase tracking-wider">Filters</span>
            </button>
          </div>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="py-8 px-6 md:px-12 border-b border-bh-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat, index) => (
              <button 
                key={cat} 
                className={`px-5 py-2.5 rounded-sm font-heading text-sm uppercase tracking-wider transition-all duration-300 border ${
                  index === 0 
                    ? "text-bh-red border-bh-red/50 bg-bh-red/10" 
                    : "text-bh-ivory/60 border-transparent hover:text-bh-ivory hover:bg-bh-white/5"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {resources.map((resource, index) => (
              <Link 
                href="/archive" 
                key={resource.title} 
                className={`group p-8 border border-bh-white/10 transition-all duration-300 hover:border-bh-red/50 rounded-sm ${
                  resource.featured ? 'bg-bh-white/5' : 'bg-bh-black'
                }`}
              >
                {/* Top Meta */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 flex items-center justify-center bg-bh-white/5 border border-bh-white/10 rounded-sm text-bh-red">
                      <FileText size={18} strokeWidth={1.5} />
                    </div>
                    <div>
                      <span className="inline-block py-1 px-2 text-[10px] font-heading font-bold tracking-wider uppercase text-bh-ivory/60 border border-bh-white/10 rounded-sm">
                        {resource.type}
                      </span>
                    </div>
                  </div>
                  {resource.featured && (
                    <span className="inline-block py-1 px-2 text-[10px] font-heading font-bold tracking-wider uppercase text-bh-gold border border-bh-gold/30 bg-bh-gold/10 rounded-sm">
                      Featured
                    </span>
                  )}
                </div>

                {/* Content */}
                <h3 className="font-heading text-xl md:text-2xl text-bh-ivory mb-3 group-hover:text-bh-white transition-colors">
                  {resource.title}
                </h3>
                <p className="font-body text-sm text-bh-ivory/60 leading-relaxed mb-6">
                  {resource.desc}
                </p>

                {/* Footer Meta */}
                <div className="flex items-center gap-6 text-xs text-bh-ivory/40">
                  <div className="flex items-center gap-1.5">
                    <Clock size={12} /> {resource.readTime}
                  </div>
                  <span>{resource.date}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}