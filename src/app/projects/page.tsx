"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Calendar, Building2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import SectionWrapper from "@/components/sections/SectionWrapper";

const projects = [
  {
    id: "1",
    title: "Digital Transformation for TechCorp",
    category: "Strategy & Consulting",
    client: "TechCorp Global",
    year: "2025",
    description: "Complete digital overhaul of legacy systems, resulting in massive efficiency gains and modernized, AI-driven workflows.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
    tags: ["Enterprise", "Cloud Migration", "AI Integration"],
    team: ["Ariel.Mew", "David Kim"],
    result: "300% Efficiency Gain",
  },
  {
    id: "2",
    title: "E-commerce Platform Launch",
    category: "Technology Solutions",
    client: "NovaRetail",
    year: "2025",
    description: "Built and launched a highly scalable marketplace architecture serving over 50,000 active users in the first month.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80",
    tags: ["Marketplace", "Scalability", "UX Design"],
    team: ["Sarah Chen", "Lucas Brown"],
    result: "50K+ Users in Month 1",
  },
  {
    id: "3",
    title: "Global Expansion Strategy",
    category: "Global Expansion",
    client: "Horizon Logistics",
    year: "2024",
    description: "Successfully mapped and executed entry into 3 new international markets with a fully localized operational approach.",
    image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=800&q=80",
    tags: ["International", "Market Entry", "Localization"],
    team: ["Marcus Johnson", "Nina Okonjo"],
    result: "3 New Markets Entered",
  },
  {
    id: "4",
    title: "AI-Powered Analytics Dashboard",
    category: "Innovation",
    client: "DataFlow Inc.",
    year: "2024",
    description: "Developed a real-time business intelligence platform with predictive analytics capabilities for executive decision-making.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    tags: ["AI/ML", "Data Visualization", "Automation"],
    team: ["Daniel Carter", "Ethan Jackson"],
    result: "40% Faster Decisions",
  },
  {
    id: "5",
    title: "Remote Work Infrastructure",
    category: "Team Collaboration",
    client: "Enterprise Solutions Ltd.",
    year: "2024",
    description: "Designed and implemented secure, hybrid work solutions and communication tools for a 5,000+ employee organization.",
    image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=800&q=80",
    tags: ["Remote Work", "Security", "Productivity"],
    team: ["James Wilson", "Ryan Miller"],
    result: "5,000+ Employees Onboarded",
  },
  {
    id: "6",
    title: "Sustainable Business Initiative",
    category: "Strategy & Consulting",
    client: "GreenFuture Energy",
    year: "2023",
    description: "Developed a comprehensive ESG compliance framework and green technology integration roadmap for long-term sustainability.",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=800&q=80",
    tags: ["Sustainability", "ESG", "Green Tech"],
    team: ["Aisha Patel", "Olivia Martin"],
    result: "100% ESG Compliance",
  },
  {
    id: "7",
    title: "FinTech Mobile App Redesign",
    category: "Technology Solutions",
    client: "PayStream",
    year: "2023",
    description: "Complete UX/UI overhaul of a legacy banking application, focusing on accessibility, speed, and modern design patterns.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80",
    tags: ["FinTech", "Mobile UX", "Accessibility"],
    team: ["Sophia Lee", "Liam Harris"],
    result: "4.9 App Store Rating",
  },
  {
    id: "8",
    title: "Healthcare Telemedicine Platform",
    category: "Innovation",
    client: "MediConnect",
    year: "2023",
    description: "Built a secure, HIPAA-compliant telemedicine platform connecting patients with specialists via high-quality video.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
    tags: ["HealthTech", "Security", "Video Streaming"],
    team: ["Noah Anderson", "Emma Davis"],
    result: "10K+ Daily Consultations",
  },
  {
    id: "9",
    title: "EdTech Learning Management System",
    category: "Technology Solutions",
    client: "Learnify Academy",
    year: "2023",
    description: "Architected a scalable LMS with interactive course modules, progress tracking, and automated certification.",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=800&q=80",
    tags: ["EdTech", "SaaS", "Gamification"],
    team: ["Isabella White", "Alex Thompson"],
    result: "200% Course Completion",
  },
  {
    id: "10",
    title: "Smart City IoT Network",
    category: "Innovation",
    client: "Metro Urban Development",
    year: "2022",
    description: "Deployed a city-wide IoT sensor network for real-time traffic management, waste optimization, and energy monitoring.",
    image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=800&q=80",
    tags: ["IoT", "Smart City", "Data Analytics"],
    team: ["Ryan Miller", "Lucas Brown"],
    result: "15% Energy Reduction",
  },
  {
    id: "11",
    title: "SaaS B2B Marketing Automation",
    category: "Digital Growth",
    client: "GrowthEngine",
    year: "2022",
    description: "Implemented a multi-channel marketing automation pipeline that nurtures leads and tracks ROI across all touchpoints.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    tags: ["Marketing", "Automation", "B2B SaaS"],
    team: ["Ava Thomas", "Marcus Johnson"],
    result: "5x Lead Generation",
  },
  {
    id: "12",
    title: "Luxury Brand Identity Overhaul",
    category: "Strategy & Consulting",
    client: "Aura Luxe",
    year: "2022",
    description: "Complete visual and strategic rebranding for a high-end fashion label, including digital presence and packaging.",
    image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&w=800&q=80",
    tags: ["Branding", "Visual Identity", "Luxury"],
    team: ["Mohammad Mahfuz", "Aisha Patel"],
    result: "85% Brand Recognition",
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-bh-black text-bh-ivory pt-32 pb-20">
      {/* Header Section */}
      <SectionWrapper className="border-b border-bh-white/5">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link href="/" className="inline-flex items-center gap-2 text-bh-ivory/60 hover:text-bh-ivory transition-colors mb-8 font-body text-sm">
            ← Back to Home
          </Link>
          
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tight mb-8">
            Featured <span className="text-bh-red">Projects</span>
          </h1>
          
          <p className="font-body text-xl text-bh-ivory/70 max-w-3xl leading-relaxed">
            Showcasing our most impactful work and client successes. 
            Each project represents a unique challenge solved with precision, innovation, and measurable results.
          </p>
        </motion.div>
      </SectionWrapper>

      {/* Projects Grid */}
      <SectionWrapper>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group border border-bh-white/10 bg-bh-black hover:border-bh-red/50 transition-all duration-300 flex flex-col"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  fill 
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-linear-to-t from-bh-black via-bh-black/40 to-transparent" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-bh-black/80 backdrop-blur-sm border border-bh-white/10 text-[10px] font-heading uppercase tracking-wider text-bh-ivory/80">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-4 text-xs font-heading uppercase tracking-wider text-bh-ivory/50">
                  <span className="flex items-center gap-1">
                    <Building2 size={12} /> {project.client}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar size={12} /> {project.year}
                  </span>
                </div>

                <h3 className="font-heading text-xl text-bh-ivory mb-3 group-hover:text-bh-white transition-colors line-clamp-2">
                  {project.title}
                </h3>
                
                <p className="font-body text-sm text-bh-ivory/60 mb-6 leading-relaxed flex-1 line-clamp-3">
                  {project.description}
                </p>

                {/* Key Result Highlight */}
                <div className="mb-6 p-4 bg-bh-white/5 border border-bh-white/10">
                  <p className="font-heading text-[10px] uppercase tracking-wider text-bh-ivory/40 mb-1">Key Result</p>
                  <p className="font-heading text-lg text-bh-red">{project.result}</p>
                </div>

                {/* Team */}
                <div className="mb-6">
                  <p className="font-heading text-[10px] uppercase tracking-wider text-bh-ivory/40 mb-2">Project Leads</p>
                  <div className="flex flex-wrap gap-2">
                    {project.team.map((member, i) => (
                      <span key={i} className="px-2 py-1 text-xs font-body text-bh-ivory/70 bg-bh-black border border-bh-white/10">
                        {member}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 text-[10px] font-heading uppercase tracking-wider border border-bh-white/10 text-bh-ivory/50">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <Link href={`/projects/${project.id}`} className="inline-flex items-center gap-2 font-heading text-sm uppercase tracking-wider text-bh-red hover:text-bh-ivory transition-colors mt-auto group/link">
                  View Case Study 
                  <ArrowUpRight size={16} className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </SectionWrapper>

      {/* CTA Section */}
      <SectionWrapper className="bg-bh-black border-t border-bh-white/5">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-heading text-3xl md:text-5xl text-bh-ivory mb-6">
            Have a project in mind?
          </h2>
          <p className="font-body text-lg text-bh-ivory/70 mb-8">
            Let's collaborate to create something extraordinary together.
          </p>
          <Link href="/contact" className="inline-block bg-bh-red text-bh-white font-heading uppercase tracking-wider px-8 py-4 hover:bg-bh-red/90 transition-colors rounded-sm">
            Start a Project
          </Link>
        </div>
      </SectionWrapper>
    </main>
  );
}