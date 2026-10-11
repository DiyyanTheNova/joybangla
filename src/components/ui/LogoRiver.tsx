"use client";

import { motion } from "framer-motion";
import { 
  Building2, 
  Briefcase, 
  Globe, 
  TrendingUp, 
  Zap, 
  Shield,
  Target,
  Award
} from "lucide-react";

const clients = [
  { name: "TechCorp", icon: Building2 },
  { name: "Innovate Labs", icon: Zap },
  { name: "Global Ventures", icon: Globe },
  { name: "Nexus Group", icon: TrendingUp },
  { name: "Apex Solutions", icon: Target },
  { name: "Visionary Co", icon: Award },
  { name: "Prime Assets", icon: Briefcase },
  { name: "Future Scale", icon: Shield },
];

export default function LogoRiver() {
  return (
    <section className="relative w-full bg-bh-black border-y border-bh-white/5 py-16 overflow-hidden">
      
      {/* Gradient Masks for smooth fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-linear-to-r from-bh-black to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-linear-to-l from-bh-black to-transparent z-10 pointer-events-none" />

      {/* Header */}
      <div className="text-center mb-12 relative z-0">
        <span className="font-heading text-xs uppercase tracking-[0.3em] text-bh-ivory/40">
          Trusted by Industry Leaders
        </span>
      </div>
      
      {/* Marquee Container */}
      <div className="relative">
        <motion.div
          className="flex gap-16 md:gap-20 items-center"
          animate={{ x: [0, -1920] }} // Adjust based on total width of items
          transition={{
            repeat: Infinity,
            duration: 40,
            ease: "linear",
            repeatType: "loop",
          }}
        >
          {/* Triple the array for seamless infinite loop */}
          {[...clients, ...clients, ...clients].map((client, index) => (
            <div
              key={`${client.name}-${index}`}
              className="flex items-center gap-3 px-8 py-4 border border-bh-white/10 rounded-sm hover:border-bh-red/40 hover:bg-bh-white/2 transition-all duration-300 group cursor-pointer shrink-0"
            >
              <div className="relative">
                <client.icon 
                  className="w-6 h-6 text-bh-ivory/40 group-hover:text-bh-red transition-colors duration-300" 
                  strokeWidth={1.5}
                />
                {/* Subtle glow on hover */}
                <div className="absolute inset-0 blur-md bg-bh-red/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <span className="font-heading text-sm md:text-base text-bh-ivory/50 group-hover:text-bh-white transition-colors duration-300 uppercase tracking-wider">
                {client.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}