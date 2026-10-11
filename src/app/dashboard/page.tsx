"use client";

import { TrendingUp, Bookmark, Briefcase, Clock } from "lucide-react";

// Mock data (Replace with Sanity/DB fetch later)
const stats = [
  { label: "Profile Views", value: "1,240", change: "+12%", icon: TrendingUp, color: "text-bh-gold" },
  { label: "Saved Items", value: "18", change: "+3", icon: Bookmark, color: "text-bh-red" },
  { label: "Active Applications", value: "5", change: "2 pending", icon: Briefcase, color: "text-bh-ivory" },
];

const recentActivity = [
  { id: 1, title: "Senior Product Designer", company: "TechVentures Ltd", type: "Job", time: "2 hours ago", status: "Applied" },
  { id: 2, title: "E-commerce UI Kit", company: "DesignStudio", type: "Marketplace", time: "1 day ago", status: "Saved" },
  { id: 3, title: "Growth Marketing Lead", company: "ScaleUp Agency", type: "Job", time: "3 days ago", status: "Interviewing" },
];

export default function DashboardPage() {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      
      {/* Welcome Header */}
      <div>
        <h1 className="font-heading text-3xl md:text-4xl text-bh-white font-bold mb-2">
          Welcome back, John
        </h1>
        <p className="font-body text-bh-ivory/60">
          Here is what is happening with your account today.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-bh-black border border-bh-white/10 p-6 rounded-sm hover:border-bh-white/20 transition-colors">
            <div className="flex items-center justify-between mb-4">
              <stat.icon className={`w-6 h-6 ${stat.color}`} />
              <span className="text-xs font-heading uppercase tracking-wider text-bh-ivory/40">{stat.label}</span>
            </div>
            <div className="flex items-baseline gap-3">
              <span className="font-heading text-3xl font-bold text-bh-white">{stat.value}</span>
              <span className="text-sm text-bh-gold font-body">{stat.change}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Activity / Saved Items */}
      <div className="bg-bh-black border border-bh-white/10 rounded-sm overflow-hidden">
        <div className="p-6 border-b border-bh-white/10 flex items-center justify-between">
          <h2 className="font-heading text-xl text-bh-white">Recent Activity</h2>
          <button className="text-sm text-bh-red font-heading uppercase tracking-wider hover:underline">
            View All
          </button>
        </div>
        
        <div className="divide-y divide-bh-white/5">
          {recentActivity.map((item) => (
            <div key={item.id} className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-bh-white/2 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-sm bg-bh-white/5 flex items-center justify-center shrink-0">
                  <Briefcase className="w-5 h-5 text-bh-ivory/60" />
                </div>
                <div>
                  <h3 className="font-heading text-bh-white font-medium">{item.title}</h3>
                  <p className="text-sm text-bh-ivory/50">{item.company} • {item.type}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-6 md:justify-end">
                <div className="flex items-center gap-2 text-sm text-bh-ivory/40">
                  <Clock className="w-4 h-4" />
                  {item.time}
                </div>
                <span className={`px-3 py-1 rounded-sm text-xs font-heading uppercase tracking-wider ${
                  item.status === "Applied" ? "bg-bh-red/10 text-bh-red" :
                  item.status === "Saved" ? "bg-bh-white/5 text-bh-ivory/60" :
                  "bg-bh-gold/10 text-bh-gold"
                }`}>
                  {item.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}