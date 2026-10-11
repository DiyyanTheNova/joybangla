"use client";

import { motion } from "framer-motion";
import { ShoppingBag, TrendingUp, Briefcase, Building2, BookOpen, Users } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const exploreItems = [
  {
    title: "Marketplace",
    description: "Browse and publish premium listings.",
    longDescription: "Connect with verified vendors offering digital assets, services, and products. From design templates to business solutions.",
    icon: ShoppingBag,
    href: "/marketplace",
    stats: "3,200+ Active Listings",
    color: "from-red-600/20 to-red-900/10",
    image: "/images/marketplace-demo.jpg",
    features: ["Verified Sellers", "Secure Transactions", "Quality Assurance"]
  },
  {
    title: "Opportunities",
    description: "Discover projects and collaborations.",
    longDescription: "Access exclusive partnerships, funding rounds, project calls, and mentorship programs from industry leaders.",
    icon: TrendingUp,
    href: "/opportunities",
    stats: "600+ Open Opportunities",
    color: "from-amber-600/20 to-amber-900/10",
    image: "/images/opportunities-demo.jpg",
    features: ["Partnership Deals", "Funding Rounds", "Mentorship"]
  },
  {
    title: "Jobs",
    description: "Find and publish top-tier roles.",
    longDescription: "Discover curated career opportunities from top employers across Bangladesh. Remote, hybrid, and on-site positions.",
    icon: Briefcase,
    href: "/jobs",
    stats: "4,800+ Job Listings",
    color: "from-blue-600/20 to-blue-900/10",
    image: "/images/jobs-demo.jpg",
    features: ["Top Employers", "Remote Options", "Career Growth"]
  },
  {
    title: "Business Hub",
    description: "Partnerships and corporate resources.",
    longDescription: "Corporate briefings, partner networks, and institutional resources designed for serious business growth.",
    icon: Building2,
    href: "/business",
    stats: "150+ Partner Companies",
    color: "from-emerald-600/20 to-emerald-900/10",
    image: "/images/business-demo.jpg",
    features: ["B2B Networking", "Corporate Solutions", "Strategic Partnerships"]
  },
  {
    title: "Research & Resources",
    description: "Knowledge discovery and guides.",
    longDescription: "Deep-dive reports, policy papers, editorial analysis, and curated reference materials for professionals.",
    icon: BookOpen,
    href: "/research",
    stats: "850+ Research Papers",
    color: "from-violet-600/20 to-violet-900/10",
    image: "/images/research-demo.jpg",
    features: ["Market Analysis", "Policy Briefs", "Industry Reports"]
  },
  {
    title: "Collaboration",
    description: "Find people and organizations to work with.",
    longDescription: "Connect with verified professionals, agencies, and organizations ready to collaborate on your next project.",
    icon: Users,
    href: "/collaboration",
    stats: "12,000+ Active Members",
    color: "from-rose-600/20 to-rose-900/10",
    image: "/images/collaboration-demo.jpg",
    features: ["Verified Profiles", "Skill Matching", "Project Teams"]
  },
];

export default function ExploreBH() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 bg-bh-black border-t border-bh-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 md:mb-24">
          <span className="inline-block text-bh-red font-heading text-xs uppercase tracking-[0.2em] mb-4">
            Explore BH
          </span>
          <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl text-bh-white font-bold leading-[1.1] mb-6">
            Navigate the ecosystem.
          </h2>
          <p className="font-body text-bh-ivory/60 text-lg max-w-2xl">
            Discover the core pillars of Business Hub. Each section is designed to connect you with opportunities, knowledge, and growth.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {exploreItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <Link 
                href={item.href}
                className="group block h-full bg-bh-black border border-bh-white/10 hover:border-bh-red/50 transition-all duration-500 overflow-hidden"
              >
                {/* Card Content */}
                <div className="p-8">
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-sm bg-linear-to-br ${item.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon className="w-7 h-7 text-bh-red" strokeWidth={1.5} />
                  </div>

                  {/* Title */}
                  <h3 className="font-heading text-2xl text-bh-white mb-3 group-hover:text-bh-red transition-colors">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="font-body text-bh-ivory/60 mb-4 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Long Description (revealed on hover) */}
                  <p className="font-body text-bh-ivory/40 text-sm mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {item.longDescription}
                  </p>

                  {/* Stats */}
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-2 h-2 rounded-full bg-bh-red" />
                    <span className="font-heading text-xs text-bh-gold uppercase tracking-wider">
                      {item.stats}
                    </span>
                  </div>

                  {/* Features Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {item.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-3 py-1 bg-bh-white/5 border border-bh-white/10 rounded-sm text-xs text-bh-ivory/60 group-hover:border-bh-red/30 group-hover:text-bh-ivory transition-colors"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="flex items-center gap-2 text-bh-red font-heading text-sm uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2.5 group-hover:translate-x-0">
                    Explore
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>

                {/* Bottom Border Accent */}
                <div className="h-1 bg-linear-to-r from-bh-red to-transparent w-0 group-hover:w-full transition-all duration-500" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}