"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  delay?: number;
}

export default function SectionWrapper({ children, className, id, delay = 0 }: SectionWrapperProps) {
  const prefersReducedMotion = useReducedMotion();

  // If user prefers reduced motion, disable the animation
  if (prefersReducedMotion) {
    return (
      <section id={id} className={cn("w-full px-6 md:px-12 lg:px-24 py-20 md:py-32", className)}>
        <div className="max-w-7xl mx-auto w-full">
          {children}
        </div>
      </section>
    );
  }

  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1], delay }}
      className={cn("w-full px-6 md:px-12 lg:px-24 py-20 md:py-32", className)}
    >
      <div className="max-w-7xl mx-auto w-full">
        {children}
      </div>
    </motion.section>
  );
}