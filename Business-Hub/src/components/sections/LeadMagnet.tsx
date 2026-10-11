"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, ArrowRight, Loader2 } from "lucide-react";

export default function LeadMagnet() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error || "Something went wrong");

      setIsSuccess(true);
      setEmail("");
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-24 md:py-32 px-6 md:px-12 bg-bh-black border-t border-bh-white/5">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Left: Value Proposition */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block text-bh-gold font-heading text-xs uppercase tracking-[0.2em] mb-4">
              Free Resource
            </span>
            <h2 className="font-heading text-3xl md:text-4xl text-bh-white font-bold leading-[1.1] mb-6">
              The 2024 Digital Ecosystem Report
            </h2>
            <p className="font-body text-bh-ivory/70 text-lg mb-8 leading-relaxed">
              Discover the exact strategies top performers use to scale their businesses, find premium opportunities, and dominate their market.
            </p>
            
            <ul className="space-y-4 mb-8">
              {["Exclusive market insights", "Proven growth frameworks", "Direct access to our network"].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-bh-ivory/80 font-body">
                  <CheckCircle className="w-5 h-5 text-bh-red shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right: Opt-in Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="bg-bh-black border border-bh-white/10 p-8 md:p-10 relative overflow-hidden">
              {/* Subtle background accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-bh-red/5 rounded-full blur-3xl pointer-events-none" />

              {!isSuccess ? (
                <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
                  <div>
                    <label htmlFor="email" className="block font-heading text-xs uppercase tracking-wider text-bh-ivory/60 mb-2">
                      Enter your email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@company.com"
                      className="w-full px-4 py-4 bg-bh-black border border-bh-white/10 text-bh-ivory placeholder:text-bh-ivory/30 focus:border-bh-red focus:outline-none transition-colors rounded-sm font-body"
                    />
                  </div>

                  {error && (
                    <p className="text-sm text-bh-red font-body">{error}</p>
                  )}

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full py-4 bg-bh-red text-white font-heading text-sm uppercase tracking-wider hover:bg-bh-red/90 transition-colors rounded-sm flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? (
                      <Loader2 className="w-5 h-5 animate-spin" />
                    ) : (
                      <>
                        Get Instant Access <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <p className="text-[10px] text-bh-ivory/40 text-center font-body">
                    We respect your privacy. Unsubscribe at any time.
                  </p>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="relative z-10 text-center py-8"
                >
                  <div className="w-16 h-16 bg-bh-red/10 border border-bh-red/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-8 h-8 text-bh-red" />
                  </div>
                  <h3 className="font-heading text-2xl text-bh-white mb-2">
                    Check your inbox!
                  </h3>
                  <p className="font-body text-bh-ivory/70">
                    We've sent the report to <span className="text-bh-white">{email}</span>.
                  </p>
                </motion.div>
              )}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}