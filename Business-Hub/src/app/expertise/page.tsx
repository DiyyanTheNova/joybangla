"use client";

import { motion } from "framer-motion";
import { Briefcase, TrendingUp, Users, Zap, Globe, Shield, Code, Lightbulb, Package, FileText, Award } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import SectionWrapper from "@/components/sections/SectionWrapper";
import { useState, useEffect } from "react"; // <-- ADDED THIS

// --- 1. 3D TECH SPHERE DATA (40 Sectors) ---
const techSectors = [
  "UI/UX Design", "Motion Design", "Videography", "Video Production",
  "VFX", "Video Editing", "AI Engineering", "Web Development",
  "Mobile Apps", "Data Science", "Cybersecurity", "Cloud Architecture",
  "DevOps", "Blockchain", "3D Modeling", "Game Development",
  "SEO", "Content Strategy", "Brand Identity", "Product Management",
  "Agile Coaching", "QA Testing", "UI Animation", "Sound Design",
  "Copywriting", "Market Research", "Financial Modeling", "Legal Tech",
  "Health Tech", "EdTech", "E-commerce", "SaaS Development",
  "API Integration", "Database Admin", "Network Security", "IoT",
  "AR/VR", "Machine Learning", "Prompt Engineering", "No-Code Solutions"
];

// Fibonacci sphere algorithm for even 3D distribution
const generateSpherePoints = (count: number, radius: number) => {
  const points = [];
  const phi = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < count; i++) {
    const y = 1 - (i / (count - 1)) * 2;
    const r = Math.sqrt(1 - y * y);
    const theta = phi * i;
    const x = Math.cos(theta) * r;
    const z = Math.sin(theta) * r;
    points.push({ x: x * radius, y: y * radius, z: z * radius, label: techSectors[i] });
  }
  return points;
};

const spherePoints = generateSpherePoints(40, 220);

// --- 2. TOP 20 MEMBERS DATA ---
const topMembers = [
  { name: "Sarah Chen", role: "Product Designer", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80" },
  { name: "Marcus Johnson", role: "Growth Strategist", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=150&q=80" },
  { name: "Aisha Patel", role: "Brand Consultant", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80" },
  { name: "David Kim", role: "Innovation Lead", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&q=80" },
  { name: "Elena Rodriguez", role: "Digital Creator", image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=150&q=80" },
  { name: "James Wilson", role: "Executive Coach", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80" },
  { name: "Nina Okonjo", role: "Strategy Director", image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=150&q=80" },
  { name: "Alex Thompson", role: "Tech Founder", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80" },
  { name: "Sophia Lee", role: "UX Researcher", image: "https://images.unsplash.com/photo-1598550874175-4d7112ee7f38?auto=format&fit=crop&w=150&q=80" },
  { name: "Daniel Carter", role: "Data Scientist", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&q=80" },
  { name: "Olivia Martin", role: "Content Strategist", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80" },
  { name: "Lucas Brown", role: "DevOps Engineer", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80" },
  { name: "Emma Davis", role: "Financial Analyst", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80" },
  { name: "Ryan Miller", role: "Cybersecurity Expert", image: "https://images.unsplash.com/photo-1504257432389-52343af06ae3?auto=format&fit=crop&w=150&q=80" },
  { name: "Mia Wilson", role: "HR Director", image: "https://images.unsplash.com/photo-1554151228-14d9def656e4?auto=format&fit=crop&w=150&q=80" },
  { name: "Noah Anderson", role: "Blockchain Developer", image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&w=150&q=80" },
  { name: "Ava Thomas", role: "Marketing Lead", image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=150&q=80" },
  { name: "Ethan Jackson", role: "Solutions Architect", image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=150&q=80" },
  { name: "Isabella White", role: "Legal Counsel", image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=150&q=80" },
  { name: "Liam Harris", role: "Operations Manager", image: "https://images.unsplash.com/photo-1522556189639-b150ed9c4330?auto=format&fit=crop&w=150&q=80" },
];

const expertiseItems = [
  { icon: Briefcase, title: "Strategy & Consulting", description: "Strategic planning and business transformation for modern enterprises.", details: ["Market Analysis", "Business Modeling", "Growth Strategy", "Digital Transformation"] },
  { icon: TrendingUp, title: "Digital Growth", description: "Scale your business with data-driven solutions and performance optimization.", details: ["SEO & Content", "Performance Marketing", "Analytics", "Conversion Optimization"] },
  { icon: Users, title: "Team Collaboration", description: "Build high-performing teams and create productive work environments.", details: ["Remote Work Solutions", "Team Building", "Workflow Design", "Communication Tools"] },
  { icon: Zap, title: "Innovation", description: "Cutting-edge solutions for complex challenges and emerging opportunities.", details: ["AI Integration", "Automation", "Emerging Tech", "R&D Support"] },
  { icon: Globe, title: "Global Expansion", description: "Navigate international markets with localized strategies and partnerships.", details: ["Market Entry", "Localization", "Cross-border Operations", "Cultural Adaptation"] },
  { icon: Shield, title: "Security & Compliance", description: "Enterprise-grade security and regulatory compliance for your digital assets.", details: ["Data Protection", "GDPR Compliance", "Security Audits", "Risk Management"] },
  { icon: Code, title: "Technology Solutions", description: "Custom software development and technical architecture for scalable platforms.", details: ["Web Development", "Mobile Apps", "Cloud Infrastructure", "API Design"] },
  { icon: Lightbulb, title: "Research & Insights", description: "Deep market research and actionable insights to inform strategic decisions.", details: ["Market Research", "Competitive Analysis", "Trend Forecasting", "User Research"] },
];

export default function ExpertisePage() {
  // Prevent hydration mismatch by only rendering the 3D sphere on the client
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <main className="min-h-screen bg-bh-black text-bh-ivory pt-32 pb-20">
      
      {/* Header Section */}
      <SectionWrapper className="border-b border-bh-white/5">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <Link href="/" className="inline-flex items-center gap-2 text-bh-ivory/60 hover:text-bh-ivory transition-colors mb-8 font-body text-sm">
            ← Back to Home
          </Link>
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tight mb-8">
            Our <span className="text-bh-red">Expertise</span>
          </h1>
          <p className="font-body text-xl text-bh-ivory/70 max-w-3xl leading-relaxed">
            Strategic consulting, architecture, design and turnkey solutions for modern businesses. 
            We bring deep industry knowledge and technical excellence to every engagement.
          </p>
        </motion.div>
      </SectionWrapper>

      {/* 3D Tech Sphere Section */}
      <SectionWrapper className="py-24 overflow-hidden">
        <div className="text-center mb-16">
          <span className="inline-block text-bh-red font-heading text-xs uppercase tracking-[0.2em] mb-4">
            Global Capabilities
          </span>
          <h2 className="font-heading text-3xl md:text-5xl text-bh-ivory">
            40+ Disciplines. One Ecosystem.
          </h2>
        </div>

        {/* 3D Sphere Container - Only render on client to prevent hydration mismatch */}
        {mounted && (
          <div className="relative flex justify-center items-center h-125 md:h-150 perspective-1000">
            <motion.div
              className="relative w-75 h-75 md:w-125 md:h-125"
              animate={{ rotateY: 360, rotateX: 15 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              style={{ transformStyle: "preserve-3d" }}
            >
              {spherePoints.map((point, i) => (
                <motion.div
                  key={i}
                  className="absolute left-1/2 top-1/2 whitespace-nowrap px-3 py-1.5 bg-bh-black/80 border border-bh-white/10 rounded-sm backdrop-blur-sm"
                  style={{
                    transform: `translate3d(${point.x}px, ${point.y}px, ${point.z}px) translate(-50%, -50%)`,
                    opacity: (point.z + 220) / 440, 
                    zIndex: Math.round(point.z + 220),
                  }}
                >
                  <span className="font-heading text-[10px] md:text-xs uppercase tracking-wider text-bh-ivory/80">
                    {point.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>
            
            {/* Center Glow */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-bh-red/10 blur-3xl rounded-full pointer-events-none" />
          </div>
        )}
      </SectionWrapper>

      {/* Platform Model: Gigs + Bidding */}
      <SectionWrapper className="bg-bh-black border-y border-bh-white/5">
        <div className="text-center mb-16">
          <span className="inline-block text-bh-gold font-heading text-xs uppercase tracking-[0.2em] mb-4">
            How It Works
          </span>
          <h2 className="font-heading text-3xl md:text-5xl text-bh-ivory mb-6">
            Two Ways to Collaborate
          </h2>
          <p className="font-body text-lg text-bh-ivory/60 max-w-2xl mx-auto">
            Whether you need a quick task done or a long-term partner, Business Hub adapts to your workflow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Gigs Card */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="border border-bh-white/10 p-8 md:p-10 hover:border-bh-red/50 transition-all duration-300 bg-bh-black"
          >
            <div className="w-14 h-14 bg-bh-red/10 border border-bh-red/20 flex items-center justify-center mb-6">
              <Package className="w-7 h-7 text-bh-red" strokeWidth={1.5} />
            </div>
            <h3 className="font-heading text-2xl text-bh-ivory mb-4">The Marketplace (Gigs)</h3>
            <p className="font-body text-bh-ivory/70 leading-relaxed mb-6">
              Freelancers create fixed-price service packages called <span className="text-bh-red font-semibold">Gigs</span>. 
              Clients can browse, compare, and purchase specific tasks instantly with secure escrow protection.
            </p>
            <ul className="space-y-3">
              {["Instant purchasing", "Fixed pricing", "Secure escrow", "Quick turnaround"].map((item) => (
                <li key={item} className="flex items-center gap-3 font-body text-sm text-bh-ivory/60">
                  <span className="w-1.5 h-1.5 bg-bh-red rounded-full" /> {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Bidding Card */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="border border-bh-white/10 p-8 md:p-10 hover:border-bh-gold/50 transition-all duration-300 bg-bh-black"
          >
            <div className="w-14 h-14 bg-bh-gold/10 border border-bh-gold/20 flex items-center justify-center mb-6">
              <FileText className="w-7 h-7 text-bh-gold" strokeWidth={1.5} />
            </div>
            <h3 className="font-heading text-2xl text-bh-ivory mb-4">The Job Board (Proposals)</h3>
            <p className="font-body text-bh-ivory/70 leading-relaxed mb-6">
              Clients post detailed job descriptions. Freelancers submit tailored proposals to bid on projects, 
              making it the perfect environment for <span className="text-bh-gold font-semibold">long-term collaborations</span>.
            </p>
            <ul className="space-y-3">
              {["Custom proposals", "Milestone payments", "Long-term contracts", "Vetted talent"].map((item) => (
                <li key={item} className="flex items-center gap-3 font-body text-sm text-bh-ivory/60">
                  <span className="w-1.5 h-1.5 bg-bh-gold rounded-full" /> {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Expertise Grid */}
      <SectionWrapper>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {expertiseItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group border border-bh-white/10 bg-bh-black p-8 md:p-10 hover:border-bh-red/50 transition-all duration-300"
            >
              <div className="flex items-start gap-6">
                <div className="shrink-0">
                  <item.icon className="w-10 h-10 text-bh-red" strokeWidth={1.5} />
                </div>
                <div className="flex-1">
                  <h3 className="font-heading text-2xl text-bh-ivory mb-3 group-hover:text-bh-white transition-colors">
                    {item.title}
                  </h3>
                  <p className="font-body text-bh-ivory/60 mb-6 leading-relaxed">
                    {item.description}
                  </p>
                  <ul className="space-y-2">
                    {item.details.map((detail) => (
                      <li key={detail} className="font-body text-sm text-bh-ivory/50 flex items-center gap-2">
                        <span className="w-1 h-1 bg-bh-red rounded-full"></span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* Spinning Top 20 Members Orbit */}
      <SectionWrapper className="bg-bh-black border-t border-bh-white/5 py-32 overflow-hidden">
        <div className="text-center mb-16">
          <span className="inline-block text-bh-red font-heading text-xs uppercase tracking-[0.2em] mb-4">
            Elite Talent
          </span>
          <h2 className="font-heading text-3xl md:text-5xl text-bh-ivory">
            Top Rated Members
          </h2>
        </div>

        <div className="relative flex justify-center items-center h-125 md:h-150">
          {/* Center Badge */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-24 h-24 md:w-32 md:h-32 bg-bh-black border border-bh-red/30 flex flex-col items-center justify-center shadow-2xl">
            <Award className="w-6 h-6 md:w-8 md:h-8 text-bh-red mb-1 md:mb-2" />
            <span className="font-heading text-[10px] md:text-xs uppercase tracking-wider text-bh-ivory text-center">Top<br/>Tier</span>
          </div>

          {/* Rotating Ring - Scaled down on mobile, full size on desktop */}
          <motion.div
            className="absolute left-1/2 top-1/2 w-125 h-125 -translate-x-1/2 -translate-y-1/2 origin-center scale-75 md:scale-100"
            animate={{ rotate: 360 }}
            transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          >
            {topMembers.map((member, i) => {
              const angle = (i / topMembers.length) * 2 * Math.PI;
              const radius = 240; // Perfect spacing for 20 items
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;

              return (
                <motion.div
                  key={member.name}
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                  style={{
                    transform: `translate(${x}px, ${y}px)`,
                  }}
                  // Counter-rotate the inner content so images/text stay perfectly upright
                  animate={{ rotate: -360 }}
                  transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
                >
                  <div className="group relative">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-bh-white/10 overflow-hidden group-hover:border-bh-red transition-colors duration-300 bg-bh-black shadow-lg">
                      <Image
                        src={member.image}
                        alt={member.name}
                        width={56}
                        height={56}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                      />
                    </div>
                    {/* Tooltip on hover */}
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-3 py-2 bg-bh-black border border-bh-white/10 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-30 shadow-xl">
                      <p className="font-heading text-xs text-bh-white">{member.name}</p>
                      <p className="font-body text-[10px] text-bh-red">{member.role}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
          
          {/* Decorative Orbit Rings */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-120 h-120 md:w-125 md:h-125 border border-bh-white/5 rounded-full pointer-events-none" />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-135 h-135 md:w-140 md:h-140 border border-dashed border-bh-white/5 rounded-full pointer-events-none" />
        </div>
      </SectionWrapper>

      {/* CTA Section */}
      <SectionWrapper className="bg-bh-black border-t border-bh-white/5">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-heading text-3xl md:text-5xl text-bh-ivory mb-6">
            Ready to transform your business?
          </h2>
          <p className="font-body text-lg text-bh-ivory/70 mb-8">
            Let's discuss how our expertise can help you achieve your goals.
          </p>
          <Link href="/contact" className="inline-block bg-bh-red text-bh-white font-heading uppercase tracking-wider px-8 py-4 hover:bg-bh-red/90 transition-colors rounded-sm">
            Get in Touch
          </Link>
        </div>
      </SectionWrapper>
    </main>
  );
}