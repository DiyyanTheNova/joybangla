"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import SectionWrapper from "@/components/sections/SectionWrapper";

const articles = [
  {
    category: "ECONOMY",
    title: "Bangladesh GDP Outlook 2025: Sector by Sector",
    date: "Nov 28, 2025",
    readTime: "8 min read",
  },
  {
    category: "TECH POLICY",
    title: "Digital Commerce Regulation: What Entrepreneurs Must Know",
    date: "Nov 20, 2025",
    readTime: "6 min read",
  },
  {
    category: "LABOUR MARKET",
    title: "Remote Work Adoption in Bangladeshi SMEs: 2025 Survey",
    date: "Nov 14, 2025",
    readTime: "12 min read",
  },
];

export default function IvoryArchive() {
  return (
    <section className="relative bg-bh-ivory py-20 md:py-32 overflow-hidden">
      {/* Background Art - Multiple Cranes (subtle) */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-[0.09]">
        <Image 
          src="/images/building.jpg" 
          alt="" 
          fill
          className="object-cover"
          style={{ mixBlendMode: 'multiply' }}
        />
      </div>

      <SectionWrapper className="relative z-10">
        <div className="flex items-start justify-between mb-16 max-w-4xl">
          <div>
            <span className="inline-block text-bh-red font-heading text-xs uppercase tracking-[0.2em] mb-4">
              Ivory Archive
            </span>
            <h2 className="font-heading text-3xl md:text-5xl text-bh-black">
              Knowledge & Research
            </h2>
            <p className="font-body text-lg text-bh-black/70 mt-4 max-w-xl">
              Editorial analysis, policy briefs, and research papers curated for Bangladesh&apos;s professional community.
            </p>
          </div>
          <Link href="/knowledge" className="hidden md:flex items-center gap-2 font-heading text-sm uppercase tracking-wider text-bh-black hover:text-bh-red transition-colors">
            Browse all research <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <motion.article
              key={article.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group border border-bh-black/10 bg-bh-white/50 p-8 hover:border-bh-red/30 transition-all duration-300"
            >
              <span className="font-heading text-xs uppercase tracking-[0.15em] text-bh-black/50 mb-4 block">
                {article.category}
              </span>
              <h3 className="font-heading text-xl text-bh-black mb-6 group-hover:text-bh-red transition-colors">
                {article.title}
              </h3>
              <div className="flex items-center gap-3 text-xs text-bh-black/60 font-body">
                <span>{article.date}</span>
                <span>•</span>
                <span>{article.readTime}</span>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="md:hidden mt-8">
          <Link href="/knowledge" className="inline-flex items-center gap-2 font-heading text-sm uppercase tracking-wider text-bh-black hover:text-bh-red transition-colors">
            Browse all research <ArrowRight size={16} />
          </Link>
        </div>
      </SectionWrapper>
    </section>
  );
}