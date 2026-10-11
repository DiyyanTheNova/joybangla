import SectionWrapper from "@/components/sections/SectionWrapper";
import { Zap, Target, Network, TrendingUp } from "lucide-react";

const pillars = [
  {
    title: "Fast",
    desc: "Optimized for speed and instant access. No bloat, just performance.",
    icon: Zap,
  },
  {
    title: "Useful",
    desc: "Every feature has a purpose. We build tools that solve real problems.",
    icon: Target,
  },
  {
    title: "Connected",
    desc: "Bridging the gap between people, businesses, and opportunities.",
    icon: Network,
  },
  {
    title: "Built to Grow",
    desc: "A scalable ecosystem designed to evolve with your ambitions.",
    icon: TrendingUp,
  },
];

export default function WhyBH() {
  return (
    <SectionWrapper className="bg-bh-black py-24 md:py-32 border-t border-bh-white/5">
      <div className="max-w-3xl mb-16">
        <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-bh-ivory mb-6">
          Why <span className="text-bh-red">Business Hub</span>?
        </h2>
        <p className="font-body text-lg text-bh-ivory/60 max-w-xl">
          We stripped away the noise to focus on what matters: clarity, speed, and meaningful connections.
        </p>
      </div>

      {/* Sharp Geometric Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-bh-white/10 border border-bh-white/10">
        {pillars.map((pillar) => (
          <div 
            key={pillar.title} 
            className="group bg-bh-black p-10 md:p-12 transition-colors duration-300 hover:bg-bh-white/5"
          >
            <div className="flex items-start gap-6">
              <div className="mt-1 text-bh-red transition-transform duration-300 group-hover:scale-110">
                <pillar.icon size={28} strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-heading text-2xl text-bh-ivory mb-3 group-hover:text-bh-white transition-colors">
                  {pillar.title}
                </h3>
                <p className="font-body text-sm text-bh-ivory/60 leading-relaxed group-hover:text-bh-ivory/80 transition-colors">
                  {pillar.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}