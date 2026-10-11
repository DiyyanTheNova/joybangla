"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

const milestones = [
  {
    year: "2023",
    title: "The Vision",
    description: "Business Hub was conceptualized to bridge the gap between talent, businesses, and opportunities in a single, premium digital ecosystem.",
  },
  {
    year: "2024",
    title: "Platform Launch",
    description: "Official launch of the core ecosystem: Marketplace, Jobs, and Opportunities. Onboarded the first 1,000 verified members.",
  },
  {
    year: "2025",
    title: "Ivory Archive & Research",
    description: "Introduction of the Ivory Archive, providing deep-dive research, policy briefs, and editorial analysis for the professional community.",
  },
  {
    year: "2026",
    title: "Global Expansion",
    description: "Scaling the Business Hub model internationally, introducing cross-border collaborations and enterprise-level partnerships.",
  },
];

export default function FounderTimeline() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const nodes = gsap.utils.toArray<HTMLElement>(".timeline-node");
      
      nodes.forEach((node, index) => {
        gsap.fromTo(
          node,
          { opacity: 0, x: index % 2 === 0 ? -50 : 50 },
          {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: node,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert(); // Cleanup
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="py-24 md:py-32 px-6 md:px-12 bg-bh-black border-t border-bh-white/5"
    >
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="inline-block text-bh-gold font-heading text-xs uppercase tracking-[0.2em] mb-4">
            Our Journey
          </span>
          <h2 className="font-heading text-3xl md:text-5xl text-bh-white font-bold leading-[1.1]">
            Built with purpose.
          </h2>
        </div>

        {/* Timeline Container */}
        <div ref={timelineRef} className="relative">
          
          {/* Center Vertical Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-bh-white/10 -translate-x-1/2 hidden md:block" />

          {milestones.map((milestone, index) => (
            <div 
              key={milestone.year} 
              className="timeline-node relative flex flex-col md:flex-row items-center mb-16 last:mb-0"
            >
              {/* Left Side (Year) */}
              <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:order-2 md:pl-12 md:text-left'} text-center md:text-left`}>
                <span className="font-heading text-4xl md:text-5xl text-bh-red font-bold">
                  {milestone.year}
                </span>
              </div>

              {/* Center Dot */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-bh-black border-2 border-bh-red z-10 hidden md:block" />

              {/* Right Side (Content) */}
              <div className={`md:w-1/2 mt-4 md:mt-0 ${index % 2 === 0 ? 'md:pl-12 md:text-left' : 'md:order-1 md:pr-12 md:text-right'} text-center`}>
                <h3 className="font-heading text-2xl text-bh-white mb-3">
                  {milestone.title}
                </h3>
                <p className="font-body text-bh-ivory/60 text-base leading-relaxed">
                  {milestone.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}