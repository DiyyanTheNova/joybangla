"use client";

import { motion } from "framer-motion";
import { Shield, Clock, Globe } from "lucide-react";
import Image from "next/image";
import SectionWrapper from "@/components/sections/SectionWrapper";

const features = [
  { icon: Shield, title: "Verified", desc: "All listings reviewed" },
  { icon: Clock, title: "Real-time", desc: "Live opportunity feed" },
  { icon: Globe, title: "Bilingual", desc: "EN / BN support" },
];

export default function WhatIsBH() {
  return (
    <SectionWrapper className="bg-bh-black border-t border-bh-white/5 relative overflow-hidden">
      {/* Background Art - Two Cranes (partnership symbolism) */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-125 md:w-150 h-150
       pointer-events-none z-0 opacity-20">
        <Image 
          src="/images/partnership-cranes.png" 
          alt="" 
          fill
          className="object-cover object-right"
          style={{ mixBlendMode: 'screen' }}
        />
        <div className="absolute inset-0 bg-linear-to-l from-transparent to-bh-black" />
      </div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Column - Text */}
        <div className="max-w-2xl">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-bh-red font-heading text-xs uppercase tracking-[0.2em] mb-6"
          >
            What is Business Hub
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading text-3xl md:text-5xl lg:text-6xl font-normal leading-[1.1] text-bh-ivory mb-8"
          >
            One platform. Every tool.
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-body text-lg text-bh-ivory/70 leading-relaxed mb-8"
          >
            Business Hub is a premium digital ecosystem built for Bangladesh&apos;s growing professional class. We connect talent, companies, researchers, and entrepreneurs through a single, clean, powerful interface.
          </motion.p>

          <motion.a
            href="/about"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-2 font-heading text-sm uppercase tracking-wider text-bh-red hover:text-bh-ivory transition-colors"
          >
            Read our story →
          </motion.a>
        </div>

        {/* Right Column - Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="border border-bh-white/10 p-6 hover:border-bh-red/50 transition-all duration-300"
            >
              <feature.icon className="w-6 h-6 text-bh-red mb-4" strokeWidth={1.5} />
              <h3 className="font-heading text-lg text-bh-ivory mb-2">{feature.title}</h3>
              <p className="font-body text-sm text-bh-ivory/60">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}