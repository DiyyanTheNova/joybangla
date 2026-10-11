import Link from "next/link";
import { ArrowLeft, Star, Building2, Mail, ShieldCheck } from "lucide-react";
import { safeFetchOne } from "@/lib/sanity";
import { marketplaceDetailQuery } from "@/lib/queries";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const listing = await safeFetchOne<any>(marketplaceDetailQuery, { id });
  return {
    title: listing ? `${listing.title} | Business Hub` : "Listing Not Found | Business Hub",
    description: listing?.description || "Premium listing on Business Hub",
  };
}

export default async function ListingDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const listing = await safeFetchOne<any>(marketplaceDetailQuery, { id });

  if (!listing) {
    notFound();
  }

  return (
    <main className="min-h-screen pt-32 pb-20 px-6 md:px-12 bg-bh-black">
      <div className="max-w-5xl mx-auto">
        
        {/* Breadcrumb / Back */}
        <Link href="/marketplace" className="inline-flex items-center gap-2 font-body text-sm text-bh-ivory/50 hover:text-bh-red transition-colors mb-8">
          <ArrowLeft size={16} /> Back to Marketplace
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 text-[10px] font-heading font-bold tracking-wider uppercase text-bh-ivory/60 border border-bh-white/10 rounded-sm">
                  {listing.category || "General"}
                </span>
                {listing.featured && (
                  <span className="px-3 py-1 text-[10px] font-heading font-bold tracking-wider uppercase text-bh-gold border border-bh-gold/30 bg-bh-gold/10 rounded-sm">
                    Featured
                  </span>
                )}
              </div>
              <h1 className="font-heading text-4xl md:text-5xl text-bh-ivory mb-4">{listing.title}</h1>
              <div className="flex items-center gap-4 text-bh-ivory/60 font-body">
                <div className="flex items-center gap-2">
                  <Building2 size={16} />
                  <span>{listing.seller || "Unknown Seller"}</span>
                </div>
                {listing.rating && (
                  <div className="flex items-center gap-1 text-bh-gold">
                    <Star size={16} className="fill-bh-gold" />
                    <span>{listing.rating}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Image */}
            <div className="aspect-video w-full bg-bh-white/5 border border-bh-white/10 rounded-sm flex items-center justify-center overflow-hidden">
              {listing.imageUrl ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={listing.imageUrl} alt={listing.title} className="w-full h-full object-cover" />
              ) : (
                <span className="text-bh-ivory/20 font-heading text-xl">No Image Provided</span>
              )}
            </div>

            {/* Description */}
            <div>
              <h3 className="font-heading text-2xl text-bh-ivory mb-4">Description</h3>
              <p className="font-body text-bh-ivory/70 leading-relaxed whitespace-pre-wrap">
                {listing.description || "No description provided for this listing."}
              </p>
            </div>
          </div>

          {/* Sidebar / CTA */}
          <div className="lg:col-span-1">
            <div className="sticky top-32 bg-bh-black border border-bh-white/10 p-6 rounded-sm space-y-6">
              <div>
                <p className="font-body text-sm text-bh-ivory/50 mb-1">Price</p>
                <p className="font-heading text-3xl text-bh-red font-bold">
                  {typeof listing.price === "number" ? `$${listing.price}` : listing.price || "Contact for Price"}
                </p>
              </div>

              <div className="pt-6 border-t border-bh-white/10 space-y-4">
                <button className="w-full py-4 bg-bh-red text-white font-heading text-sm uppercase tracking-wider hover:bg-bh-red/90 transition-colors rounded-sm flex items-center justify-center gap-2">
                  <Mail size={18} /> Contact Seller
                </button>
                <button className="w-full py-4 bg-bh-black border border-bh-white/10 text-bh-ivory font-heading text-sm uppercase tracking-wider hover:border-bh-white/30 transition-colors rounded-sm flex items-center justify-center gap-2">
                  <ShieldCheck size={18} /> Report Listing
                </button>
              </div>

              <div className="pt-6 border-t border-bh-white/10">
                <p className="font-body text-xs text-bh-ivory/40 text-center leading-relaxed">
                  Business Hub verifies all premium sellers. 
                  <br />Transactions are protected by our secure escrow system.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}