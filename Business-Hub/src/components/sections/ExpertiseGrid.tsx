"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, Code, Palette, TrendingUp, Users } from "lucide-react";

const services = [
  {
    number: "01",
    title: "Digital Strategy",
    description: "We don't just build; we plan. Comprehensive roadmaps for digital transformation, market entry, and scalable growth.",
    icon: TrendingUp,
  },
  {
    number: "02",
    title: "Brand Identity",
    description: "Visual systems that command authority. From logo design to complete design systems that speak your brand's language.",
    icon: Palette,
  },
  {
    number: "03",
    title: "Web Development",
    description: "High-performance, accessible, and secure web applications built with Next.js and modern architectures.",
    icon: Code,
  },
  {
    number: "04",
    title: "Growth Marketing",
    description: "Data-driven campaigns that convert. SEO, paid acquisition, and content strategies that fill your pipeline.",
    icon: Users,
  },
];

function ServiceItem({ service, index }: { service: typeof services[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      className="group relative border-t border-bh-white/10 py-12 md:py-16 flex flex-col md:flex-row md:items-center gap-6 md:gap-12 hover:bg-bh-white/2 transition-colors duration-500 px-6 md:px-0"
    >
      {/* Number & Icon */}
      <div className="flex items-center gap-6 md:w-1/4">
        <span className="font-heading text-4xl md:text-5xl text-bh-white/20 font-bold group-hover:text-bh-red transition-colors duration-500">
          {service.number}
        </span>
        <div className="w-12 h-12 rounded-full border border-bh-white/10 flex items-center justify-center group-hover:border-bh-red group-hover:bg-bh-red/10 transition-all duration-500">
          <service.icon className="w-5 h-5 text-bh-ivory/60 group-hover:text-bh-red transition-colors duration-500" />
        </div>
      </div>

      {/* Content */}
      <div className="md:w-2/4">
        <h3 className="font-heading text-2xl md:text-3xl text-bh-white mb-3 group-hover:text-bh-red transition-colors duration-500">
          {service.title}
        </h3>
        <p className="font-body text-bh-ivory/60 text-lg leading-relaxed max-w-xl">
          {service.description}
        </p>
      </div>

      {/* Arrow */}
      <div className="md:w-1/4 flex md:justify-end">
        <div className="w-12 h-12 rounded-full border border-bh-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-4 group-hover:translate-x-0">
          <ArrowUpRight className="w-5 h-5 text-bh-red" />
        </div>
      </div>
    </motion.div>
  );
}

export default function ExpertiseGrid() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 bg-bh-black border-t border-bh-white/5">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="mb-16 md:mb-24">
          <span className="inline-block text-bh-gold font-heading text-xs uppercase tracking-[0.2em] mb-4">
            Our Expertise
          </span>
          <h2 className="font-heading text-3xl md:text-5xl text-bh-white font-bold leading-[1.1] mb-6">
            Services built for scale.
          </h2>
          <p className="font-body text-bh-ivory/60 max-w-2xl text-lg">
            We offer end-to-end digital solutions. From initial strategy to final deployment, we are your partners in growth.
          </p>
        </div>

        {/* Staggered List */}
        <div className="border-b border-bh-white/10">
          {services.map((service, index) => (
            <ServiceItem key={service.number} service={service} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
}