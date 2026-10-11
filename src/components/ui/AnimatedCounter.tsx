"use client";

import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

interface AnimatedCounterProps {
  end: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
  label?: string; // <--- CHANGED: Made optional (?)
}

export default function AnimatedCounter({
  end,
  suffix = "",
  prefix = "",
  duration = 2,
  className = "",
  label, // <--- CHANGED: No longer strictly required
}: AnimatedCounterProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const spring = useSpring(0, {
    mass: 0.8,
    stiffness: 75,
    damping: 15,
  });

  const display = useTransform(spring, (current) => 
    Math.round(current)
  );

  useEffect(() => {
    if (isInView) {
      spring.set(end);
    }
  }, [isInView, spring, end]);

  return (
    <div ref={ref} className={`text-center ${className}`}>
      <motion.div
        className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-bh-gold mb-2"
      >
        {prefix}<motion.span>{display}</motion.span>{suffix}
      </motion.div>
      
      {/* Only render label if it exists */}
      {label && (
        <p className="font-body text-sm md:text-base text-bh-ivory/60 uppercase tracking-wider">
          {label}
        </p>
      )}
    </div>
  );
}