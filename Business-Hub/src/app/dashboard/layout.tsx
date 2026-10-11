"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Briefcase, Bookmark, Settings, LogOut, Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { name: "Overview", href: "/dashboard", icon: LayoutDashboard },
  { name: "Saved Jobs", href: "/dashboard/saved-jobs", icon: Bookmark },
  { name: "Applications", href: "/dashboard/applications", icon: Briefcase },
  { name: "Settings", href: "/dashboard/settings", icon: Settings },
];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-bh-black text-bh-ivory flex">
      
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-bh-black/80 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed md:sticky top-0 left-0 z-50 h-screen w-64 bg-bh-black border-r border-bh-white/10 
        transform transition-transform duration-300 ease-in-out
        ${isSidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
      `}>
        <div className="flex flex-col h-full">
          {/* Logo Area */}
          <div className="p-6 border-b border-bh-white/10 flex items-center justify-between">
            <Link href="/" className="font-heading text-xl font-bold text-bh-white tracking-tight">
              Business<span className="text-bh-red">Hub</span>
            </Link>
            <button onClick={() => setIsSidebarOpen(false)} className="md:hidden text-bh-ivory/60">
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-2">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center gap-3 px-4 py-3 rounded-sm font-body text-sm transition-all duration-200 ${
                    isActive 
                      ? "bg-bh-red/10 text-bh-red border-l-2 border-bh-red" 
                      : "text-bh-ivory/60 hover:text-bh-white hover:bg-bh-white/5"
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Logout */}
          <div className="p-4 border-t border-bh-white/10">
            <button className="flex items-center gap-3 px-4 py-3 w-full rounded-sm font-body text-sm text-bh-ivory/60 hover:text-bh-red hover:bg-bh-white/5 transition-all duration-200">
              <LogOut className="w-5 h-5" />
              Sign Out
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-h-screen">
        {/* Top Bar (Mobile Menu Trigger & User Info) */}
        <header className="sticky top-0 z-30 bg-bh-black/80 backdrop-blur-md border-b border-bh-white/10 px-6 py-4 flex items-center justify-between md:justify-end">
          <button 
            onClick={() => setIsSidebarOpen(true)} 
            className="md:hidden text-bh-ivory/60 hover:text-bh-white"
          >
            <Menu className="w-6 h-6" />
          </button>
          
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 rounded-full bg-bh-red/20 border border-bh-red/30 flex items-center justify-center">
              <span className="font-heading text-xs text-bh-red">JD</span>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="flex-1 p-6 md:p-10 overflow-y-auto">
          {children}
        </div>
      </main>
    </div>
  );
}