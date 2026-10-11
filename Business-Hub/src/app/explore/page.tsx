"use client";

import { useState } from "react";
import { Search, Filter, Briefcase, ShoppingBag, TrendingUp, BookOpen } from "lucide-react";
import Button from "@/components/ui/Button";

// Mock Data for Demonstration
const listings = [
  { id: 1, title: "Senior Product Designer", category: "Jobs", company: "TechVentures Ltd", location: "Dhaka (Hybrid)", type: "Full-time", posted: "2 days ago" },
  { id: 2, title: "E-commerce UI Kit", category: "Marketplace", company: "DesignStudio", location: "Digital Product", type: "Template", posted: "5 hours ago" },
  { id: 3, title: "Seed Funding for Agritech", category: "Opportunities", company: "GreenFuture VC", location: "Remote", type: "Investment", posted: "1 day ago" },
  { id: 4, title: "2024 Digital Economy Report", category: "Research", company: "BH Archive", location: "Document", type: "PDF", posted: "1 week ago" },
  { id: 5, title: "Frontend Developer", category: "Jobs", company: "ScaleUp Agency", location: "Remote", type: "Contract", posted: "3 days ago" },
  { id: 6, title: "Brand Strategy Workshop", category: "Opportunities", company: "Independent", location: "Dhaka", type: "Event", posted: "4 days ago" },
];

const categories = [
  { name: "All", icon: null },
  { name: "Jobs", icon: Briefcase },
  { name: "Marketplace", icon: ShoppingBag },
  { name: "Opportunities", icon: TrendingUp },
  { name: "Research", icon: BookOpen },
];

export default function ExplorePage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredListings = listings.filter((item) => {
    const matchesCategory = activeCategory === "All" || item.category === activeCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.company.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-bh-black text-bh-ivory pt-32 pb-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        
        {/* Page Header */}
        <div className="mb-12">
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-bh-white mb-4">
            Explore the Ecosystem
          </h1>
          <p className="font-body text-bh-ivory/60 text-lg max-w-2xl">
            Discover verified jobs, premium marketplace items, strategic opportunities, and deep-dive research.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="flex flex-col md:flex-row gap-4 mb-12">
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-bh-ivory/40" />
            <input
              type="text"
              placeholder="Search jobs, listings, or research..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-bh-black border border-bh-white/10 text-bh-ivory placeholder:text-bh-ivory/30 focus:border-bh-red focus:outline-none transition-colors rounded-sm"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-bh-ivory/40 hover:text-bh-white transition-colors md:hidden">
              <Filter className="w-5 h-5" />
            </button>
          </div>

          {/* Category Filters */}
          <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat.name}
                onClick={() => setActiveCategory(cat.name)}
                className={`flex items-center gap-2 px-5 py-4 border rounded-sm font-heading text-sm uppercase tracking-wider whitespace-nowrap transition-all duration-300 ${
                  activeCategory === cat.name
                    ? "bg-bh-red border-bh-red text-bh-white"
                    : "bg-bh-black border-bh-white/10 text-bh-ivory/60 hover:border-bh-white/30 hover:text-bh-white"
                }`}
              >
                {cat.icon && <cat.icon className="w-4 h-4" />}
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Results Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredListings.length > 0 ? (
            filteredListings.map((item) => (
              <div
                key={item.id}
                className="group bg-bh-black border border-bh-white/10 hover:border-bh-red/50 transition-all duration-300 p-6 rounded-sm cursor-pointer"
              >
                {/* Category Badge */}
                <span className="inline-block px-3 py-1 bg-bh-white/5 border border-bh-white/10 text-[10px] font-heading uppercase tracking-wider text-bh-ivory/60 mb-4 rounded-sm">
                  {item.category}
                </span>

                {/* Title & Company */}
                <h3 className="font-heading text-xl text-bh-white mb-2 group-hover:text-bh-red transition-colors">
                  {item.title}
                </h3>
                <p className="font-body text-sm text-bh-ivory/60 mb-4">{item.company}</p>

                {/* Meta Info */}
                <div className="flex items-center justify-between pt-4 border-t border-bh-white/5">
                  <div className="flex items-center gap-4 text-xs text-bh-ivory/40 font-body">
                    <span>{item.location}</span>
                    <span>•</span>
                    <span>{item.type}</span>
                  </div>
                  <span className="text-xs text-bh-ivory/40 font-body">{item.posted}</span>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full py-24 text-center border border-dashed border-bh-white/10 rounded-sm">
              <p className="font-heading text-bh-ivory/40 text-lg">No results found matching your criteria.</p>
              <button 
                onClick={() => {setActiveCategory("All"); setSearchQuery("");}}
                className="mt-4 text-bh-red font-heading text-sm uppercase tracking-wider hover:underline"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>

        {/* Load More */}
        {filteredListings.length > 0 && (
          <div className="mt-16 text-center">
            <Button variant="secondary" size="lg">Load More Results</Button>
          </div>
        )}
      </div>
    </main>
  );
}