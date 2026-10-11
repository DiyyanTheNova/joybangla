import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  Building2,
  Clock,
  Handshake,
  TrendingUp,
  Users,
  Lightbulb,
  Compass,
} from "lucide-react";
import { safeFetch } from "@/lib/sanity";
import type { Metadata } from "next";

interface Opportunity {
  _id: string;
  title: string;
  entity: string;
  category: string;
  status: "Open" | "Urgent" | "Closed";
  deadline: string;
  description: string;
}

// Static map so the icon component isn't created during render.
const categoryIcons: Record<string, typeof Handshake> = {
  Partnerships: Handshake,
  Funding: TrendingUp,
  Projects: Users,
  Mentorship: Lightbulb,
};

// Module-level component so we never create a component during render.
function CategoryIcon({ category, size = 24, strokeWidth = 1.5 }: { category: string; size?: number; strokeWidth?: number }) {
  const Icon = categoryIcons[category] ?? Compass;
  return <Icon size={size} strokeWidth={strokeWidth} />;
}

async function getOpportunity(id: string): Promise<Opportunity | null> {
  const results = await safeFetch<Opportunity>(
    `*[_type == "opportunity" && _id == $id][0]{
      _id, title, entity, category, status, deadline,
      "description": coalesce(description, "")
    }`,
    { id },   
  );
  return results[0] ?? null;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const opportunity = await getOpportunity(id);
  return { title: opportunity ? `${opportunity.title} | Opportunities` : "Opportunity Not Found" };
}

export default async function OpportunityDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const opportunity = await getOpportunity(id);

  if (!opportunity) notFound();

  return (
    <main className="min-h-screen pt-32 pb-24 px-6 md:px-12 bg-bh-black">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/opportunities"
          className="font-body text-sm text-bh-ivory/50 hover:text-bh-red transition-colors mb-8 inline-flex items-center gap-2"
        >
          <ArrowLeft size={16} /> Back to Opportunities
        </Link>

        <div className="flex flex-wrap items-center gap-3 mb-6">
          {opportunity.category && (
            <span className="inline-block py-1 px-3 text-[10px] font-heading font-bold tracking-wider uppercase text-bh-ivory/70 border border-bh-white/10 rounded-sm">
              {opportunity.category}
            </span>
          )}
          <span className={`inline-block py-1 px-3 text-[10px] font-heading font-bold tracking-wider uppercase border rounded-sm ${
            opportunity.status === "Urgent" ? "text-bh-red border-bh-red/30 bg-bh-red/10" :
            opportunity.status === "Open" ? "text-bh-ivory border-bh-ivory/30 bg-bh-ivory/10" :
            "text-bh-ivory/40 border-bh-white/10 bg-bh-white/5"
          }`}>
            {opportunity.status || "Open"}
          </span>
        </div>

        <div className="flex items-start gap-6 mb-8">
          <div className="w-16 h-16 shrink-0 flex items-center justify-center bg-bh-white/5 border border-bh-white/10 rounded-sm text-bh-red">
            <CategoryIcon category={opportunity.category} size={28} />
          </div>
          <h1 className="font-heading text-4xl md:text-6xl text-bh-ivory leading-tight">
            {opportunity.title}
          </h1>
        </div>

        <div className="flex flex-wrap gap-6 text-bh-ivory/60 font-body mb-12 pb-12 border-b border-bh-white/10">
          {opportunity.entity && (
            <span className="flex items-center gap-2">
              <Building2 size={16} className="text-bh-red" /> {opportunity.entity}
            </span>
          )}
          <span className="flex items-center gap-2">
            <Clock size={16} className="text-bh-red" /> {opportunity.deadline || "Ongoing"}
          </span>
        </div>

        <section>
          <h2 className="font-heading text-xs uppercase tracking-[0.2em] text-bh-gold mb-6">
            About this opportunity
          </h2>
          {opportunity.description ? (
            <p className="font-body text-lg text-bh-ivory/80 leading-relaxed whitespace-pre-line">
              {opportunity.description}
            </p>
          ) : (
            <p className="font-body text-bh-ivory/50">
              No description has been provided for this opportunity yet.
            </p>
          )}
        </section>

        <div className="mt-16 pt-8 border-t border-bh-white/10">
          <a
            href="mailto:partners@businesshub.com?subject=Opportunity: "
            className="inline-flex items-center gap-2 bg-bh-red text-bh-white font-heading text-sm uppercase tracking-wider px-8 py-4 rounded-sm hover:bg-bh-red/90 transition-colors"
          >
            Express interest
          </a>
        </div>
      </div>
    </main>
  );
}
