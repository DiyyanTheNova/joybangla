"use client";

import { motion } from "framer-motion";
import { Target, Eye, Heart, Award, TrendingUp, Zap, Camera, Globe, Mail, Shield, Lock, Terminal, Activity } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import SectionWrapper from "@/components/sections/SectionWrapper";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

const values = [
  { icon: Target, title: "Purpose-Driven", description: "Every decision we make serves a clear user need." },
  { icon: Eye, title: "Transparency", description: "Open communication and honest partnerships." },
  { icon: Heart, title: "Human-Centered", description: "Technology should serve people, not the other way around." },
  { icon: Award, title: "Excellence", description: "We hold ourselves to the highest standards of quality." },
];

const teamMembers = [
  {
    name: "Ariel.Mew",
    role: "CEO, Lead Programming Architect & AI Strategist",
    bio: "Visionary leader driving digital strategy and business transformation.",
    image: "/images/ariel-mew.jpg",
    linkedin: "#",
    twitter: "#",
    email: "ariel@businesshub.com",
  },
  {
    name: "IJUFS",
    role: "Lead AI Engineer & Founder",
    bio: "Pioneering AI solutions with 4+ years in digital strategy.",
    image: "/images/founder1.jpg",
    linkedin: "#",
    twitter: "#",
    email: "ariel@businesshub.com",
  },
  {
    name: "Mohammad Mahfuz",
    role: "Lead Designer & Professional Visual Artist",
    bio: "Crafting premium visual experiences with 8+ years of expertise.",
    image: "/images/mahfuz.png",
    linkedin: "#",
    twitter: "#",
    email: "ariel@businesshub.com",
  },
  {
    name: "Arezoo",
    role: "Lead Coordinator",
    bio: "Ensuring seamless operations and strategic alignment.",
    image: "/images/arezoo.png",
    linkedin: "#",
    twitter: "#",
    email: "ariel@businesshub.com",
  },
];

export default function AgencyPage() {
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
            The <span className="text-bh-red">Agency</span>
          </h1>
          
          <p className="font-body text-xl text-bh-ivory/70 max-w-3xl leading-relaxed">
            A premium digital ecosystem built for modern businesses. 
            We combine strategic thinking with technical excellence to deliver transformative solutions.
          </p>
        </motion.div>
      </SectionWrapper>

      {/* REDLINE ADMINISTRATION SECTION - The 3rd Eye */}
      <SectionWrapper className="relative overflow-hidden">
        {/* Animated background effect */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-linear-to-br from-bh-red/5 via-transparent to-bh-black" />
          <motion.div
            animate={{ 
              backgroundPosition: ['0% 0%', '100% 100%'],
            }}
            transition={{ 
              duration: 20,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: '30px 30px',
            }}
          />
        </div>

        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-2 bg-bh-red rounded-full animate-pulse" />
              <span className="inline-block text-bh-red font-heading text-xs uppercase tracking-[0.3em]">
                Administration Interface
              </span>
            </div>
            
            {/* UPDATED HEADING HERE */}
            <h2 className="font-heading text-3xl md:text-5xl text-bh-ivory mb-6 leading-tight">
              Powered by{" "}
              <span className="text-bh-red tracking-[0.3em]">
                REDLINE
              </span>
            </h2>
            
            <p className="font-body text-lg text-bh-ivory/70 max-w-3xl leading-relaxed">
              The 3rd Eye of Business Hub. A secure, external control interface for platform administration, 
              real-time monitoring, and strategic oversight.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Redline Logo & Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative bg-bh-black border border-bh-white/10 p-12 flex items-center justify-center min-h-75">
                {/* Glowing effect behind logo */}
                <div className="absolute inset-0 bg-linear-to-br from-bh-red/10 via-transparent to-transparent opacity-50" />
                
                {/* Redline Logo */}
                <div className="relative z-10">
                  <Image
                    src="/images/redline-logo.jpg"
                    alt="Redline Administration"
                    width={280}
                    height={200}
                    className="object-contain"
                    priority
                  />
                </div>

                {/* Decorative corners */}
                <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-bh-red/30" />
                <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-bh-red/30" />
                <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-bh-red/30" />
                <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-bh-red/30" />
              </div>

              {/* Status indicator */}
              <div className="absolute -top-3 -right-3 flex items-center gap-2 px-4 py-2 bg-bh-black border border-bh-red/50">
                <div className="w-2 h-2 bg-bh-red rounded-full animate-pulse" />
                <span className="font-heading text-xs text-bh-red uppercase tracking-wider">Live</span>
              </div>
            </motion.div>

            {/* Redline Features */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex items-center justify-center border border-bh-white/10 bg-bh-white/5 shrink-0">
                  <Eye className="w-6 h-6 text-bh-red" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-heading text-xl text-bh-ivory mb-2">3rd Eye Visibility</h3>
                  <p className="font-body text-sm text-bh-ivory/60 leading-relaxed">
                    Complete oversight of platform operations, user activity, and system health from a secure external interface.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex items-center justify-center border border-bh-white/10 bg-bh-white/5 shrink-0">
                  <Shield className="w-6 h-6 text-bh-red" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-heading text-xl text-bh-ivory mb-2">Secure Administration</h3>
                  <p className="font-body text-sm text-bh-ivory/60 leading-relaxed">
                    Military-grade encryption and authentication protocols protect all administrative functions.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex items-center justify-center border border-bh-white/10 bg-bh-white/5 shrink-0">
                  <Terminal className="w-6 h-6 text-bh-red" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-heading text-xl text-bh-ivory mb-2">Real-Time Control</h3>
                  <p className="font-body text-sm text-bh-ivory/60 leading-relaxed">
                    Instant platform modifications, content management, and user oversight without system downtime.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex items-center justify-center border border-bh-white/10 bg-bh-white/5 shrink-0">
                  <Activity className="w-6 h-6 text-bh-red" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-heading text-xl text-bh-ivory mb-2">Live Monitoring</h3>
                  <p className="font-body text-sm text-bh-ivory/60 leading-relaxed">
                    Continuous system health checks, performance metrics, and anomaly detection.
                  </p>
                </div>
              </div>

              {/* Access Button */}
              <div className="pt-6 border-t border-bh-white/10">
                <a
                  href="https://redline-admin-two.vercel.app/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-bh-black border border-bh-red text-bh-red font-heading text-sm uppercase tracking-wider hover:bg-bh-red hover:text-bh-white transition-all duration-300 group"
                >
                  <Lock className="w-4 h-4" />
                  Access Redline Admin
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>
                <p className="font-body text-xs text-bh-ivory/40 mt-4">
                  Authorized personnel only. All access is logged and monitored.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </SectionWrapper>

      {/* Mission Section */}
      <SectionWrapper>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block text-bh-red font-heading text-xs uppercase tracking-[0.2em] mb-6">
              Our Mission
            </span>
            <h2 className="font-heading text-3xl md:text-5xl text-bh-ivory mb-6 leading-tight">
              To create fast, smooth, and useful digital experiences that connect people, businesses, and opportunities.
            </h2>
            <p className="font-body text-lg text-bh-ivory/70 leading-relaxed">
              We believe technology should empower, not complicate. Our mission is to build platforms 
              that are intuitive, powerful, and designed to grow with our clients' ambitions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="border border-bh-white/10 p-8 md:p-12"
          >
            <h3 className="font-heading text-2xl text-bh-ivory mb-6">Our Vision</h3>
            <p className="font-body text-bh-ivory/70 leading-relaxed mb-8">
              To be the leading digital ecosystem in Bangladesh and beyond, recognized for our 
              commitment to quality, innovation, and meaningful impact.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Globe className="w-5 h-5 text-bh-red shrink-0 mt-1" />
                <span className="font-body text-bh-ivory/80">Global reach with local expertise</span>
              </div>
              <div className="flex items-start gap-3">
                <TrendingUp className="w-5 h-5 text-bh-red shrink-0 mt-1" />
                <span className="font-body text-bh-ivory/80">Sustainable growth for our clients</span>
              </div>
              <div className="flex items-start gap-3">
                <Zap className="w-5 h-5 text-bh-red shrink-0 mt-1" />
                <span className="font-body text-bh-ivory/80">Cutting-edge technology solutions</span>
              </div>
            </div>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Animated Stats Section */}
      <SectionWrapper className="bg-bh-black border-y border-bh-white/5">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          <AnimatedCounter end={150} suffix="+" label="Projects Delivered" />
          <AnimatedCounter end={50} suffix="+" label="Global Clients" />
          <AnimatedCounter end={12} label="Countries Served" />
          <AnimatedCounter end={98} suffix="%" label="Client Satisfaction" />
        </div>
      </SectionWrapper>

      {/* Values Section */}
      <SectionWrapper>
        <div className="mb-16">
          <span className="inline-block text-bh-red font-heading text-xs uppercase tracking-[0.2em] mb-4">
            Our Values
          </span>
          <h2 className="font-heading text-3xl md:text-5xl text-bh-ivory">
            What drives us forward
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="border border-bh-white/10 p-8 hover:border-bh-red/50 transition-all duration-300"
            >
              <value.icon className="w-10 h-10 text-bh-red mb-6" strokeWidth={1.5} />
              <h3 className="font-heading text-xl text-bh-ivory mb-3">{value.title}</h3>
              <p className="font-body text-sm text-bh-ivory/60 leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* Team Section */}
      <SectionWrapper className="bg-bh-black border-t border-bh-white/5">
        <div className="mb-16">
          <span className="inline-block text-bh-red font-heading text-xs uppercase tracking-[0.2em] mb-4">
            Our Team
          </span>
          <h2 className="font-heading text-3xl md:text-5xl text-bh-ivory">
            The people behind BH
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="border border-bh-white/10 p-8 hover:border-bh-red/50 transition-all duration-300 group"
            >
              {/* Profile Image with Grayscale Hover Effect */}
              <div className="relative w-20 h-20 mb-6 overflow-hidden rounded-full bg-bh-white/5">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>

              <h3 className="font-heading text-xl text-bh-ivory mb-2">{member.name}</h3>
              <div className="font-heading text-sm text-bh-red uppercase tracking-wider mb-4">
                {member.role}
              </div>
              <p className="font-body text-sm text-bh-ivory/60 leading-relaxed mb-6">{member.bio}</p>

              {/* Social Links */}
              <div className="flex items-center gap-3">
                <a
                  href={member.linkedin}
                  className="w-8 h-8 flex items-center justify-center rounded-full border border-bh-white/10 text-bh-ivory/40 hover:text-bh-red hover:border-bh-red/30 transition-all duration-300"
                  aria-label={`${member.name} LinkedIn`}
                >
                  <Camera className="w-4 h-4" />
                </a>
                <a
                  href={member.twitter}
                  className="w-8 h-8 flex items-center justify-center rounded-full border border-bh-white/10 text-bh-ivory/40 hover:text-bh-red hover:border-bh-red/30 transition-all duration-300"
                  aria-label={`${member.name} Twitter`}
                >
                  <Globe className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${member.email}`}
                  className="w-8 h-8 flex items-center justify-center rounded-full border border-bh-white/10 text-bh-ivory/40 hover:text-bh-red hover:border-bh-red/30 transition-all duration-300"
                  aria-label={`Email ${member.name}`}
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* CTA Section */}
      <SectionWrapper className="bg-bh-black border-t border-bh-white/5">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-heading text-3xl md:text-5xl text-bh-ivory mb-6">
            Join our team
          </h2>
          <p className="font-body text-lg text-bh-ivory/70 mb-8">
            We're always looking for talented individuals who share our vision.
          </p>
          <Link href="/contact" className="inline-block bg-bh-red text-bh-white font-heading uppercase tracking-wider px-8 py-4 hover:bg-bh-red/90 transition-colors">
            View Open Positions
          </Link>
        </div>
      </SectionWrapper>
    </main>
  );
}