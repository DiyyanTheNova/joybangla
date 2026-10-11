"use client";

import { motion } from "framer-motion";
import { TrendingUp, Award, Briefcase } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import MemberProfileModal from "@/components/ui/MemberProfileModal";

// --- DEMO DATA: 8 PREMIUM PROFILES ---
const members = [
  {
    name: "Sarah Chen",
    role: "Product Designer",
    company: "TechVentures Ltd",
    followers: "12.5K",
    projects: 24,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
    skills: ["UI/UX", "Brand Strategy", "Product Design"],
    availability: "Available for projects",
    bio: "Award-winning product designer with 8+ years of experience creating digital experiences for Fortune 500 companies. Specialized in user-centered design and scalable design systems.",
    location: "Dhaka, Bangladesh",
    memberSince: "2023",
    totalHours: 3420,
    completedProjects: 22,
    ongoingProjects: 2,
    hourlyRate: "$85-120",
    responseTime: "2 hours",
    languages: ["English", "Bengali", "Mandarin"],
    workDistribution: [
      { name: "UI/UX Design", value: 45, color: "#C1121F" },
      { name: "Brand Strategy", value: 30, color: "#D4AF37" },
      { name: "Consulting", value: 15, color: "#F2EDE3" },
      { name: "Workshops", value: 10, color: "#FFFFFF" },
    ],
    recentWorks: [
      { title: "E-commerce Redesign", type: "Project", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=400&q=80", year: "2024", client: "TechCorp" },
      { title: "Fintech Dashboard", type: "Case Study", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&q=80", year: "2024", client: "FinanceHub" },
      { title: "Mobile App Design", type: "Project", image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=400&q=80", year: "2023", client: "StartupXYZ" },
    ],
    testimonials: [
      { text: "Sarah's design work transformed our product. Her attention to detail and user-centric approach is unmatched.", author: "John Smith", company: "TechCorp CEO", rating: 5 },
      { text: "Exceptional talent. Delivered beyond expectations and on time.", author: "Emily Davis", company: "Product Manager", rating: 5 },
    ],
    certifications: ["Google UX Design", "AWS Certified", "Agile Scrum Master"],
    education: "MFA Design, Parsons School of Design"
  },
  {
    name: "Marcus Johnson",
    role: "Growth Strategist",
    company: "ScaleUp Agency",
    followers: "8.9K",
    projects: 31,
    rating: 5.0,
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80",
    skills: ["Growth Marketing", "SEO", "Analytics"],
    availability: "Open to opportunities",
    bio: "Data-driven growth strategist helping B2B SaaS companies scale from $1M to $10M ARR. Expert in acquisition funnels, retention loops, and performance marketing.",
    location: "Remote / Global",
    memberSince: "2022",
    totalHours: 4150,
    completedProjects: 29,
    ongoingProjects: 2,
    hourlyRate: "$95-150",
    responseTime: "1 hour",
    languages: ["English", "Spanish"],
    workDistribution: [
      { name: "Growth Marketing", value: 50, color: "#C1121F" },
      { name: "SEO & Content", value: 25, color: "#D4AF37" },
      { name: "Analytics", value: 15, color: "#F2EDE3" },
      { name: "Consulting", value: 10, color: "#FFFFFF" },
    ],
    recentWorks: [
      { title: "SaaS Growth Plan", type: "Strategy", image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=400&q=80", year: "2024", client: "CloudBase" },
      { title: "Brand Launch Campaign", type: "Marketing", image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=400&q=80", year: "2024", client: "NovaTech" },
      { title: "SEO Overhaul", type: "Audit", image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=400&q=80", year: "2023", client: "DataFlow" },
    ],
    testimonials: [
      { text: "Marcus increased our MRR by 40% in just 6 months. His strategies are actionable and highly effective.", author: "David Lee", company: "CloudBase Founder", rating: 5 },
      { text: "A true growth hacker. He understands the metrics that actually matter.", author: "Sarah Jenkins", company: "CMO, NovaTech", rating: 5 },
    ],
    certifications: ["Google Analytics", "HubSpot Growth-Driven Design", "Facebook Blueprint"],
    education: "MBA Marketing, Wharton School"
  },
  {
    name: "Aisha Patel",
    role: "Brand Consultant",
    company: "Independent",
    followers: "15.6K",
    projects: 42,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80",
    skills: ["Brand Strategy", "Marketing", "Consulting"],
    availability: "Booked until March",
    bio: "Strategic brand consultant specializing in positioning, messaging, and visual identity for startups and established enterprises. Helping brands find their unique voice.",
    location: "London, UK",
    memberSince: "2021",
    totalHours: 5200,
    completedProjects: 40,
    ongoingProjects: 2,
    hourlyRate: "$110-165",
    responseTime: "4 hours",
    languages: ["English", "Hindi", "Gujarati"],
    workDistribution: [
      { name: "Brand Strategy", value: 40, color: "#C1121F" },
      { name: "Visual Identity", value: 30, color: "#D4AF37" },
      { name: "Workshops", value: 20, color: "#F2EDE3" },
      { name: "Speaking", value: 10, color: "#FFFFFF" },
    ],
    recentWorks: [
      { title: "Luxury Brand Identity", type: "Branding", image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&w=400&q=80", year: "2024", client: "Aura Luxe" },
      { title: "Startup Positioning", type: "Strategy", image: "https://images.unsplash.com/photo-1542744094-24638eff58bb?auto=format&fit=crop&w=400&q=80", year: "2024", client: "FinEdge" },
      { title: "Rebrand Campaign", type: "Marketing", image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=400&q=80", year: "2023", client: "GlobalCorp" },
    ],
    testimonials: [
      { text: "Aisha completely redefined how we talk about our product. The new positioning is incredibly sharp.", author: "Michael Ross", company: "CEO, FinEdge", rating: 5 },
      { text: "Professional, insightful, and deeply creative. A must-have for any serious brand.", author: "Lisa Wang", company: "Director, Aura Luxe", rating: 5 },
    ],
    certifications: ["Brand Strategy Institute", "Digital Marketing Institute"],
    education: "MA Branding, University of the Arts London"
  },
  {
    name: "David Kim",
    role: "Innovation Lead",
    company: "Future Labs",
    followers: "20.3K",
    projects: 18,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80",
    skills: ["Innovation", "Product Strategy", "Leadership"],
    availability: "Available for consulting",
    bio: "Innovation leader and product strategist with a track record of launching category-defining tech products. Passionate about AI, Web3, and the future of work.",
    location: "Seoul, South Korea",
    memberSince: "2023",
    totalHours: 2800,
    completedProjects: 16,
    ongoingProjects: 2,
    hourlyRate: "$120-180",
    responseTime: "3 hours",
    languages: ["English", "Korean", "Japanese"],
    workDistribution: [
      { name: "Product Strategy", value: 45, color: "#C1121F" },
      { name: "Innovation", value: 30, color: "#D4AF37" },
      { name: "Leadership", value: 15, color: "#F2EDE3" },
      { name: "Advisory", value: 10, color: "#FFFFFF" },
    ],
    recentWorks: [
      { title: "AI Product Launch", type: "Product", image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=400&q=80", year: "2024", client: "Future Labs" },
      { title: "Digital Transformation", type: "Consulting", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=400&q=80", year: "2024", client: "TechGiant" },
      { title: "Web3 Strategy", type: "Research", image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=400&q=80", year: "2023", client: "CryptoVentures" },
    ],
    testimonials: [
      { text: "David's vision for our AI product was spot on. He guided us through a complex launch flawlessly.", author: "Jin Park", company: "CTO, Future Labs", rating: 5 },
      { text: "A rare combination of technical depth and business acumen.", author: "Mark Stevens", company: "VP Product", rating: 4 },
    ],
    certifications: ["Certified Scrum Product Owner", "AI Product Management"],
    education: "MS Computer Science, KAIST"
  },
  {
    name: "Elena Rodriguez",
    role: "Digital Creator",
    company: "Creator Studio",
    followers: "45.2K",
    projects: 56,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=400&q=80",
    skills: ["Content Strategy", "Video Production", "Social Media"],
    availability: "Available for projects",
    bio: "Top-tier digital creator and content strategist helping brands tell compelling stories across social platforms. Specialized in short-form video and community building.",
    location: "Madrid, Spain",
    memberSince: "2022",
    totalHours: 3900,
    completedProjects: 54,
    ongoingProjects: 2,
    hourlyRate: "$75-110",
    responseTime: "1 hour",
    languages: ["Spanish", "English", "Portuguese"],
    workDistribution: [
      { name: "Video Production", value: 40, color: "#C1121F" },
      { name: "Content Strategy", value: 35, color: "#D4AF37" },
      { name: "Community", value: 15, color: "#F2EDE3" },
      { name: "Brand Deals", value: 10, color: "#FFFFFF" },
    ],
    recentWorks: [
      { title: "Viral Campaign", type: "Social", image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=400&q=80", year: "2024", client: "FashionBrand" },
      { title: "YouTube Series", type: "Video", image: "https://images.unsplash.com/photo-1492619375914-88005aa9e8ea?auto=format&fit=crop&w=400&q=80", year: "2024", client: "TechReview" },
      { title: "Community Growth", type: "Strategy", image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=400&q=80", year: "2023", client: "StartupHub" },
    ],
    testimonials: [
      { text: "Elena's content strategy doubled our engagement in 3 months. She truly understands the algorithm.", author: "Carlos Mendez", company: "Marketing Dir", rating: 5 },
      { text: "Creative, reliable, and incredibly talented behind the camera.", author: "Anna Kowalski", company: "Brand Manager", rating: 5 },
    ],
    certifications: ["YouTube Creator Academy", "TikTok for Business"],
    education: "BA Communications, Universidad Complutense"
  },
  {
    name: "James Wilson",
    role: "Executive Coach",
    company: "Wilson Coaching",
    followers: "11.4K",
    projects: 38,
    rating: 5.0,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80",
    skills: ["Executive Coaching", "Leadership", "Team Building"],
    availability: "Limited Availability",
    bio: "Certified executive coach working with C-suite leaders and high-performing teams to unlock potential, improve communication, and drive organizational success.",
    location: "New York, USA",
    memberSince: "2021",
    totalHours: 6100,
    completedProjects: 35,
    ongoingProjects: 3,
    hourlyRate: "$150-250",
    responseTime: "6 hours",
    languages: ["English", "French"],
    workDistribution: [
      { name: "1:1 Coaching", value: 50, color: "#C1121F" },
      { name: "Team Workshops", value: 30, color: "#D4AF37" },
      { name: "Speaking", value: 10, color: "#F2EDE3" },
      { name: "Writing", value: 10, color: "#FFFFFF" },
    ],
    recentWorks: [
      { title: "Leadership Retreat", type: "Event", image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=400&q=80", year: "2024", client: "GlobalBank" },
      { title: "Executive 1:1 Program", type: "Coaching", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=400&q=80", year: "2024", client: "TechExecs" },
      { title: "Team Alignment", type: "Workshop", image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=400&q=80", year: "2023", client: "ScaleUp Inc" },
    ],
    testimonials: [
      { text: "James helped me navigate a critical career transition with clarity and confidence. Highly recommended.", author: "Robert Chen", company: "VP Engineering", rating: 5 },
      { text: "Our team's productivity and morale improved drastically after his workshops.", author: "Linda Martinez", company: "HR Director", rating: 5 },
    ],
    certifications: ["ICF Certified Coach", "Hogan Assessment Certified"],
    education: "MBA Organizational Leadership, Columbia Business School"
  },
  {
    name: "Nina Okonjo",
    role: "Strategy Director",
    company: "Apex Consulting",
    followers: "9.8K",
    projects: 27,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=400&q=80",
    skills: ["Operations", "Strategy", "Project Management"],
    availability: "Open to opportunities",
    bio: "Strategic operations director specializing in scaling businesses, optimizing workflows, and leading cross-functional teams in fast-paced environments.",
    location: "Lagos, Nigeria",
    memberSince: "2023",
    totalHours: 3100,
    completedProjects: 25,
    ongoingProjects: 2,
    hourlyRate: "$90-135",
    responseTime: "2 hours",
    languages: ["English", "Yoruba", "Igbo"],
    workDistribution: [
      { name: "Operations", value: 45, color: "#C1121F" },
      { name: "Strategy", value: 35, color: "#D4AF37" },
      { name: "Management", value: 15, color: "#F2EDE3" },
      { name: "Advisory", value: 5, color: "#FFFFFF" },
    ],
    recentWorks: [
      { title: "Operational Overhaul", type: "Consulting", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=400&q=80", year: "2024", client: "RetailCorp" },
      { title: "Growth Strategy", type: "Strategy", image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=400&q=80", year: "2024", client: "FinTech Africa" },
      { title: "Team Scaling", type: "Management", image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=400&q=80", year: "2023", client: "StartupXYZ" },
    ],
    testimonials: [
      { text: "Nina's operational expertise saved us months of trial and error. She is a true professional.", author: "Emeka Okafor", company: "CEO, FinTech Africa", rating: 5 },
      { text: "Exceptional strategic mind. She sees the big picture and executes the details perfectly.", author: "Grace Liu", company: "COO", rating: 5 },
    ],
    certifications: ["PMP Certified", "Lean Six Sigma Black Belt"],
    education: "MBA Strategy, Lagos Business School"
  },
  {
    name: "Alex Thompson",
    role: "Tech Founder",
    company: "BuildScale",
    followers: "18.7K",
    projects: 15,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    skills: ["SaaS", "Fundraising", "Product Management"],
    availability: "Available for advisory",
    bio: "Serial tech founder and SaaS expert. Successfully built and exited two startups. Now advising early-stage founders on product-market fit and fundraising.",
    location: "San Francisco, USA",
    memberSince: "2022",
    totalHours: 2500,
    completedProjects: 12,
    ongoingProjects: 3,
    hourlyRate: "$175-300",
    responseTime: "12 hours",
    languages: ["English"],
    workDistribution: [
      { name: "Advisory", value: 40, color: "#C1121F" },
      { name: "Fundraising", value: 30, color: "#D4AF37" },
      { name: "Product", value: 20, color: "#F2EDE3" },
      { name: "Speaking", value: 10, color: "#FFFFFF" },
    ],
    recentWorks: [
      { title: "Seed Round Advisory", type: "Fundraising", image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=400&q=80", year: "2024", client: "AI Startup" },
      { title: "SaaS MVP Launch", type: "Product", image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=400&q=80", year: "2024", client: "DevTools" },
      { title: "Founder Workshop", type: "Event", image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=400&q=80", year: "2023", client: "Y Combinator" },
    ],
    testimonials: [
      { text: "Alex's advice on our pitch deck directly led to our $2M seed round. Invaluable insight.", author: "Tom Harris", company: "Founder, AI Startup", rating: 5 },
      { text: "He has been there and done it. His practical advice is worth 10x his fee.", author: "Jessica Brown", company: "Co-founder", rating: 5 },
    ],
    certifications: ["Y Combinator Alumni", "500 Startups Mentor"],
    education: "BS Computer Science, Stanford University"
  }
];

export default function FeaturedMembers() {
  const [selectedMember, setSelectedMember] = useState<any>(null);

  return (
    <>
      <section className="py-24 md:py-32 px-6 md:px-12 bg-bh-black border-t border-bh-white/5">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-16 md:mb-24">
            <span className="inline-block text-bh-red font-heading text-xs uppercase tracking-[0.2em] mb-4">
              Community
            </span>
            <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl text-bh-white font-bold leading-[1.1] mb-6">
              Featured Members
            </h2>
            <p className="font-body text-bh-ivory/60 text-lg max-w-2xl">
              Connect with industry leaders, innovators, and creators shaping the future of business.
            </p>
          </div>

          {/* Members Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {members.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group cursor-pointer"
                onClick={() => setSelectedMember(member)}
              >
                <div className="bg-bh-black border border-bh-white/10 hover:border-bh-red/50 transition-all duration-500 overflow-hidden h-full flex flex-col">
                  {/* Profile Image */}
                  <div className="relative aspect-3/4 overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-bh-black via-bh-black/40 to-transparent" />
                    
                    {/* Availability Badge */}
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1.5 text-xs font-heading uppercase tracking-wider backdrop-blur-md ${
                        member.availability.includes("Available") || member.availability.includes("Open")
                          ? "bg-bh-red/90 text-white" 
                          : "bg-bh-black/80 text-bh-ivory/80 border border-bh-white/10"
                      }`}>
                        {member.availability}
                      </span>
                    </div>

                    {/* Rating */}
                    <div className="absolute top-4 right-4 flex items-center gap-1 px-2 py-1 bg-bh-black/80 backdrop-blur-md">
                      <Award className="w-3 h-3 text-bh-gold" />
                      <span className="text-xs font-heading text-bh-white">{member.rating}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="font-heading text-xl text-bh-white mb-1">{member.name}</h3>
                    <p className="font-body text-sm text-bh-red mb-1">{member.role}</p>
                    <p className="font-body text-xs text-bh-ivory/50 mb-4">{member.company}</p>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 mb-4 py-4 border-t border-bh-white/10 mt-auto">
                      <div className="text-center">
                        <TrendingUp className="w-3 h-3 text-bh-gold mx-auto mb-1" />
                        <span className="block font-heading text-sm text-bh-white">{member.followers}</span>
                        <span className="text-[10px] text-bh-ivory/40 uppercase">Followers</span>
                      </div>
                      <div className="text-center border-l border-bh-white/10">
                        <Briefcase className="w-3 h-3 text-bh-gold mx-auto mb-1" />
                        <span className="block font-heading text-sm text-bh-white">{member.projects}</span>
                        <span className="text-[10px] text-bh-ivory/40 uppercase">Projects</span>
                      </div>
                      <div className="text-center border-l border-bh-white/10">
                        <Award className="w-3 h-3 text-bh-gold mx-auto mb-1" />
                        <span className="block font-heading text-sm text-bh-white">{member.rating}</span>
                        <span className="text-[10px] text-bh-ivory/40 uppercase">Rating</span>
                      </div>
                    </div>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {member.skills.slice(0, 3).map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-1 bg-bh-white/5 border border-bh-white/10 text-[10px] text-bh-ivory/60 uppercase tracking-wider"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* View Profile Button */}
                    <button className="w-full py-3 bg-bh-black border border-bh-white/10 hover:border-bh-red hover:bg-bh-red/5 text-bh-white font-heading text-xs uppercase tracking-wider transition-all duration-300 mt-auto">
                      View Full Profile
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Member Profile Modal */}
      <MemberProfileModal 
        member={selectedMember} 
        onClose={() => setSelectedMember(null)} 
      />
    </>
  );
}