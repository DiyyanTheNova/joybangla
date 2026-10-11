"use client";

import AnimatedCounter from "@/components/ui/AnimatedCounter";
import VideoReels from "@/components/ui/VideoReels";
import PerformanceChart from "@/components/ui/PerformanceChart";
import LogoRiver from "@/components/ui/LogoRiver";
import SectionWrapper from "@/components/sections/SectionWrapper";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-bh-black text-bh-ivory pt-32">
      
      {/* Hero Stats Section */}
      <section className="py-24 px-6 md:px-12 border-b border-bh-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="inline-block text-bh-red font-heading text-sm uppercase tracking-[0.2em] mb-4">
              Our Impact
            </span>
            <h1 className="font-heading text-5xl md:text-7xl text-bh-white mb-6">
              Numbers that speak.
            </h1>
            <p className="font-body text-bh-ivory/60 max-w-2xl mx-auto text-lg">
              Over a decade of delivering premium digital experiences for global brands.
            </p>
          </div>

          {/* Animated Counters */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
            <AnimatedCounter end={150} suffix="+" label="Projects Delivered" />
            <AnimatedCounter end={50} suffix="+" label="Global Clients" />
            <AnimatedCounter end={12} label="Countries Served" />
            <AnimatedCounter end={98} suffix="%" label="Client Satisfaction" />
          </div>
        </div>
      </section>

      {/* Video Reels Showcase */}
      <VideoReels />

      {/* Performance Charts */}
      <PerformanceChart />

      {/* Logo River */}
      <LogoRiver />

      {/* Agency Story Section */}
      <SectionWrapper className="bg-bh-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading text-4xl md:text-6xl text-bh-white mb-8">
            Built for the future.
          </h2>
          <p className="font-body text-xl text-bh-ivory/70 leading-relaxed mb-12">
            Business Hub is more than a platform. It's an ecosystem designed to connect talent, 
            businesses, and opportunities in ways that matter. Every feature we build serves a purpose.
          </p>
        </div>
      </SectionWrapper>

    </main>
  );
}