"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

// UI Components
import Button from "@/components/ui/Button";
import ContactForm from "@/components/ui/ContactForm";
import SpinningShowcase from "@/components/ui/SpinningShowcase";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import LogoRiver from "@/components/ui/LogoRiver";
import VideoReels from "@/components/sections/VideoReels";
import PerformanceChart from "@/components/ui/PerformanceChart";
import WaveMarquee from "@/components/ui/WaveMarquee";

// Section Components
import WhatIsBH from "@/components/sections/WhatIsBH";
import ExploreBH from "@/components/sections/ExploreBH";
import WhyBH from "@/components/sections/WhyBH";
import HowItWorks from "@/components/sections/HowItWorks";
import LiveActivity from "@/components/sections/LiveActivity";
import IvoryArchive from "@/components/sections/IvoryArchive";
import JoinCTA from "@/components/sections/JoinCTA";
import AboutBH from "@/components/sections/AboutBH";
import BuiltBy from "@/components/sections/BuiltBy";
import FeaturedMembers from "@/components/sections/FeaturedMembers";
import ServiceComparison from "@/components/sections/ServiceComparison";
import FounderTimeline from "@/components/sections/FounderTimeline";
import BeforeAfterShowcase from "@/components/sections/BeforeAfterShowcase";
import LeadMagnet from "@/components/sections/LeadMagnet";
import FAQ from "@/components/sections/FAQ";
import FounderPhilosophy from "@/components/sections/FounderPhilosophy";
import ExpertiseGrid from "@/components/sections/ExpertiseGrid";






export default function Home() {
  const router = useRouter();

  const scrollToExplore = () => {
    const exploreSection = document.getElementById("explore-bh");
    if (exploreSection) {
      exploreSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleGetStarted = () => {
    router.push("/join");
  };

  const newLocal = "absolute inset-0  bg-gradient-to-lfrom-transparent via-bh-black/60 to-bh-black";
  return (
    <main className="flex flex-col min-h-screen text-bh-ivory">
      {/* 01 - Hero Section */}
      <section className="relative flex flex-col items-center justify-center min-h-[90vh] px-6 md:px-12 text-center overflow-hidden pt-24">
        <div className="absolute top-0 right-0 w-full md:w-1/2 h-full pointer-events-none z-0 opacity-90">
          <Image
            src="/images/footer-cranes.png"
            alt="Artistic background"
            fill
            className="object-cover object-top"
            priority
          />
          <div className={newLocal} />
          <div className="absolute inset-0 bg-linear-to-t from-bh-black via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">
          <span className="inline-block py-1.5 px-4 mb-8 text-xs font-heading font-medium tracking-[0.2em] uppercase border border-bh-red/50 text-bh-red bg-bh-black/50 backdrop-blur-sm rounded-sm">
            Premium Digital Ecosystem
          </span>

          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tight text-bh-white mb-8">
            Build. Connect. <br className="hidden md:block" />
            <span className="text-bh-red">Discover.</span>
          </h1>

          <p className="font-body text-lg md:text-xl text-bh-ivory/80 max-w-2xl mx-auto mb-12 leading-relaxed">
            Bangladesh&apos;s most powerful digital platform for business, talent, and opportunity.
            One login. Everything you need.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center mb-16">
            <Button variant="primary" size="lg" onClick={handleGetStarted}>
              Get Started — Free
            </Button>
            <Button variant="secondary" size="lg" onClick={scrollToExplore}>
              Explore Platform
            </Button>
          </div>

          {/* ANIMATED STATS */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 border-t border-bh-white/10 pt-8 w-full max-w-4xl">
            <AnimatedCounter end={120} suffix="+" label="Active Members" />
            <AnimatedCounter end={72} suffix="+" label="Job Listings" />
            <AnimatedCounter end={44} suffix="+" label="Marketplace Items" />
            <AnimatedCounter end={60} suffix="+" label="Open Opportunities" />
          </div>
        </div>
      </section>

      {/* 01.5 - Moving Photo Marquee */}
      <WaveMarquee />

      {/* 02 - What is BH? */}
      <WhatIsBH />

      {/* 03 - Explore BH */}
      <div id="explore-bh">
        <ExploreBH />
      </div>

      {/*  AGENCY SHOWCASE STARTS HERE  */}
      <LogoRiver />

      <BeforeAfterShowcase />

      <VideoReels />

      {/* Performance Chart */}
      <section className="py-24 px-6 md:px-12 bg-bh-black/40 backdrop-blur-sm border-t border-bh-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12 text-center md:text-left">
            <span className="inline-block text-bh-gold font-heading text-sm uppercase tracking-[0.2em] mb-4">
              Our Impact
            </span>
            <h2 className="font-heading text-3xl md:text-5xl text-bh-white mb-4">
              Consistent Growth & Delivery
            </h2>
            <p className="font-body text-bh-ivory/60 max-w-xl">
              Data-driven results from our previous campaigns and platform milestones.
            </p>
          </div>
          <PerformanceChart />
        </div>
      </section>
      {/* 🏢 AGENCY SHOWCASE ENDS HERE 🏢 */}

      {/* 04 - Why BH? */}
      <WhyBH />

      {/* 05 - How it works */}
      <HowItWorks />

      {/* Service Comparison */}
      <ServiceComparison />

      {/* 06 - Live Activity */}
      <LiveActivity />

      {/* 07 - Ivory Archive */}
      <IvoryArchive />

      {/* 08 - Book a Strategy Call / Contact */}
      <section className="py-24 px-6 md:px-12 bg-bh-black/40 backdrop-blur-sm border-t border-bh-white/5">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <span className="inline-block text-bh-red font-heading text-sm uppercase tracking-[0.2em] mb-4">
            Let's Talk
          </span>
          <h2 className="font-heading text-3xl md:text-5xl text-bh-white mb-4">
            Book a Strategy Call
          </h2>
          <p className="font-body text-bh-ivory/60 max-w-xl mx-auto">
            Ready to scale? Schedule a 30-minute discovery call with our team.
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <ContactForm />
        </div>
      </section>

      {/* 09 - Featured Members Showcase */}
      <FeaturedMembers />

      {/* Founder Timeline */}
      <FounderTimeline />

      {/* 10 - About BH */}
      <AboutBH />

      {/* 11 - Built By */}
      <BuiltBy />

      {/* 11.5 - Lead Magnet */}
      <LeadMagnet />

      {/* 11.6 - Founder Philosophy */}
      <FounderPhilosophy />

      {/* 11.7- FAQ */}
      <FAQ />
     

      {/* 11.8 - Expertise Grid */}
      <ExpertiseGrid />
     


      {/* 12 - Join CTA */}
      <JoinCTA />
    </main>
  );
}