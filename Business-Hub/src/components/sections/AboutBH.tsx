"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { ArrowUpRight } from "lucide-react";

export default function AboutBH() {
  return (
    <section className="relative w-full py-24 md:py-32 bg-bh-black border-t border-bh-white/5 overflow-hidden">
      {/* Subtle Background Texture */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-150 h-150 bg-bh-red/20 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-heading text-4xl md:text-6xl font-bold text-bh-white mb-8 leading-tight">
              Business Hub
            </h2>
            
            <p className="font-body text-lg md:text-xl text-bh-ivory/80 leading-relaxed mb-12">
              We are a multidisciplinary collective of designers, developers, and strategists driven by a singular obsession: crafting high-performance digital experiences. By merging intentional design with robust engineering, we empower ambitious brands to scale and thrive in an ever-evolving digital landscape.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-8 md:gap-12 border-t border-bh-white/10 pt-12 mb-12">
              <div>
                <div className="font-heading text-4xl md:text-5xl font-bold text-bh-white mb-2">
                  4,200+
                </div>
                <div className="font-heading text-xs uppercase tracking-[0.15em] text-bh-ivory/50">
                  Active Members
                </div>
              </div>
              <div>
                <div className="font-heading text-4xl md:text-5xl font-bold text-bh-white mb-2">
                  1,600+
                </div>
                <div className="font-heading text-xs uppercase tracking-[0.15em] text-bh-ivory/50">
                  Projects Delivered
                </div>
              </div>
              <div>
                <div className="font-heading text-4xl md:text-5xl font-bold text-bh-white mb-2">
                  3,100+
                </div>
                <div className="font-heading text-xs uppercase tracking-[0.15em] text-bh-ivory/50">
                  Talents Placed
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <Link 
              href="/about"
              className="inline-flex items-center gap-3 bg-bh-red text-bh-white font-heading uppercase tracking-[0.15em] text-sm px-8 py-4 hover:bg-bh-red/90 transition-all duration-300 group"
            >
              Know More About Us
              <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-3/4 overflow-hidden">
              <Image
                src="/images/man.jpeg" // Replace with your actual team member photo
                alt="Business Hub Team"
                fill
                className="object-cover"
                priority
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-bh-black/60 via-transparent to-transparent" />
              
              {/* Signature/Name Overlay */}
              <div className="absolute bottom-8 left-8 right-8">
                <p className="font-heading text-3xl md:text-4xl text-bh-gold italic">
                  The BH Team
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}