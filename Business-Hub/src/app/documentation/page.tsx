import Link from "next/link";
import { Lock, ArrowLeft } from "lucide-react";

export default function ComingSoonPage() {
  return (
    <main className="min-h-screen pt-32 pb-20 px-6 flex flex-col items-center justify-center text-center bg-bh-black">
      <div className="w-16 h-16 flex items-center justify-center bg-bh-white/5 border border-bh-white/10 rounded-sm text-bh-red mb-8">
        <Lock size={28} strokeWidth={1.5} />
      </div>
      
      <h1 className="font-heading text-4xl md:text-5xl text-bh-ivory mb-4">
        Access Restricted
      </h1>
      <p className="font-body text-lg text-bh-ivory/60 max-w-xl mb-10">
        This section of the Business Hub ecosystem requires an active account 
        or is currently in development.
      </p>
      
      <div className="flex gap-4">
        <Link 
          href="/" 
          className="font-heading text-sm uppercase tracking-wider text-bh-red border border-bh-red/30 px-8 py-3 rounded-sm hover:bg-bh-red hover:text-bh-white transition-all duration-300"
        >
          Return Home
        </Link>
        <Link 
          href="/explore" 
          className="font-heading text-sm uppercase tracking-wider text-bh-ivory border border-bh-white/20 px-8 py-3 rounded-sm hover:bg-bh-white/5 transition-all duration-300"
        >
          Explore Public
        </Link>
      </div>
    </main>
  );
}