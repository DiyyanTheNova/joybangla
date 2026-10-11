import Link from "next/link";
import { ArrowUpRight, Star, Building2 } from "lucide-react";
import { safeFetch } from "@/lib/sanity";
import { marketplaceQuery } from "@/lib/queries";
import { filterListings, sortListings } from "@/lib/listings";
import ListingToolbar from "@/components/ui/ListingToolbar";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Marketplace | Business Hub",
  description: "Browse premium listings, digital products, and professional services from verified businesses on Business Hub.",
};

interface Listing {
  _id: string;
  _createdAt: string;
  title: string;
  seller: string;
  category: string;
  price: string;
  rating: number;
  featured: boolean;
  description?: string;
}

const categories = ["All", "Software", "Design Assets", "Consulting", "Hardware", "Services"];

const sortOptions = [
  { value: "newest", label: "Newest first" },
  { value: "oldest", label: "Oldest first" },
  { value: "price-high", label: "Price (high–low)" },
  { value: "price-low", label: "Price (low–high)" },
  { value: "rating-high", label: "Top rated" },
  { value: "title-asc", label: "Title (A–Z)" },
];

// Server Component: fetch from Sanity, then filter/sort based on URL params.
export default async function MarketplacePage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;
  const query = typeof params.q === "string" ? params.q : "";
  const category = typeof params.category === "string" ? params.category : "All";
  const sort = typeof params.sort === "string" ? params.sort : "newest";

  const listings = await safeFetch<Listing>(marketplaceQuery);

  const filtered = sortListings(
    filterListings(listings, query, category, ["title", "seller", "description"], "category"),
    sort,
    "_createdAt",
    "title",
    "price",
    "rating",
  );

  return (
    <main className="min-h-screen pt-32 pb-20 px-6 md:px-12 bg-bh-black">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="mb-12">
          <Link href="/" className="font-body text-sm text-bh-ivory/50 hover:text-bh-red transition-colors mb-4 inline-block">
            &larr; Back to Home
          </Link>
          <h1 className="font-heading text-4xl md:text-6xl text-bh-ivory mb-4">
            Marketplace
          </h1>
          <p className="font-body text-lg text-bh-ivory/60 max-w-2xl">
            Browse premium listings, digital products, and professional services from verified businesses.
          </p>
        </div>

        {/* Search, Sort & Filters */}
        <ListingToolbar
          categories={categories}
          sortOptions={sortOptions}
          searchPlaceholder="Search products, services, sellers..."
          resultCount={filtered.length}
        />

        {/* Listings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.length === 0 ? (
            <div className="col-span-full text-center py-20 text-bh-ivory/50 font-body">
              {listings.length === 0
                ? "No listings posted yet. Check back soon!"
                : "No listings match your search. Try a different keyword or filter."}
            </div>
          ) : (
            filtered.map((item) => (
              <Link
                key={item._id}
                href={`/marketplace/${item._id}`}
                className="group bg-bh-black border border-bh-white/10 p-6 flex flex-col transition-all duration-300 hover:border-bh-red/50 hover:-translate-y-1 rounded-sm"
              >
                {/* Top Meta */}
                <div className="flex justify-between items-start mb-6">
                  <span className="inline-block py-1 px-2 text-[10px] font-heading font-bold tracking-wider uppercase text-bh-ivory/60 border border-bh-white/10 rounded-sm">
                    {item.category || "General"}
                  </span>
                  {item.featured && (
                    <span className="inline-block py-1 px-2 text-[10px] font-heading font-bold tracking-wider uppercase text-bh-gold border border-bh-gold/30 bg-bh-gold/10 rounded-sm">
                      Featured
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="grow">
                  <h3 className="font-heading text-xl text-bh-ivory mb-2 group-hover:text-bh-white transition-colors">
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-2 mb-4">
                    <Building2 size={14} className="text-bh-ivory/50" />
                    <p className="font-body text-sm text-bh-ivory/60">{item.seller || "Unknown Seller"}</p>
                  </div>
                  
                  {/* Rating */}
                  {item.rating && (
                    <div className="flex items-center gap-1 mb-6">
                      <Star size={14} className="text-bh-gold fill-bh-gold" />
                      <span className="font-body text-sm text-bh-ivory/80">{item.rating}</span>
                    </div>
                  )}
                </div>

                {/* Footer / Price */}
                <div className="flex items-center justify-between pt-6 border-t border-bh-white/10">
                  <span className="font-heading text-lg text-bh-red font-bold">{item.price || "Contact"}</span>
                  <div className="w-8 h-8 flex items-center justify-center border border-bh-white/10 rounded-sm text-bh-ivory/40 group-hover:border-bh-red group-hover:text-bh-red transition-all">
                    <ArrowUpRight size={16} strokeWidth={1.5} />
                  </div>
                </div>
              </Link>
            ))
          )}
        </div>

      </div>
    </main>
  );
}