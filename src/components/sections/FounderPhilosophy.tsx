"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Quote } from "lucide-react";

export default function FounderPhilosophy() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 bg-bh-black border-t border-bh-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left: The Message */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block text-bh-gold font-heading text-xs uppercase tracking-[0.2em] mb-8">
              A Note from the CEO
            </span>
            
            <div className="relative">
              <Quote className="absolute -top-6 -left-4 w-12 h-12 text-bh-red/20" />
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-bh-white font-bold leading-[1.15] mb-8 relative z-10">
                "We don't build websites. We build digital ecosystems that actually convert. Speed, clarity, and purpose are not features—they are the foundation."
              </h2>
            </div>

            <p className="font-body text-bh-ivory/70 text-lg leading-relaxed mb-8">
              In a world of generic templates and bloated agencies, Business Hub was created with a single obsession: to deliver a platform that is fast, smooth, and undeniably useful. Every pixel, every line of code, and every strategy is designed to help you scale without the friction.
            </p>

            <div className="flex items-center gap-4">
              <div className="w-12 h-0.5 bg-bh-red" />
              <div>
                <p className="font-heading text-bh-white text-lg">Ariel.Mew</p>
                <p className="font-body text-bh-ivory/50 text-sm">CEO & Lead Architect, Business Hub</p>
              </div>
            </div>
          </motion.div>

          {/* Right: The Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            
            {/* Image Container */}
            <div className="relative aspect-4/5 overflow-hidden border border-bh-white/10">
              <Image
                src="/images/ariel-mew.jpg" // <--- CHANGED THIS LINE
                alt="Ariel.Mew - Founder"
                fill
                className="object-cover object-top grayscale hover:grayscale-0 transition-all duration-700" // Added object-top to keep face centered
              />
              {/* Floating Stat Card */}
              <div className="absolute bottom-8 left-8 right-8 p-6 bg-bh-black/80 backdrop-blur-md border border-bh-white/10">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="font-heading text-2xl text-bh-white mb-1">8+</p>
                    <p className="text-[10px] text-bh-ivory/50 uppercase tracking-wider">Years Exp</p>
                  </div>
                  <div className="border-l border-bh-white/10">
                    <p className="font-heading text-2xl text-bh-white mb-1">150+</p>
                    <p className="text-[10px] text-bh-ivory/50 uppercase tracking-wider">Projects</p>
                  </div>
                  <div className="border-l border-bh-white/10">
                    <p className="font-heading text-2xl text-bh-white mb-1">98%</p>
                    <p className="text-[10px] text-bh-ivory/50 uppercase tracking-wider">Success</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Accent */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-bh-red/30 pointer-events-none" />
            <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-bh-red/30 pointer-events-none" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}