"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: "01",
    title: "Discover",
    desc: "Browse the Marketplace, Jobs, Opportunities, and Research. Find exactly what you need in seconds.",
  },
  {
    number: "02",
    title: "Connect",
    desc: "Reach out to businesses, professionals, and creators. Build meaningful partnerships and networks.",
  },
  {
    number: "03",
    title: "Act",
    desc: "Apply, purchase, collaborate, or publish. Take the next step with confidence and clarity.",
  },
];

export default function HowItWorks() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Animate Header
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // 2. Animate Connecting Line (Draws from left to right)
      gsap.fromTo(
        lineRef.current,
        { scaleX: 0, transformOrigin: "left center" },
        {
          scaleX: 1,
          duration: 1.5,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: lineRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // 3. Staggered Reveal for Steps
      stepsRef.current.forEach((step, index) => {
        if (step) {
          gsap.fromTo(
            step,
            { opacity: 0, y: 40 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: "power3.out",
              scrollTrigger: {
                trigger: step,
                start: "top 85%",
                toggleActions: "play none none reverse",
              },
              delay: index * 0.15, // Purposeful stagger
            }
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert(); // Cleanup GSAP on unmount
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="bg-bh-black border-t border-bh-white/5 py-24 md:py-32 px-6 md:px-12 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-block py-1.5 px-4 mb-6 text-[10px] font-heading font-bold tracking-[0.2em] uppercase text-bh-red border border-bh-red/30 rounded-sm">
            The Journey
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-bh-white mb-6">
            How it works
          </h2>
          <p className="font-body text-lg text-bh-ivory/60">
            A simple, intentional path from discovery to action.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 relative">
          
          {/* Connecting Line (Desktop only) */}
          <div 
            ref={lineRef} 
            className="hidden md:block absolute top-10 left-[16.66%] w-[66.66%] h-px bg-bh-white/10" 
          />

          {steps.map((step, index) => (
            <div 
              key={step.number} 
              ref={(el) => { stepsRef.current[index] = el; }}
              className="relative group cursor-default"
            >
              {/* Step Number */}
              <div className="font-heading text-[8rem] leading-none font-normal text-bh-white/5 mb-6 group-hover:text-bh-red/20 transition-colors duration-500 select-none">
                {step.number}
              </div>
              
              {/* Content */}
              <h3 className="font-heading text-2xl text-bh-white mb-4 flex items-center gap-3">
                {step.title}
                {index < steps.length - 1 && (
                  <ArrowRight size={18} className="text-bh-red/50 group-hover:text-bh-red transition-colors duration-300 md:hidden" />
                )}
              </h3>
              <p className="font-body text-base text-bh-ivory/60 leading-relaxed">
                {step.desc}
              </p>

              {/* Subtle Bottom Border on Hover (Black Authority style) */}
              <div className="absolute bottom-0 left-0 w-0 h-px bg-bh-red group-hover:w-full transition-all duration-500 ease-out" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}