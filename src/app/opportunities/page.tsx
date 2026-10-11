import Link from "next/link";
import { Handshake, TrendingUp, Users, Lightbulb, Compass, ArrowUpRight, Clock } from "lucide-react";
import { safeFetch } from "@/lib/sanity";
import { opportunitiesQuery } from "@/lib/queries";
import { filterListings, sortListings } from "@/lib/listings";
import ListingToolbar from "@/components/ui/ListingToolbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Opportunities | Business Hub",
  description: "Discover strategic partnerships, funding rounds, collaborative projects, and mentorships on Business Hub.",
};

interface Opportunity {
  _id: string;
  _createdAt: string;
  title: string;
  entity: string;
  category: string;
  status: "Open" | "Urgent" | "Closed";
  deadline: string;
  description: string;
}

const sortOptions = [
  { value: "newest", label: "Newest first" },
  { value: "oldest", label: "Oldest first" },
  { value: "title-asc", label: "Title (A–Z)" },
  { value: "title-desc", label: "Title (Z–A)" },
];

const getCategoryIcon = (category: string) => {
  switch (category) {
    case "Partnerships": return Handshake;
    case "Funding": return TrendingUp;
    case "Projects": return Users;
    case "Mentorship": return Lightbulb;
    default: return Compass;
  }
};

export default async function OpportunitiesPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;
  const query = typeof params.q === "string" ? params.q : "";
  const category = typeof params.category === "string" ? params.category : "All";
  const sort = typeof params.sort === "string" ? params.sort : "newest";

  const opportunities = await safeFetch<Opportunity>(opportunitiesQuery);

  // Derive category tabs from the actual data so filters always match.
  const categories = [
    "All",
    ...Array.from(
      new Set(
        opportunities
          .map((o) => o.category)
          .filter((c): c is string => Boolean(c && c.trim())),
      ),
    ),
  ];

  const filtered = sortListings(
    filterListings(opportunities, query, category, ["title", "entity", "description"], "category"),
    sort,
    "_createdAt",
    "title",
  );

  return (
    <main className="min-h-screen pt-32 pb-20 px-6 md:px-12 bg-bh-black">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <Link href="/" className="font-body text-sm text-bh-ivory/50 hover:text-bh-red transition-colors mb-4 inline-block">
            &larr; Back to Home
          </Link>
          <h1 className="font-heading text-4xl md:text-6xl text-bh-ivory mb-4">Opportunities</h1>
          <p className="font-body text-lg text-bh-ivory/60 max-w-2xl">
            Discover strategic partnerships, funding rounds, collaborative projects, and mentorships.
          </p>
        </div>

        <ListingToolbar
          categories={categories}
          sortOptions={sortOptions}
          searchPlaceholder="Search opportunities, entities, keywords..."
          resultCount={filtered.length}
        />

        {filtered.length === 0 ? (
          <div className="text-center py-20 border border-dashed border-bh-white/10 rounded-sm">
            <p className="text-bh-ivory/50 font-body text-lg">
              {opportunities.length === 0
                ? "No opportunities posted yet. Check back soon!"
                : "No opportunities match your search. Try a different keyword or filter."}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((item) => {
              const Icon = getCategoryIcon(item.category);
              return (
                <Link
                  key={item._id}
                  href={`/opportunities/${item._id}`}
                  className="group bg-bh-black border border-bh-white/10 p-8 flex flex-col transition-all duration-300 hover:border-bh-red/50 hover:-translate-y-1 rounded-sm"
                >
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-12 h-12 flex items-center justify-center bg-bh-white/5 border border-bh-white/10 rounded-sm text-bh-red group-hover:bg-bh-red group-hover:text-bh-white transition-colors">
                      <Icon size={24} strokeWidth={1.5} />
                    </div>
                    <span className={`inline-block py-1 px-2 text-[10px] font-heading font-bold tracking-wider uppercase border rounded-sm ${
                      item.status === "Urgent" ? "text-bh-red border-bh-red/30 bg-bh-red/10" :
                      item.status === "Open" ? "text-bh-ivory border-bh-ivory/30 bg-bh-ivory/10" :
                      "text-bh-ivory/40 border-bh-white/10 bg-bh-white/5"
                    }`}>
                      {item.status || "Open"}
                    </span>
                  </div>

                  <div className="grow">
                    <h3 className="font-heading text-xl text-bh-ivory mb-2 group-hover:text-bh-white transition-colors">
                      {item.title}
                    </h3>
                    <p className="font-body text-sm text-bh-ivory/60 mb-4">{item.entity}</p>
                    <p className="font-body text-sm text-bh-ivory/50 leading-relaxed mb-6 line-clamp-3">
                      {item.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-6 border-t border-bh-white/10">
                    <div className="flex items-center gap-1.5 text-xs text-bh-ivory/40 tabular-nums">
                      <Clock size={12} /> {item.deadline ? new Date(item.deadline).toLocaleDateString() : "Ongoing"}
                    </div>
                    <div className="w-8 h-8 flex items-center justify-center border border-bh-white/10 rounded-sm text-bh-ivory/40 group-hover:border-bh-red group-hover:text-bh-red transition-all">
                      <ArrowUpRight size={16} strokeWidth={1.5} />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </main>
  );
}