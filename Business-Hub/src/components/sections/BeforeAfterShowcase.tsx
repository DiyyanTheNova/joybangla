"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";

// Demo Data: Real-world style metrics
const caseStudies = [
  {
    client: "TechVentures Ltd",
    category: "Growth Strategy",
    metric: "Monthly Active Users",
    before: 120,
    after: 4700,
    suffix: "+",
    time: "6 Months",
  },
  {
    client: "ScaleUp Agency",
    category: "Brand Positioning",
    metric: "Inbound Leads",
    before: 15,
    after: 340,
    suffix: "/mo",
    time: "4 Months",
  },
  {
    client: "Future Labs",
    category: "Product Launch",
    metric: "Pre-order Revenue",
    before: 0,
    after: 1250,
    prefix: "$",
    time: "8 Weeks",
  },
];

// Helper component for animated numbers
function AnimatedNumber({ value, prefix = "", suffix = "" }: { value: number; prefix?: string; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;
    
    let start = 0;
    const end = value;
    const duration = 2000; // 2 seconds
    const increment = end / (duration / 16); // 60fps

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref} className="font-heading font-bold">
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
}

export default function BeforeAfterShowcase() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 bg-bh-black border-t border-bh-white/5">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="mb-16 text-center">
          <span className="inline-block text-bh-red font-heading text-xs uppercase tracking-[0.2em] mb-4">
            Proven Results
          </span>
          <h2 className="font-heading text-3xl md:text-5xl text-bh-white font-bold leading-[1.1] mb-6">
            We don't just promise. We deliver.
          </h2>
          <p className="font-body text-bh-ivory/60 max-w-2xl mx-auto text-lg">
            Real metrics from real clients. See the tangible impact of our ecosystem strategies.
          </p>
        </div>

        {/* Results Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.client}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="group relative bg-bh-black border border-bh-white/10 p-8 hover:border-bh-red/50 transition-all duration-500"
            >
              {/* Category Tag */}
              <div className="flex items-center justify-between mb-8">
                <span className="px-3 py-1 bg-bh-white/5 border border-bh-white/10 text-[10px] font-heading uppercase tracking-wider text-bh-ivory/60">
                  {study.category}
                </span>
                <span className="text-xs text-bh-ivory/40 font-body">{study.time}</span>
              </div>

              {/* Client Name */}
              <h3 className="font-heading text-xl text-bh-white mb-2">{study.client}</h3>
              <p className="font-body text-sm text-bh-ivory/50 mb-8">{study.metric}</p>

              {/* The Comparison */}
              <div className="flex items-end gap-4 mb-6">
                {/* Before */}
                <div className="flex-1">
                  <p className="text-[10px] uppercase tracking-wider text-bh-ivory/30 mb-1">Before</p>
                  <p className="font-heading text-2xl text-bh-ivory/30 line-through decoration-bh-red/50">
                    {study.prefix}{study.before.toLocaleString()}{study.suffix}
                  </p>
                </div>

                {/* Arrow */}
                <ArrowRight className="w-5 h-5 text-bh-red mb-2 shrink-0" />

                {/* After */}
                <div className="flex-1 text-right">
                  <p className="text-[10px] uppercase tracking-wider text-bh-red mb-1">After</p>
                  <p className="font-heading text-4xl text-bh-white">
                    <AnimatedNumber value={study.after} prefix={study.prefix} suffix={study.suffix} />
                  </p>
                </div>
              </div>

              {/* Growth Bar */}
              <div className="h-1 w-full bg-bh-white/5 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 0.5 + index * 0.1, ease: "easeOut" }}
                  className="h-full bg-linear-to-r from-bh-red to-bh-gold"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}