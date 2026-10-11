import Link from "next/link";
import { ArrowLeft, BookOpen, Clock, Calendar, Share2, Bookmark } from "lucide-react";

export default function ArchivePage() {
  return (
    <main className="min-h-screen bg-bh-ivory">
      
      {/* Navigation Bar */}
      <nav className="bg-bh-black border-b border-bh-white/10">
        <div className="max-w-5xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
          <Link href="/" className="font-heading text-lg text-bh-ivory hover:text-bh-red transition-colors">
            Business Hub
          </Link>
          <Link href="/research" className="font-body text-sm text-bh-ivory/60 hover:text-bh-ivory transition-colors">
            Back to Research
          </Link>
        </div>
      </nav>

      {/* Article Header */}
      <header className="pt-20 pb-12 px-6 md:px-12 border-b border-bh-black/10">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <span className="inline-block py-1 px-3 text-[10px] font-heading font-bold tracking-[0.2em] uppercase text-bh-red border border-bh-red/30 rounded-sm">
              Whitepaper
            </span>
            <span className="font-body text-xs text-bh-black/50">Oct 2026</span>
          </div>
          
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-bh-black mb-8 leading-tight">
            The Future of Remote Work Ecosystems
          </h1>
          
          <p className="font-body text-lg md:text-xl text-bh-black/70 leading-relaxed mb-8">
            A comprehensive analysis of how digital hubs are reshaping corporate infrastructure, 
            talent distribution, and the future of professional collaboration.
          </p>

          {/* Meta Bar */}
          <div className="flex flex-wrap items-center gap-6 py-6 border-t border-bh-black/10">
            <div className="flex items-center gap-2 text-sm text-bh-black/60">
              <Clock size={16} strokeWidth={1.5} />
              <span>12 min read</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-bh-black/60">
              <BookOpen size={16} strokeWidth={1.5} />
              <span>Research</span>
            </div>
            <div className="flex-grow" />
            <button className="flex items-center gap-2 text-sm text-bh-black/60 hover:text-bh-red transition-colors">
              <Bookmark size={16} strokeWidth={1.5} />
              <span>Save</span>
            </button>
            <button className="flex items-center gap-2 text-sm text-bh-black/60 hover:text-bh-red transition-colors">
              <Share2 size={16} strokeWidth={1.5} />
              <span>Share</span>
            </button>
          </div>
        </div>
      </header>

      {/* Article Content */}
      <article className="py-16 px-6 md:px-12">
        <div className="max-w-3xl mx-auto">
          
          {/* Executive Summary Box */}
          <div className="bg-bh-black/5 border border-bh-black/10 p-8 md:p-10 mb-12 rounded-sm">
            <h2 className="font-heading text-xl text-bh-black mb-4">Executive Summary</h2>
            <p className="font-body text-base text-bh-black/80 leading-relaxed">
              This whitepaper examines the transformation of traditional office-based work models into 
              distributed, digital-first ecosystems. We analyze the role of platforms like Business Hub 
              in enabling this shift, and provide strategic recommendations for organizations navigating 
              this transition.
            </p>
          </div>

          {/* Main Content */}
          <div className="prose prose-lg max-w-none">
            <h2 className="font-heading text-2xl md:text-3xl text-bh-black mb-6">Introduction</h2>
            <p className="font-body text-base text-bh-black/80 leading-relaxed mb-6">
              The traditional office model has undergone a fundamental transformation. What began as a 
              temporary response to global circumstances has evolved into a permanent reimagining of 
              how work gets done. Digital ecosystems are no longer optional—they are essential infrastructure 
              for modern business.
            </p>
            
            <h2 className="font-heading text-2xl md:text-3xl text-bh-black mb-6 mt-12">The Rise of Digital Hubs</h2>
            <p className="font-body text-base text-bh-black/80 leading-relaxed mb-6">
              Platforms like Business Hub represent a new category of digital infrastructure: purpose-built 
              ecosystems that connect people, businesses, opportunities, and knowledge in a single, 
              integrated environment. Unlike generic collaboration tools, these hubs are designed with 
              specific workflows and outcomes in mind.
            </p>
            
            <blockquote className="border-l-4 border-bh-red pl-6 my-10 italic font-body text-lg text-bh-black/80">
              "The future of work is not about location—it's about connection. Digital hubs enable 
              meaningful professional relationships regardless of physical distance."
            </blockquote>

            <h2 className="font-heading text-2xl md:text-3xl text-bh-black mb-6 mt-12">Key Findings</h2>
            <p className="font-body text-base text-bh-black/80 leading-relaxed mb-6">
              Our research identified three critical trends shaping the future of remote work ecosystems:
            </p>
            
            <h3 className="font-heading text-xl text-bh-black mb-3 mt-8">1. Decentralized Talent Networks</h3>
            <p className="font-body text-base text-bh-black/80 leading-relaxed mb-6">
              Organizations are increasingly accessing talent on a project-by-project basis, rather than 
              maintaining large permanent staffs. This shift requires robust discovery and verification 
              systems to ensure quality and trust.
            </p>

            <h3 className="font-heading text-xl text-bh-black mb-3 mt-8">2. Knowledge as a Strategic Asset</h3>
            <p className="font-body text-base text-bh-black/80 leading-relaxed mb-6">
              In distributed environments, documented knowledge becomes critical. Organizations that invest 
              in knowledge management and sharing systems gain significant competitive advantages.
            </p>

            <h3 className="font-heading text-xl text-bh-black mb-3 mt-8">3. Platform-Mediated Collaboration</h3>
            <p className="font-body text-base text-bh-black/80 leading-relaxed mb-6">
              Digital platforms are becoming the primary venue for professional collaboration, replacing 
              traditional networking events, conferences, and office interactions.
            </p>

            <h2 className="font-heading text-2xl md:text-3xl text-bh-black mb-6 mt-12">Strategic Recommendations</h2>
            <p className="font-body text-base text-bh-black/80 leading-relaxed mb-6">
              For organizations navigating this transition, we recommend the following strategic actions:
            </p>
            
            <ul className="space-y-4 mb-10">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-bh-red rounded-full mt-2 flex-shrink-0" />
                <span className="font-body text-base text-bh-black/80">Invest in digital ecosystem literacy across all levels of the organization</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-bh-red rounded-full mt-2 flex-shrink-0" />
                <span className="font-body text-base text-bh-black/80">Prioritize platforms that integrate discovery, collaboration, and knowledge management</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-bh-red rounded-full mt-2 flex-shrink-0" />
                <span className="font-body text-base text-bh-black/80">Develop clear protocols for remote collaboration and asynchronous communication</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-bh-red rounded-full mt-2 flex-shrink-0" />
                <span className="font-body text-base text-bh-black/80">Build trust through verification, transparency, and consistent delivery</span>
              </li>
            </ul>

            <h2 className="font-heading text-2xl md:text-3xl text-bh-black mb-6 mt-12">Conclusion</h2>
            <p className="font-body text-base text-bh-black/80 leading-relaxed mb-6">
              The future of work is not a distant possibility—it is here now. Organizations that embrace 
              digital ecosystems, invest in knowledge infrastructure, and build distributed talent networks 
              will thrive in this new environment. Those that cling to outdated models risk being left behind.
            </p>
            
            <p className="font-body text-base text-bh-black/80 leading-relaxed">
              Business Hub and similar platforms are not just tools—they are the infrastructure of the 
              future economy. The question is not whether to participate, but how to participate strategically.
            </p>
          </div>

          {/* Article Footer */}
          <div className="mt-16 pt-8 border-t border-bh-black/10">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="font-body text-sm text-bh-black/60">Published:</span>
                <span className="font-body text-sm text-bh-black">October 15, 2026</span>
              </div>
              <Link 
                href="/research" 
                className="font-heading text-sm uppercase tracking-wider text-bh-red border border-bh-red/30 px-6 py-2 rounded-sm hover:bg-bh-red hover:text-bh-white transition-all duration-300"
              >
                Back to Research
              </Link>
            </div>
          </div>

        </div>
      </article>

    </main>
  );
}