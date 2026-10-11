"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const trustedMembers = [
  { name: "Sarah Chen", role: "Tech Entrepreneur", followers: "125K", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80" },
  { name: "Marcus Johnson", role: "Growth Strategist", followers: "89K", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80" },
  { name: "Aisha Patel", role: "Brand Consultant", followers: "156K", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80" },
  { name: "David Kim", role: "Innovation Lead", followers: "203K", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80" },
  { name: "Elena Rodriguez", role: "Digital Creator", followers: "178K", image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=400&q=80" },
  { name: "James Wilson", role: "Business Coach", followers: "142K", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80" },
  { name: "Nina Okonjo", role: "Strategy Director", followers: "95K", image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=400&q=80" },
  { name: "Alex Thompson", role: "Product Leader", followers: "167K", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80" },
];

export default function WaveMarquee() {
  // Double the array for seamless loop (reduced from 4x for performance)
  const items = [...trustedMembers, ...trustedMembers];
  
  return (
    <section className="relative w-full py-24 md:py-32 bg-bh-black overflow-hidden">
      
      {/* Central Text - BH Style */}
      <div className="relative z-20 text-center mb-16 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-bh-white/5 border border-bh-white/10 mb-6"
        >
          <div className="w-2 h-2 rounded-full bg-bh-red animate-pulse" />
          <span className="font-heading text-xs uppercase tracking-wider text-bh-ivory/80">
            Credibility
          </span>
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-heading text-4xl md:text-6xl font-bold text-bh-white leading-[1.1] mb-4"
        >
          Trusted By Industry Leading
          <br />
          <span className="text-bh-ivory">Personal Brands</span>
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="font-body text-bh-ivory/60 max-w-2xl mx-auto text-lg"
        >
          Our platform has helped coaches, consultants, and creators grow their audience and fill their calendars.
        </motion.p>
      </div>

      {/* Wave Marquee Container - FIXED HEIGHT TO PREVENT CLS */}
      <div className="relative w-full h-87.5 md:h-100 overflow-hidden">
        <div className="flex items-center h-full" style={{ width: 'max-content' }}>
          <motion.div
            className="flex gap-6"
            animate={{ x: [0, -1920] }} // Adjusted for double array
            transition={{ 
              repeat: Infinity, 
              duration: 40, 
              ease: "linear",
              repeatType: "loop"
            }}
          >
            {items.map((member, index) => {
              // Create wave effect: cards rise and fall as they flow
              const wavePhase = (index % 8) / 8;
              const waveOffset = Math.sin(wavePhase * Math.PI * 2) * 50;
              
              return (
                <div
                  key={index}
                  className="shrink-0 w-40 md:w-45" // Fixed width
                  style={{ 
                    transform: `translateY(${waveOffset}px)`,
                  }}
                >
                  <div className="relative bg-bh-black border border-bh-white/10 rounded-xl overflow-hidden shadow-2xl group cursor-pointer hover:border-bh-red/50 transition-colors duration-300">
                    <div className="relative w-full" style={{ aspectRatio: '3/4' }}>
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        sizes="(max-width: 768px) 160px, 180px"
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        loading={index < 4 ? "eager" : "lazy"} // Optimize loading
                        priority={index < 2} // First 2 images are priority
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-bh-black via-bh-black/20 to-transparent" />
                    </div>
                    
                    <div className="absolute bottom-0 left-0 right-0 p-3">
                      <h3 className="font-heading text-white text-sm font-bold leading-tight mb-1">
                        {member.name}
                      </h3>
                      <div className="flex items-center gap-1.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-bh-red" />
                        <span className="text-[10px] text-bh-ivory/70 font-body">
                          {member.followers} Followers
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}