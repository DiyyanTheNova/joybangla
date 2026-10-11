import Image from "next/image";
import { Star, ArrowUpRight } from "lucide-react";

interface Listing {
  id: number;
  title: string;
  seller: string;
  price: number;
  category: string;
  rating: number;
  isFeatured: boolean;
  isTopTier: boolean;
  image: string;
}

export default function ListingCard({ listing }: { listing: Listing }) {
  return (
    <div className="group relative bg-bh-black border border-bh-white/10 hover:border-bh-white/30 transition-all duration-300 overflow-hidden flex flex-col h-full">
      
      {/* Image Container */}
      <div className="relative aspect-4/3 overflow-hidden bg-bh-black/50">
        <Image
          src={listing.image}
          alt={listing.title}
          fill
          className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-t from-bh-black via-transparent to-transparent opacity-80" />
        
        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {listing.isTopTier && (
            <span className="px-3 py-1 bg-bh-black/90 border border-bh-white/20 text-[10px] font-heading uppercase tracking-wider text-bh-white backdrop-blur-sm">
              Top Tier
            </span>
          )}
          {listing.isFeatured && (
            <span className="px-3 py-1 bg-bh-gold/90 border border-bh-gold text-[10px] font-heading uppercase tracking-wider text-bh-black backdrop-blur-sm">
              Featured
            </span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[10px] font-heading uppercase tracking-wider text-bh-ivory/40">
            {listing.category}
          </span>
          <div className="flex items-center gap-1">
            <Star className="w-3 h-3 text-bh-gold fill-bh-gold" />
            <span className="text-xs font-heading text-bh-ivory/80">{listing.rating}</span>
          </div>
        </div>

        <h3 className="font-heading text-xl text-bh-white mb-2 leading-tight group-hover:text-bh-red transition-colors">
          {listing.title}
        </h3>
        
        <p className="font-body text-sm text-bh-ivory/60 mb-6">
          {listing.seller}
        </p>

        <div className="mt-auto flex items-center justify-between pt-4 border-t border-bh-white/10">
          <span className="font-heading text-lg text-bh-white">
            ${listing.price}
          </span>
          <button className="flex items-center gap-1 text-xs font-heading uppercase tracking-wider text-bh-ivory/60 hover:text-bh-red transition-colors">
            View Details
            <ArrowUpRight className="w-3 h-3" />
          </button>
        </div>
      </div>
    </div>
  );
}