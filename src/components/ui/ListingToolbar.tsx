"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState, useTransition, useCallback } from "react";
import { Search, ArrowUpDown, LayoutGrid } from "lucide-react";

export interface SortOption {
  value: string;
  label: string;
}

interface ListingToolbarProps {
  categories: string[];
  sortOptions: SortOption[];
  searchPlaceholder?: string;
  resultCount: number;
}

export default function ListingToolbar({
  categories,
  sortOptions,
  searchPlaceholder = "Search...",
  resultCount,
}: ListingToolbarProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();

  const activeCategory = searchParams.get("category") || "All";
  const activeSort = searchParams.get("sort") || sortOptions[0]?.value || "newest";
  const queryParam = searchParams.get("q") || "";

  const [searchValue, setSearchValue] = useState(queryParam);

  // Sync local input state if the URL changes externally (e.g., browser back button)
  useEffect(() => {
    setSearchValue(queryParam);
  }, [queryParam]);

  // Debounce pushing the search term into the URL
  useEffect(() => {
    if (searchValue === queryParam) return;
    
    const timer = setTimeout(() => {
      updateParams({ q: searchValue });
    }, 400); // 400ms debounce for a smoother, premium feel
    
    return () => clearTimeout(timer);
  }, [searchValue, queryParam]); 

  const updateParams = useCallback((updates: Record<string, string>) => {
    const params = new URLSearchParams(Array.from(searchParams.entries()));
    for (const [key, value] of Object.entries(updates)) {
      const isEmpty = value === "" || value === "All" || value === "newest";
      if (isEmpty) params.delete(key);
      else params.set(key, value);
    }
    
    // Reset to page 1 when filters change
    params.delete("page");

    const queryString = params.toString();
    startTransition(() => {
      router.replace(queryString ? `${pathname}?${queryString}` : pathname, {
        scroll: false,
      });
    });
  }, [pathname, router, searchParams]);

  return (
    <div className="mb-10 flex flex-col gap-6">
      {/* Search + Sort row */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="grow relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-bh-ivory/40 pointer-events-none" size={18} />
          <input
            type="text"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder={searchPlaceholder}
            className="w-full bg-bh-black border border-bh-white/10 text-bh-ivory pl-11 pr-4 py-3 rounded-sm focus:outline-none focus:border-bh-red transition-colors placeholder:text-bh-ivory/30 font-body text-sm"
          />
        </div>

        <div className="relative md:w-64">
          <ArrowUpDown className="absolute left-4 top-1/2 -translate-y-1/2 text-bh-ivory/40 pointer-events-none" size={18} />
          <select
            value={activeSort}
            onChange={(e) => updateParams({ sort: e.target.value })}
            className="w-full appearance-none bg-bh-black border border-bh-white/10 text-bh-ivory pl-11 pr-10 py-3 rounded-sm focus:outline-none focus:border-bh-red transition-colors cursor-pointer font-body text-sm"
          >
            {sortOptions.map((option) => (
              <option key={option.value} value={option.value} className="bg-bh-black text-bh-ivory">
                {option.label}
              </option>
            ))}
          </select>
          {/* Custom dropdown arrow for consistent styling */}
          <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-bh-ivory/40">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
          </div>
        </div>
      </div>

      {/* Category tabs + result count */}
      <div className="flex flex-wrap items-center gap-2 border-b border-bh-white/10 pb-4">
        {categories.map((category) => {
          const isActive = activeCategory === category;
          return (
            <button
              key={category}
              type="button"
              onClick={() => updateParams({ category })}
              className={`px-5 py-2.5 rounded-sm font-heading text-xs uppercase tracking-wider transition-all duration-300 border ${
                isActive
                  ? "text-bh-white border-bh-red bg-bh-red/10"
                  : "text-bh-ivory/60 border-bh-white/10 hover:text-bh-ivory hover:bg-bh-white/5"
              }`}
            >
              {category}
            </button>
          );
        })}

        <div className="ml-auto flex items-center gap-2 text-bh-ivory/40 font-body text-sm">
          <LayoutGrid size={16} />
          <span className="tabular-nums">
            {isPending ? "Updating…" : `${resultCount} ${resultCount === 1 ? "result" : "results"}`}
          </span>
        </div>
      </div>
    </div>
  );
}