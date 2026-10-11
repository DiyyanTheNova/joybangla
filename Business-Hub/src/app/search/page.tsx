"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Search as SearchIcon, ArrowLeft, Briefcase, ShoppingBag, Compass } from "lucide-react";

interface SearchResult {
  _type: "job" | "marketplace" | "opportunity";
  _id: string;
  title: string;
  description: string;
  category: string;
  company: string;
  price: string;
  status: string;
  postedAt: string;
}

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(async () => {
      if (query.length > 2) {
        setIsLoading(true);
        try {
          const res = await fetch(`/api/search?q=${encodeURIComponent(query)}`);
          const data = await res.json();
          setResults(data.results || []);
        } catch (error) {
          console.error("Search error:", error);
        } finally {
          setIsLoading(false);
        }
      } else {
        setResults([]);
      }
    }, 300); // 300ms debounce for smooth typing

    return () => clearTimeout(timer);
  }, [query]);

  const getIcon = (type: string) => {
    switch (type) {
      case "job": return Briefcase;
      case "marketplace": return ShoppingBag;
      case "opportunity": return Compass;
      default: return SearchIcon;
    }
  };

  const getLink = (result: SearchResult) => {
    switch (result._type) {
      case "job": return `/jobs`;
      case "marketplace": return `/marketplace`;
      case "opportunity": return `/opportunities`;
      default: return "/";
    }
  };

  return (
    <main className="min-h-screen pt-32 pb-20 px-6 md:px-12 bg-bh-black">
      <div className="max-w-5xl mx-auto">
        <Link href="/" className="font-body text-sm text-bh-ivory/50 hover:text-bh-red transition-colors mb-8 inline-flex items-center gap-2">
          <ArrowLeft size={16} /> Back to Home
        </Link>

        <h1 className="font-heading text-4xl md:text-6xl text-bh-ivory mb-8">
          Global Search
        </h1>

        {/* Search Input */}
        <div className="relative mb-12">
          <SearchIcon className="absolute left-6 top-1/2 -translate-y-1/2 text-bh-ivory/40" size={24} />
          <input 
            type="text" 
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search jobs, marketplace, opportunities..." 
            className="w-full bg-bh-white/5 border border-bh-white/10 text-bh-ivory pl-16 pr-6 py-5 rounded-sm text-lg focus:outline-none focus:border-bh-red transition-colors placeholder:text-bh-ivory/30"
            autoFocus
          />
        </div>

        {/* Results */}
        <div className="space-y-4">
          {isLoading && (
            <div className="text-center py-10 text-bh-ivory/50">Searching ecosystem...</div>
          )}

          {!isLoading && results.length === 0 && query.length > 2 && (
            <div className="text-center py-10 text-bh-ivory/50">No results found for "{query}"</div>
          )}

          {!isLoading && results.map((result) => {
            const Icon = getIcon(result._type);
            return (
              <Link 
                key={result._id} 
                href={getLink(result)}
                className="block p-6 border border-bh-white/10 rounded-sm hover:border-bh-red/50 transition-colors group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-bh-white/5 border border-bh-white/10 rounded-sm text-bh-red">
                    <Icon size={20} strokeWidth={1.5} />
                  </div>
                  <div className="grow">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-[10px] font-heading font-bold uppercase tracking-wider text-bh-ivory/60 border border-bh-white/10 px-2 py-0.5 rounded-sm">
                        {result._type}
                      </span>
                      <span className="font-body text-xs text-bh-ivory/40">{result.company}</span>
                    </div>
                    <h3 className="font-heading text-xl text-bh-ivory group-hover:text-bh-white transition-colors">
                      {result.title}
                    </h3>
                    <p className="font-body text-sm text-bh-ivory/60 mt-2 line-clamp-2">
                      {result.description}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </main>
  );
}