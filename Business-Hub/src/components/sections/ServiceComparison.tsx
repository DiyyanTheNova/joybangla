"use client";

import { Check, X } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  { name: "Unified Digital Ecosystem", generic: false, bh: true },
  { name: "Verified Listings & Profiles", generic: false, bh: true },
  { name: "Real-time Opportunity Feed", generic: false, bh: true },
  { name: "Bilingual Support (EN/BN)", generic: false, bh: true },
  { name: "Integrated Marketplace & Jobs", generic: false, bh: true },
  { name: "Premium Knowledge Archive", generic: false, bh: true },
];

export default function ServiceComparison() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 bg-bh-black border-t border-bh-white/5">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-bh-red font-heading text-xs uppercase tracking-[0.2em] mb-4">
            The BH Advantage
          </span>
          <h2 className="font-heading text-3xl md:text-5xl text-bh-white font-bold leading-[1.1] mb-6">
            Not just another platform.
          </h2>
          <p className="font-body text-bh-ivory/60 max-w-2xl mx-auto text-lg">
            Business Hub is built for serious professionals. Here is how we compare to generic alternatives.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="border border-bh-white/10 rounded-sm overflow-hidden">
          {/* Table Header */}
          <div className="grid grid-cols-3 bg-bh-black border-b border-bh-white/10">
            <div className="p-6 md:p-8 font-heading text-sm uppercase tracking-wider text-bh-ivory/40">
              Feature
            </div>
            <div className="p-6 md:p-8 font-heading text-sm uppercase tracking-wider text-bh-ivory/40 text-center border-l border-bh-white/10">
              Generic Platforms
            </div>
            <div className="p-6 md:p-8 font-heading text-sm uppercase tracking-wider text-bh-red text-center border-l border-bh-white/10 bg-bh-red/5">
              Business Hub
            </div>
          </div>

          {/* Table Rows */}
          {features.map((feature, index) => (
            <motion.div
              key={feature.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="grid grid-cols-3 border-b border-bh-white/5 last:border-b-0 hover:bg-bh-white/2 transition-colors"
            >
              {/* Feature Name */}
              <div className="p-6 md:p-8 font-body text-bh-ivory flex items-center">
                {feature.name}
              </div>
              
              {/* Generic Column (Red X) */}
              <div className="p-6 md:p-8 flex items-center justify-center border-l border-bh-white/10">
                <div className="w-8 h-8 rounded-full bg-bh-white/5 flex items-center justify-center">
                  <X className="w-4 h-4 text-bh-ivory/30" strokeWidth={2.5} />
                </div>
              </div>
              
              {/* BH Column (Gold/Red Check) */}
              <div className="p-6 md:p-8 flex items-center justify-center border-l border-bh-white/10 bg-bh-red/2">
                <div className="w-8 h-8 rounded-full bg-bh-red/10 border border-bh-red/20 flex items-center justify-center">
                  <Check className="w-4 h-4 text-bh-red" strokeWidth={2.5} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="font-body text-bh-ivory/60 mb-6">
            Ready to experience the difference?
          </p>
          <a 
            href="/join" 
            className="inline-block px-8 py-4 bg-bh-red text-bh-white font-heading text-sm uppercase tracking-wider hover:bg-bh-red/90 transition-colors rounded-sm"
          >
            Join Business Hub
          </a>
        </div>
      </div>
    </section>
  );
}