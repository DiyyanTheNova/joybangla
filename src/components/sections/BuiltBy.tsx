"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Camera, Globe, Mail } from "lucide-react";

// --- EDIT YOUR TEAM MEMBERS HERE ---
const teamMembers = [
  {
    name: "Ariel.Mew",
    role: "CEO , Lead programming architect and AI strategist",
    bio: "Visionary leader with 0 years in digital strategy and business transformation.",
    image: "/images/ariel-mew.jpg", // Your photo is already here!
    linkedin: "#",
    twitter: "#",
    email: "ariel@businesshub.com",
  },
   {
    name: "IJUFS",
    role: "Lead AI Engineer and founder",
    bio: "Visionary leader with 4+ years in digital strategy and business transformation.",
    image: "/images/founder1.jpg", // Your photo is already here!
    linkedin: "#",
    twitter: "#",
    email: "ariel@businesshub.com",
  },
   {
    name: " Mohammad Mahfuz ",
    role: "Lead Designer & professional visual artist",
    bio: "Visionary leader with 8+ years in digital strategy and business transformation.",
    image: "/images/mahfuz.png", // Your photo is already here!
    linkedin: "#",
    twitter: "#",
    email: "ariel@businesshub.com",
  },
   {
    name: "Arezoo",
    role: "Lead coordinator",
    bio: "Visionary leader with 1+ years in digital strategy and business transformation.",
    image: "/images/arezoo.png", // Your photo is already here!
    linkedin: "#",
    twitter: "#",
    email: "ariel@businesshub.com",
  },
];

export default function BuiltBy() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 bg-bh-black border-t border-bh-white/5">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="mb-16 md:mb-20">
          <span className="inline-block text-bh-red font-heading text-xs uppercase tracking-[0.3em] mb-4">
            Our Team
          </span>
          <h2 className="font-heading text-4xl md:text-6xl lg:text-7xl text-bh-white font-bold leading-[1.05]">
            The people behind BH
          </h2>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group relative bg-bh-black border border-bh-white/10 p-8 hover:border-bh-red/30 transition-all duration-500"
            >
              {/* Profile Image */}
              <div className="relative w-20 h-20 mb-6 overflow-hidden rounded-full bg-bh-white/5">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>

              {/* Name & Role */}
              <h3 className="font-heading text-xl text-bh-white mb-2">
                {member.name}
              </h3>
              <p className="font-heading text-sm uppercase tracking-wider text-bh-red mb-4">
                {member.role}
              </p>

              {/* Bio */}
              <p className="font-body text-sm text-bh-ivory/60 leading-relaxed mb-6">
                {member.bio}
              </p>

              {/* Social Links */}
              <div className="flex items-center gap-3">
                <a
                  href={member.linkedin}
                  className="w-8 h-8 flex items-center justify-center rounded-full border border-bh-white/10 text-bh-ivory/40 hover:text-bh-red hover:border-bh-red/30 transition-all duration-300"
                  aria-label={`${member.name} LinkedIn`}
                >
                  <Globe className="w-4 h-4" />
                </a>
                <a
                  href={member.twitter}
                  className="w-8 h-8 flex items-center justify-center rounded-full border border-bh-white/10 text-bh-ivory/40 hover:text-bh-red hover:border-bh-red/30 transition-all duration-300"
                  aria-label={`${member.name} Twitter`}
                >
                  <Camera className="w-4 h-4" />
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
      </div>
    </section>
  );
}