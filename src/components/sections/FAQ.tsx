"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

// Objection-handling data based on typical agency questions
const faqs = [
  {
    question: "What is the typical timeline for a project?",
    answer: "Most core ecosystem integrations and brand overhauls take between 4 to 8 weeks. We prioritize fast, iterative delivery so you see results within the first 14 days, rather than waiting months for a final reveal."
  },
  {
    question: "How does your pricing structure work?",
    answer: "We offer transparent, project-based pricing tailored to your specific goals. There are no hidden fees or surprise retainers. After our initial discovery call, we provide a fixed-scope proposal so you know exactly what you're investing in."
  },
  {
    question: "Do you work with early-stage startups?",
    answer: "Absolutely. We have specific 'Growth Sprint' packages designed for early-stage companies that need to establish a premium digital presence quickly to attract their first round of funding or high-value clients."
  },
  {
    question: "What happens after the project is delivered?",
    answer: "We don't just hand over the keys and leave. Every project includes a 30-day post-launch support window. For ongoing needs, we offer flexible retainer packages to ensure your platform continues to scale and convert."
  },
  {
    question: "Why should I choose Business Hub over other agencies?",
    answer: "We don't just build websites; we build digital ecosystems. Our focus is strictly on conversion, speed, and scalable architecture. We combine premium design with rigorous technical performance to ensure your platform actually drives revenue."
  }
];

function AccordionItem({ faq, isOpen, onClick }: { faq: typeof faqs[0]; isOpen: boolean; onClick: () => void }) {
  return (
    <div className="border-b border-bh-white/10 last:border-b-0">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between py-6 text-left group focus:outline-none"
      >
        <span className={`font-heading text-lg md:text-xl transition-colors duration-300 ${isOpen ? 'text-bh-red' : 'text-bh-white group-hover:text-bh-ivory'}`}>
          {faq.question}
        </span>
        <div className={`ml-4 shrink-0 w-8 h-8 flex items-center justify-center border transition-all duration-300 ${isOpen ? 'border-bh-red bg-bh-red/10 text-bh-red' : 'border-bh-white/20 text-bh-ivory/60 group-hover:border-bh-white/40'}`}>
          {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
        </div>
      </button>
      
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="overflow-hidden"
          >
            <p className="pb-6 font-body text-bh-ivory/70 leading-relaxed pr-12">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 md:py-32 px-6 md:px-12 bg-bh-black border-t border-bh-white/5">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="mb-16 text-center">
          <span className="inline-block text-bh-gold font-heading text-xs uppercase tracking-[0.2em] mb-4">
            Common Questions
          </span>
          <h2 className="font-heading text-3xl md:text-5xl text-bh-white font-bold leading-[1.1] mb-6">
            Everything you need to know.
          </h2>
          <p className="font-body text-bh-ivory/60 max-w-2xl mx-auto text-lg">
            Transparent answers about our process, pricing, and how we deliver results.
          </p>
        </div>

        {/* Accordion */}
        <div className="border-t border-bh-white/10">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              faq={faq}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>

        {/* Bottom CTA for lingering doubts */}
        <div className="mt-16 text-center p-8 border border-bh-white/10 bg-bh-white/2">
          <p className="font-heading text-xl text-bh-white mb-4">Still have questions?</p>
          <p className="font-body text-bh-ivory/60 mb-6">Our team is ready to clarify any specific details about your project.</p>
          <a href="/contact" className="inline-block px-8 py-3 bg-bh-black border border-bh-white/20 text-bh-white font-heading text-sm uppercase tracking-wider hover:border-bh-red hover:text-bh-red transition-colors">
            Contact Support
          </a>
        </div>

      </div>
    </section>
  );
}