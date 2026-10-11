import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function CookiesPage() {
  return (
    <main className="min-h-screen pt-32 pb-20 px-6 md:px-12 bg-bh-black">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="font-body text-sm text-bh-ivory/50 hover:text-bh-red transition-colors mb-8 inline-flex items-center gap-2">
          <ArrowLeft size={16} /> Back to Home
        </Link>
        <h1 className="font-heading text-4xl text-bh-ivory mb-8">Cookie Policy</h1>
        <div className="prose prose-invert">
          <p className="font-body text-bh-ivory/70">Last updated: {new Date().toLocaleDateString()}</p>
          <p className="font-body text-bh-ivory/70 mt-6">
            We use cookies to enhance your experience on Business Hub.
          </p>
          <p className="font-body text-bh-ivory/60 mt-4 text-sm">
            [Add your cookie policy content here]
          </p>
        </div>
      </div>
    </main>
  );
}