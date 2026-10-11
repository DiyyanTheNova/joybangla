"use client";

import { useState } from "react";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { 
  LayoutDashboard, 
  Activity, 
  ShoppingBag, 
  Settings, 
  LogOut, 
  TrendingUp, 
  Heart, 
  FileText,
  ArrowUpRight,
  CheckCircle2,
  Clock
} from "lucide-react";
import ProtectedRoute from "@/components/ProtectedRoute";

// Mock Data for "What I Did" (Activity)
const recentActivity = [
  { id: 1, action: "Applied to", target: "Senior Product Designer", company: "Apex Innovations", time: "2 hours ago", icon: FileText },
  { id: 2, action: "Published", target: "Premium UI Kit", company: "Your Listing", time: "1 day ago", icon: TrendingUp },
  { id: 3, action: "Saved", target: "Strategic Partnership", company: "Vertex Capital", time: "2 days ago", icon: Heart },
];

// Mock Data for "Past Orders / Applications"
const pastOrders = [
  { id: "ORD-001", title: "Enterprise SaaS Boilerplate", type: "Purchase", status: "Completed", date: "Oct 12, 2026", price: "$499" },
  { id: "APP-042", title: "Head of Growth", type: "Application", status: "Interviewing", date: "Oct 10, 2026", price: "-" },
  { id: "ORD-002", title: "SEO Strategy Audit", type: "Purchase", status: "In Progress", date: "Oct 05, 2026", price: "$800" },
  { id: "APP-039", title: "UX Researcher", type: "Application", status: "Rejected", date: "Sep 28, 2026", price: "-" },
];

export default function DashboardPage() {
  const { data: session } = useSession();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<"overview" | "activity" | "orders" | "settings">("overview");

  const tabs = [
    { id: "overview", label: "Overview", icon: LayoutDashboard },
    { id: "activity", label: "My Activity", icon: Activity },
    { id: "orders", label: "Orders & Applications", icon: ShoppingBag },
    { id: "settings", label: "Settings", icon: Settings },
  ];

  return (
    <ProtectedRoute>
      <main className="min-h-screen pt-32 pb-20 px-6 md:px-12 bg-bh-black">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">
          
          {/* Sidebar Navigation */}
          <aside className="w-full lg:w-64 shrink-0">
            <div className="p-6 border border-bh-white/10 rounded-sm bg-bh-white/5 mb-6">
              <div className="w-12 h-12 bg-bh-red/10 border border-bh-red/30 rounded-sm flex items-center justify-center text-bh-red font-heading text-xl font-bold mb-4">
                {session?.user?.name?.charAt(0) || "U"}
              </div>
              <h2 className="font-heading text-lg text-bh-ivory">{session?.user?.name || "User"}</h2>
              <p className="font-body text-xs text-bh-ivory/50 truncate">{session?.user?.email}</p>
            </div>

            <nav className="flex flex-col gap-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-sm font-heading text-sm uppercase tracking-wider transition-all text-left ${
                    activeTab === tab.id
                      ? "bg-bh-red/10 text-bh-red border border-bh-red/30"
                      : "text-bh-ivory/60 hover:text-bh-ivory hover:bg-bh-white/5 border border-transparent"
                  }`}
                >
                  <tab.icon size={18} strokeWidth={1.5} />
                  {tab.label}
                </button>
              ))}
              
              <button 
                onClick={() => signOut({ callbackUrl: "/" })} 
                className="flex items-center gap-3 px-4 py-3 rounded-sm font-heading text-sm uppercase tracking-wider text-bh-ivory/40 hover:text-bh-red hover:bg-bh-red/5 border border-transparent transition-all mt-4 text-left"
              >
                <LogOut size={18} strokeWidth={1.5} />
                Sign Out
              </button>
            </nav>
          </aside>

          {/* Main Content Area */}
          <div className="grow">
            
            {/* OVERVIEW TAB */}
            {activeTab === "overview" && (
              <div className="space-y-8">
                <h1 className="font-heading text-3xl text-bh-ivory">Dashboard Overview</h1>
                
                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="p-6 border border-bh-white/10 rounded-sm bg-bh-white/5">
                    <Activity className="text-bh-red mb-4" size={24} />
                    <h3 className="font-heading text-2xl text-bh-ivory mb-1">12</h3>
                    <p className="font-body text-sm text-bh-ivory/60">Active Applications</p>
                  </div>
                  <div className="p-6 border border-bh-white/10 rounded-sm bg-bh-white/5">
                    <Heart className="text-bh-red mb-4" size={24} />
                    <h3 className="font-heading text-2xl text-bh-ivory mb-1">8</h3>
                    <p className="font-body text-sm text-bh-ivory/60">Saved Listings</p>
                  </div>
                  <div className="p-6 border border-bh-white/10 rounded-sm bg-bh-white/5">
                    <FileText className="text-bh-red mb-4" size={24} />
                    <h3 className="font-heading text-2xl text-bh-ivory mb-1">3</h3>
                    <p className="font-body text-sm text-bh-ivory/60">Published Posts</p>
                  </div>
                </div>

                {/* Quick Links */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Link href="/create" className="p-8 border border-bh-white/10 hover:border-bh-red/50 rounded-sm group transition-colors">
                    <h3 className="font-heading text-xl text-bh-ivory mb-2 group-hover:text-bh-white">Create New Listing</h3>
                    <p className="font-body text-sm text-bh-ivory/60">Publish a job, opportunity, or marketplace item.</p>
                  </Link>
                  <Link href="/explore" className="p-8 border border-bh-white/10 hover:border-bh-red/50 rounded-sm group transition-colors">
                    <h3 className="font-heading text-xl text-bh-ivory mb-2 group-hover:text-bh-white">Explore Ecosystem</h3>
                    <p className="font-body text-sm text-bh-ivory/60">Discover new opportunities and businesses.</p>
                  </Link>
                </div>
              </div>
            )}

            {/* ACTIVITY TAB (What I Did) */}
            {activeTab === "activity" && (
              <div className="space-y-6">
                <h1 className="font-heading text-3xl text-bh-ivory">My Activity</h1>
                <div className="flex flex-col border-t border-bh-white/10">
                  {recentActivity.map((item) => (
                    <div key={item.id} className="flex items-center justify-between py-6 border-b border-bh-white/10 group">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 flex items-center justify-center bg-bh-white/5 border border-bh-white/10 rounded-sm text-bh-ivory/60 group-hover:text-bh-red group-hover:border-bh-red/30 transition-colors">
                          <item.icon size={18} />
                        </div>
                        <div>
                          <p className="font-body text-bh-ivory">
                            <span className="text-bh-ivory/60">{item.action}</span> <span className="text-bh-ivory font-medium">{item.target}</span>
                          </p>
                          <p className="font-body text-xs text-bh-ivory/40 mt-1">{item.company} • {item.time}</p>
                        </div>
                      </div>
                      <ArrowUpRight size={16} className="text-bh-ivory/20 group-hover:text-bh-red transition-colors" />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ORDERS & APPLICATIONS TAB (Past Orders) */}
            {activeTab === "orders" && (
              <div className="space-y-6">
                <h1 className="font-heading text-3xl text-bh-ivory">Orders & Applications</h1>
                
                <div className="border border-bh-white/10 rounded-sm overflow-hidden">
                  {/* Table Header */}
                  <div className="hidden md:grid grid-cols-12 gap-4 p-4 bg-bh-white/5 border-b border-bh-white/10 font-heading text-xs uppercase tracking-wider text-bh-ivory/60">
                    <div className="col-span-4">Item</div>
                    <div className="col-span-2">Type</div>
                    <div className="col-span-2">Status</div>
                    <div className="col-span-2">Date</div>
                    <div className="col-span-2 text-right">Value</div>
                  </div>

                  {/* Table Rows */}
                  {pastOrders.map((order) => (
                    <div key={order.id} className="grid grid-cols-1 md:grid-cols-12 gap-4 p-4 md:p-6 border-b border-bh-white/10 last:border-0 hover:bg-bh-white/5 transition-colors items-center">
                      <div className="col-span-4">
                        <p className="font-heading text-bh-ivory">{order.title}</p>
                        <p className="font-body text-xs text-bh-ivory/40 md:hidden mt-1">{order.date}</p>
                      </div>
                      <div className="col-span-2">
                        <span className="font-body text-xs text-bh-ivory/60 bg-bh-white/5 px-2 py-1 rounded-sm border border-bh-white/10">
                          {order.type}
                        </span>
                      </div>
                      <div className="col-span-2">
                        <div className="flex items-center gap-2">
                          {order.status === "Completed" && <CheckCircle2 size={14} className="text-green-500" />}
                          {order.status === "In Progress" || order.status === "Interviewing" && <Clock size={14} className="text-bh-gold" />}
                          {order.status === "Rejected" && <div className="w-2 h-2 bg-bh-red rounded-full" />}
                          <span className={`font-body text-xs ${
                            order.status === "Completed" ? "text-green-500" :
                            order.status === "Rejected" ? "text-bh-red" : "text-bh-gold"
                          }`}>
                            {order.status}
                          </span>
                        </div>
                      </div>
                      <div className="col-span-2 hidden md:block">
                        <span className="font-body text-xs text-bh-ivory/60">{order.date}</span>
                      </div>
                      <div className="col-span-2 text-right">
                        <span className="font-heading text-bh-ivory">{order.price}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* SETTINGS TAB */}
            {activeTab === "settings" && (
              <div className="space-y-6">
                <h1 className="font-heading text-3xl text-bh-ivory">Account Settings</h1>
                <div className="p-8 border border-bh-white/10 rounded-sm bg-bh-white/5 space-y-6">
                  <div>
                    <label className="font-heading text-xs uppercase tracking-wider text-bh-ivory/70 block mb-2">Full Name</label>
                    <input type="text" defaultValue={session?.user?.name || ""} className="w-full bg-bh-black border border-bh-white/10 text-bh-ivory px-4 py-3 rounded-sm focus:outline-none focus:border-bh-red" />
                  </div>
                  <div>
                    <label className="font-heading text-xs uppercase tracking-wider text-bh-ivory/70 block mb-2">Email Address</label>
                    <input type="email" defaultValue={session?.user?.email || ""} className="w-full bg-bh-black border border-bh-white/10 text-bh-ivory px-4 py-3 rounded-sm focus:outline-none focus:border-bh-red" />
                  </div>
                  <div>
                    <label className="font-heading text-xs uppercase tracking-wider text-bh-ivory/70 block mb-2">Bio / Company Description</label>
                    <textarea rows={4} className="w-full bg-bh-black border border-bh-white/10 text-bh-ivory px-4 py-3 rounded-sm focus:outline-none focus:border-bh-red resize-none" placeholder="Tell the ecosystem about yourself..." />
                  </div>
                  <button className="bg-bh-red text-bh-white px-6 py-3 rounded-sm font-heading text-sm uppercase tracking-wider hover:bg-bh-red/90 transition-colors">
                    Save Changes
                  </button>
                </div>
              </div>
            )}

          </div>
        </div>
      </main>
    </ProtectedRoute>
  );
}