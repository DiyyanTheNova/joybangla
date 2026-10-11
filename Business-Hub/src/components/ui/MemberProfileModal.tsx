"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Award, Briefcase, TrendingUp, Clock, Star, ExternalLink, Download, Mail, MapPin, Calendar, BarChart3, CheckCircle, Globe } from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";
import AnimatedCounter from "./AnimatedCounter";
import Image from "next/image";

interface MemberData {
  name: string;
  role: string;
  company: string;
  followers: string;
  projects: number;
  rating: number;
  image: string;
  skills: string[];
  availability: string;
  bio: string;
  location: string;
  memberSince: string;
  totalHours: number;
  completedProjects: number;
  ongoingProjects: number;
  hourlyRate: string;
  responseTime: string;
  languages: string[];
  workDistribution: { name: string; value: number; color: string }[];
  recentWorks: { title: string; type: string; image: string; year: string; client: string }[];
  testimonials: { text: string; author: string; company: string; rating: number }[];
  certifications: string[];
  education: string;
}

interface MemberProfileModalProps {
  member: MemberData | null;
  onClose: () => void;
}

export default function MemberProfileModal({ member, onClose }: MemberProfileModalProps) {
  if (!member) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-200 bg-bh-black/95 backdrop-blur-xl overflow-y-auto"
        onClick={onClose}
      >
        {/* FIXED: Added heavy top padding (pt-32 / md:pt-40) to completely clear the fixed header */}
        <div className="min-h-screen pt-32 pb-12 px-6 md:pt-40 md:pb-16 md:px-12">
          <div className="max-w-7xl mx-auto">
            
            {/* Close Button */}
            <button
              onClick={onClose}
              className="fixed top-6 right-6 w-12 h-12 flex items-center justify-center bg-bh-black border border-bh-white/10 hover:border-bh-red text-bh-ivory hover:text-bh-white transition-all duration-300 z-201 rounded-sm"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Profile Header - Full Width */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12"
            >
              {/* Left: Profile Image & Quick Actions */}
              <div className="lg:col-span-4 space-y-6">
                <div className="relative aspect-4/5 overflow-hidden border border-bh-white/10 rounded-sm">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-bh-black via-transparent to-transparent" />
                  
                  {/* Availability Badge */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className={`block w-full py-3 text-center text-xs font-heading uppercase tracking-wider rounded-sm ${
                      member.availability.includes("Available") 
                        ? "bg-bh-red text-white" 
                        : "bg-bh-black/90 text-bh-ivory border border-bh-white/10"
                    }`}>
                      {member.availability}
                    </span>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="grid grid-cols-2 gap-3">
                  <button className="flex items-center justify-center gap-2 py-3 bg-bh-red text-white font-heading text-xs uppercase tracking-wider hover:bg-bh-red/90 transition-colors rounded-sm">
                    <Mail className="w-4 h-4" />
                    Contact
                  </button>
                  <button className="flex items-center justify-center gap-2 py-3 bg-bh-black border border-bh-white/10 text-bh-ivory hover:border-bh-white/30 transition-colors rounded-sm">
                    <Download className="w-4 h-4" />
                    Resume
                  </button>
                </div>
              </div>

              {/* Right: Profile Info */}
              <div className="lg:col-span-8 space-y-6">
                <div>
                  <h1 className="font-heading text-4xl md:text-5xl text-bh-white font-bold mb-2">
                    {member.name}
                  </h1>
                  <p className="font-body text-xl text-bh-red mb-1">{member.role}</p>
                  <p className="font-body text-bh-ivory/60">{member.company}</p>
                </div>

                <p className="font-body text-bh-ivory/80 leading-relaxed text-lg">
                  {member.bio}
                </p>

                {/* Key Info Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-6 border-y border-bh-white/10">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-bh-gold shrink-0 mt-0.5" />
                    <div>
                      <p className="font-heading text-sm text-bh-white">{member.location}</p>
                      <p className="text-xs text-bh-ivory/40">Location</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-bh-gold shrink-0 mt-0.5" />
                    <div>
                      <p className="font-heading text-sm text-bh-white">{member.responseTime}</p>
                      <p className="text-xs text-bh-ivory/40">Response Time</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Briefcase className="w-5 h-5 text-bh-gold shrink-0 mt-0.5" />
                    <div>
                      <p className="font-heading text-sm text-bh-white">{member.hourlyRate}</p>
                      <p className="text-xs text-bh-ivory/40">Hourly Rate</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-bh-gold shrink-0 mt-0.5" />
                    <div>
                      <p className="font-heading text-sm text-bh-white">{member.memberSince}</p>
                      <p className="text-xs text-bh-ivory/40">Member Since</p>
                    </div>
                  </div>
                </div>

                {/* Skills */}
                <div>
                  <h3 className="font-heading text-sm uppercase tracking-wider text-bh-ivory/40 mb-3">Skills & Expertise</h3>
                  <div className="flex flex-wrap gap-2">
                    {member.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-4 py-2 bg-bh-white/5 border border-bh-white/10 text-bh-ivory font-body text-sm rounded-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Languages */}
                <div>
                  <h3 className="font-heading text-sm uppercase tracking-wider text-bh-ivory/40 mb-3">Languages</h3>
                  <div className="flex flex-wrap gap-2">
                    {member.languages.map((lang) => (
                      <span
                        key={lang}
                        className="flex items-center gap-2 px-3 py-1.5 bg-bh-white/5 border border-bh-white/10 text-bh-ivory/70 font-body text-sm rounded-sm"
                      >
                        <Globe className="w-3 h-3" />
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Statistics Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12"
            >
              {/* Work Distribution Chart */}
              <div className="lg:col-span-1 p-8 border border-bh-white/10 rounded-sm bg-bh-black">
                <h3 className="font-heading text-xl text-bh-white mb-6 flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-bh-red" />
                  Work Distribution
                </h3>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={member.workDistribution}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={100}
                        paddingAngle={5}
                        dataKey="value"
                        animationBegin={0}
                        animationDuration={1500}
                      >
                        {member.workDistribution.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} stroke="none" />
                        ))}
                      </Pie>
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "#111111",
                          border: "1px solid #FFFFFF20",
                          borderRadius: "4px",
                        }}
                        itemStyle={{ color: "#F2EDE3" }}
                      />
                      <Legend 
                        verticalAlign="bottom" 
                        height={36}
                        iconType="circle"
                        formatter={(value) => <span className="text-xs text-bh-ivory/60">{value}</span>}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Work Statistics */}
              <div className="lg:col-span-2 p-8 border border-bh-white/10 rounded-sm bg-bh-black">
                <h3 className="font-heading text-xl text-bh-white mb-6 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-bh-red" />
                  Performance Metrics
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-6">
                    <div>
                      <div className="flex items-baseline justify-between mb-2">
                        <span className="text-bh-ivory/60 text-sm">Total Hours Worked</span>
                        <AnimatedCounter end={member.totalHours} suffix="h" className="text-2xl" />
                      </div>
                      <div className="h-2 bg-bh-white/5 overflow-hidden rounded-sm">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: "85%" }}
                          transition={{ duration: 1.5, delay: 0.3 }}
                          className="h-full bg-bh-red"
                        />
                      </div>
                    </div>

                    <div>
                      <div className="flex items-baseline justify-between mb-2">
                        <span className="text-bh-ivory/60 text-sm">Completed Projects</span>
                        <AnimatedCounter end={member.completedProjects} className="text-2xl" />
                      </div>
                      <div className="h-2 bg-bh-white/5 overflow-hidden rounded-sm">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: "92%" }}
                          transition={{ duration: 1.5, delay: 0.4 }}
                          className="h-full bg-bh-gold"
                        />
                      </div>
                    </div>

                    <div>
                      <div className="flex items-baseline justify-between mb-2">
                        <span className="text-bh-ivory/60 text-sm">Ongoing Projects</span>
                        <AnimatedCounter end={member.ongoingProjects} className="text-2xl" />
                      </div>
                      <div className="h-2 bg-bh-white/5 overflow-hidden rounded-sm">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: "45%" }}
                          transition={{ duration: 1.5, delay: 0.5 }}
                          className="h-full bg-bh-ivory"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-bh-white/10">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 bg-bh-white/5 border border-bh-white/10 rounded-sm">
                        <CheckCircle className="w-6 h-6 text-bh-gold mb-2" />
                        <p className="font-heading text-2xl text-bh-white mb-1">98%</p>
                        <p className="text-xs text-bh-ivory/40">On-Time Delivery</p>
                      </div>
                      <div className="p-4 bg-bh-white/5 border border-bh-white/10 rounded-sm">
                        <Star className="w-6 h-6 text-bh-gold mb-2" />
                        <p className="font-heading text-2xl text-bh-white mb-1">{member.rating}</p>
                        <p className="text-xs text-bh-ivory/40">Average Rating</p>
                      </div>
                      <div className="p-4 bg-bh-white/5 border border-bh-white/10 rounded-sm">
                        <Award className="w-6 h-6 text-bh-gold mb-2" />
                        <p className="font-heading text-2xl text-bh-white mb-1">{member.certifications.length}</p>
                        <p className="text-xs text-bh-ivory/40">Certifications</p>
                      </div>
                      <div className="p-4 bg-bh-white/5 border border-bh-white/10 rounded-sm">
                        <Briefcase className="w-6 h-6 text-bh-gold mb-2" />
                        <p className="font-heading text-2xl text-bh-white mb-1">{member.projects}</p>
                        <p className="text-xs text-bh-ivory/40">Total Projects</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Recent Works */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-12"
            >
              <h3 className="font-heading text-2xl text-bh-white mb-6">Recent Works</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {member.recentWorks.map((work, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="group cursor-pointer"
                  >
                    <div className="relative aspect-4/3 overflow-hidden border border-bh-white/10 rounded-sm group-hover:border-bh-red/50 transition-colors">
                      <Image
                        src={work.image}
                        alt={work.title}
                        fill
                        className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-bh-black via-bh-black/40 to-transparent" />
                      
                      {/* Work Type Badge */}
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-bh-black/90 border border-bh-white/10 text-xs font-heading uppercase tracking-wider text-bh-ivory rounded-sm">
                          {work.type}
                        </span>
                      </div>

                      {/* External Link */}
                      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                        <ExternalLink className="w-5 h-5 text-bh-white" />
                      </div>

                      {/* Info */}
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <h4 className="font-heading text-lg text-bh-white mb-1 group-hover:text-bh-red transition-colors">
                          {work.title}
                        </h4>
                        <div className="flex items-center justify-between text-sm text-bh-ivory/60">
                          <span>{work.client}</span>
                          <span>{work.year}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Testimonials & Education */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12"
            >
              {/* Testimonials */}
              <div>
                <h3 className="font-heading text-2xl text-bh-white mb-6">Client Testimonials</h3>
                <div className="space-y-4">
                  {member.testimonials.map((testimonial, index) => (
                    <div key={index} className="p-6 border border-bh-white/10 rounded-sm bg-bh-black">
                      <div className="flex items-center gap-1 mb-4">
                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-bh-gold fill-bh-gold" />
                        ))}
                      </div>
                      <p className="font-body text-bh-ivory/80 mb-4 leading-relaxed">
                        "{testimonial.text}"
                      </p>
                      <div>
                        <p className="font-heading text-sm text-bh-white">{testimonial.author}</p>
                        <p className="text-xs text-bh-ivory/40">{testimonial.company}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Education & Certifications */}
              <div>
                <h3 className="font-heading text-2xl text-bh-white mb-6">Education & Certifications</h3>
                <div className="space-y-4">
                  <div className="p-6 border border-bh-white/10 rounded-sm bg-bh-black">
                    <Award className="w-6 h-6 text-bh-gold mb-3" />
                    <h4 className="font-heading text-lg text-bh-white mb-1">Education</h4>
                    <p className="font-body text-bh-ivory/70">{member.education}</p>
                  </div>
                  
                  <div className="p-6 border border-bh-white/10 rounded-sm bg-bh-black">
                    <CheckCircle className="w-6 h-6 text-bh-gold mb-3" />
                    <h4 className="font-heading text-lg text-bh-white mb-3">Certifications</h4>
                    <ul className="space-y-2">
                      {member.certifications.map((cert, index) => (
                        <li key={index} className="flex items-center gap-2 text-bh-ivory/70 font-body">
                          <span className="w-1.5 h-1.5 bg-bh-red rounded-full" />
                          {cert}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="p-8 border border-bh-white/10 rounded-sm bg-linear-to-br from-bh-red/10 to-bh-black text-center"
            >
              <h3 className="font-heading text-2xl text-bh-white mb-4">
                Ready to work with {member.name.split(" ")[0]}?
              </h3>
              <p className="font-body text-bh-ivory/70 mb-6 max-w-2xl mx-auto">
                Start a conversation about your project and see how {member.name.split(" ")[0]} can help bring your vision to life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-bh-red text-white font-heading text-sm uppercase tracking-wider hover:bg-bh-red/90 transition-colors rounded-sm">
                  Send Message
                </button>
                <button className="px-8 py-4 bg-bh-black border border-bh-white/10 text-bh-ivory hover:border-bh-white/30 transition-colors rounded-sm">
                  View Availability
                </button>
              </div>
            </motion.div>

          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}