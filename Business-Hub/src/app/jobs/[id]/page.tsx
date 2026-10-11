import Link from "next/link";
import { MapPin, Clock, Briefcase, DollarSign, ArrowUpRight } from "lucide-react";
import { safeFetch } from "@/lib/sanity";
import { jobsQuery } from "@/lib/queries";
import { filterListings, sortListings } from "@/lib/listings";
import ListingToolbar from "@/components/ui/ListingToolbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jobs | Business Hub",
  description: "Discover top-tier roles from premium businesses. Find your next career-defining opportunity on Business Hub.",
};

interface Job {
  _id: string;
  _createdAt: string;
  title: string;
  company: string;
  location: string;
  type: string;
  salary: string;
  postedAt: string;
  featured: boolean;
}

const sortOptions = [
  { value: "newest", label: "Newest first" },
  { value: "oldest", label: "Oldest first" },
  { value: "title-asc", label: "Title (A–Z)" },
  { value: "title-desc", label: "Title (Z–A)" },
];

const jobTypes = ["All", "Full-time", "Contract", "Remote", "Part-time"];

export default async function JobsPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;
  const query = typeof params.q === "string" ? params.q : "";
  const category = typeof params.category === "string" ? params.category : "All";
  const sort = typeof params.sort === "string" ? params.sort : "newest";

  const jobs = await safeFetch<Job>(jobsQuery);

  const filtered = sortListings(
    filterListings(jobs, query, category, ["title", "company", "location", "type"], "type"),
    sort,
    "postedAt",
    "title",
  );

  return (
    <main className="min-h-screen pt-32 pb-20 px-6 md:px-12 bg-bh-black">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <Link href="/" className="font-body text-sm text-bh-ivory/50 hover:text-bh-red transition-colors mb-4 inline-block">
            &larr; Back to Home
          </Link>
          <h1 className="font-heading text-4xl md:text-6xl text-bh-ivory mb-4">Jobs</h1>
          <p className="font-body text-lg text-bh-ivory/60 max-w-2xl">
            Discover top-tier roles from premium businesses. Find your next career-defining opportunity.
          </p>
        </div>

        <ListingToolbar
          categories={jobTypes}
          sortOptions={sortOptions}
          searchPlaceholder="Search job titles, companies, keywords..."
          resultCount={filtered.length}
        />

        <div className="flex flex-col gap-4">
          {filtered.length === 0 ? (
            <div className="text-center py-20 border border-dashed border-bh-white/10 rounded-sm">
              <p className="text-bh-ivory/50 font-body text-lg">
                {jobs.length === 0
                  ? "No jobs posted yet. Check back soon!"
                  : "No jobs match your search. Try a different keyword or filter."}
              </p>
            </div>
          ) : (
            filtered.map((job) => (
              <Link
                key={job._id}
                href={`/jobs/${job._id}`}
                className="group bg-bh-black border border-bh-white/10 p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 transition-all duration-300 hover:border-bh-red/50 hover:bg-bh-white/5 rounded-sm"
              >
                <div className="grow">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-heading text-xl md:text-2xl text-bh-ivory group-hover:text-bh-white transition-colors">
                      {job.title}
                    </h3>
                    {job.featured && (
                      <span className="inline-block py-0.5 px-2 text-[10px] font-heading font-bold tracking-wider uppercase text-bh-gold border border-bh-gold/30 bg-bh-gold/10 rounded-sm">
                        Featured
                      </span>
                    )}
                  </div>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-bh-ivory/60">
                    <span className="flex items-center gap-1.5">
                      <Briefcase size={14} /> {job.company}
                    </span>
                    {job.location && (
                      <span className="flex items-center gap-1.5">
                        <MapPin size={14} /> {job.location}
                      </span>
                    )}
                    {job.salary && (
                      <span className="flex items-center gap-1.5">
                        <DollarSign size={14} /> {job.salary}
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-6 md:gap-10">
                  <div className="text-right">
                    <span className="inline-block py-1 px-2 mb-2 text-[10px] font-heading font-bold tracking-wider uppercase text-bh-ivory/60 border border-bh-white/10 rounded-sm">
                      {job.type}
                    </span>
                    <div className="flex items-center justify-end gap-1.5 text-xs text-bh-ivory/40 tabular-nums">
                      <Clock size={12} /> {job.postedAt ? new Date(job.postedAt).toLocaleDateString() : "—"}
                    </div>
                  </div>
                  
                  <div className="w-10 h-10 flex items-center justify-center border border-bh-white/10 rounded-sm text-bh-ivory/40 group-hover:border-bh-red group-hover:text-bh-red transition-all">
                    <ArrowUpRight size={18} strokeWidth={1.5} />
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