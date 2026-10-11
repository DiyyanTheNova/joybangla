import SectionWrapper from "@/components/sections/SectionWrapper";
import Link from "next/link";
import { Briefcase, TrendingUp, ShoppingBag, ArrowUpRight } from "lucide-react";

// Mock data representing live platform activity
const liveItems = [
  {
    category: "New Job",
    title: "Senior UX Designer",
    entity: "Apex Innovations",
    time: "2h ago",
    icon: Briefcase,
    tagColor: "text-bh-red border-bh-red/30 bg-bh-red/10",
  },
  {
    category: "Featured Business",
    title: "Vertex Capital Group",
    entity: "Financial Services",
    time: "5h ago",
    icon: TrendingUp,
    tagColor: "text-bh-gold border-bh-gold/30 bg-bh-gold/10",
  },
  {
    category: "Marketplace",
    title: "Premium SaaS Boilerplate",
    entity: "CodeCraft Studios",
    time: "1d ago",
    icon: ShoppingBag,
    tagColor: "text-bh-ivory border-bh-ivory/30 bg-bh-ivory/10",
  },
  {
    category: "Opportunity",
    title: "Strategic Partnership",
    entity: "Global Logistics Co.",
    time: "1d ago",
    icon: TrendingUp,
    tagColor: "text-bh-red border-bh-red/30 bg-bh-red/10",
  },
];

export default function LiveActivity() {
  return (
    <SectionWrapper className="bg-bh-black py-24 md:py-32 border-t border-bh-white/5">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <span className="inline-block py-1.5 px-4 mb-6 text-[10px] font-heading font-bold tracking-[0.2em] uppercase text-bh-red border border-bh-red/30 rounded-sm">
            Live Feed
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-bh-ivory">
            Live Activity
          </h2>
        </div>
        <Link 
          href="/explore" 
          className="font-heading text-sm uppercase tracking-wider text-bh-ivory/60 hover:text-bh-red transition-colors flex items-center gap-2 group"
        >
          View all activity 
          <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </Link>
      </div>

      {/* Sharp, Dashboard-style Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-bh-white/10 border border-bh-white/10">
        {liveItems.map((item) => (
          <div 
            key={item.title} 
            className="group bg-bh-black p-8 md:p-10 flex flex-col sm:flex-row sm:items-center justify-between gap-6 transition-colors duration-300 hover:bg-bh-white/5 cursor-pointer"
          >
            <div className="flex items-start gap-5">
              <div className="mt-1 text-bh-ivory/40 group-hover:text-bh-ivory transition-colors">
                <item.icon size={24} strokeWidth={1.5} />
              </div>
              <div>
                <span className={`inline-block py-1 px-2 mb-3 text-[10px] font-heading font-bold tracking-wider uppercase border rounded-sm ${item.tagColor}`}>
                  {item.category}
                </span>
                <h3 className="font-heading text-xl text-bh-ivory group-hover:text-bh-white transition-colors">
                  {item.title}
                </h3>
                <p className="font-body text-sm text-bh-ivory/50 mt-1">
                  {item.entity}
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 sm:text-right">
              <span className="font-body text-xs text-bh-ivory/40">{item.time}</span>
              <div className="w-8 h-8 flex items-center justify-center border border-bh-white/10 rounded-sm text-bh-ivory/40 group-hover:border-bh-red group-hover:text-bh-red transition-all">
                <ArrowUpRight size={16} strokeWidth={1.5} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}