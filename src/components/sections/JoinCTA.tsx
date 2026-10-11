import SectionWrapper from "@/components/sections/SectionWrapper";
import Link from "next/link";

export default function JoinCTA() {
  return (
    <SectionWrapper className="bg-bh-black py-32 md:py-40 border-t border-bh-white/5">
      <div className="max-w-4xl mx-auto text-center">
        <span className="inline-block py-1.5 px-4 mb-8 text-[10px] font-heading font-bold tracking-[0.2em] uppercase text-bh-gold border border-bh-gold/30 rounded-sm">
          Join the Ecosystem
        </span>
        
        <h2 className="font-heading text-4xl md:text-6xl lg:text-7xl font-normal leading-[1.1] text-bh-ivory mb-8">
          Ready to Build, Connect, <br className="hidden md:block" />
          and <span className="text-bh-red">Discover?</span>
        </h2>
        
        <p className="font-body text-lg md:text-xl text-bh-ivory/60 max-w-2xl mx-auto mb-12 leading-relaxed">
          Create your Business Hub account today. Access the Marketplace, post Jobs, 
          discover Opportunities, and connect with a premium network.
        </p>

        <div className="flex flex-col sm:flex-row gap-5 justify-center">
          {/* Fixed: Now links to register page */}
          <Link href="/account/register" className="inline-flex items-center justify-center bg-bh-red text-bh-white hover:bg-bh-red/90 shadow-lg shadow-bh-red/20 active:translate-y-px h-14 px-10 text-base font-heading uppercase tracking-wider transition-all duration-300 rounded-sm">
            Create Account
          </Link>
          <Link href="/about" className="inline-flex items-center justify-center bg-transparent border border-bh-ivory/30 text-bh-ivory hover:bg-bh-white/5 hover:border-bh-ivory h-14 px-10 text-base font-heading uppercase tracking-wider transition-all duration-300 rounded-sm">
            Learn More
          </Link>
        </div>
      </div>
    </SectionWrapper>
  );
}