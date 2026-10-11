"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { create } from "zustand";

// Zustand Store for Visit State
interface SiteState {
  hasVisited: boolean;
  setHasVisited: () => void;
}

const useSiteStore = create<SiteState>((set) => ({
  hasVisited: false,
  setHasVisited: () => set({ hasVisited: true }),
}));

// Realistic Shoji Door Panel Component
function ShojiPanel() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Base ivory paper background */}
      <div className="absolute inset-0 bg-linear-to-br from-[#F2EDE3] via-[#E8E0D0] to-[#D4C9B0]" />
      
      {/* Subtle paper texture */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Vertical wooden bars */}
      <div className="absolute inset-0 flex justify-between px-[10%]">
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={`v-${i}`}
            className="w-1 h-full"
            style={{
              background: "linear-gradient(to right, #1a1a1a, #2a2a2a, #1a1a1a)",
              boxShadow: "1px 0 3px rgba(0,0,0,0.4), -1px 0 3px rgba(0,0,0,0.4)",
            }}
          />
        ))}
      </div>

      {/* Horizontal wooden bars */}
      <div className="absolute inset-0 flex flex-col justify-between py-[12%]">
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={`h-${i}`}
            className="h-1 w-full"
            style={{
              background: "linear-gradient(to bottom, #1a1a1a, #2a2a2a, #1a1a1a)",
              boxShadow: "0 1px 3px rgba(0,0,0,0.4), 0 -1px 3px rgba(0,0,0,0.4)",
            }}
          />
        ))}
      </div>

      {/* Gold accent nodes at intersections */}
      <div className="absolute inset-0 flex justify-between px-[10%]">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={`gv-${i}`} className="relative w-1 h-full">
            {Array.from({ length: 3 }).map((_, j) => (
              <div
                key={`gold-${i}-${j}`}
                className="absolute w-2 h-2 rounded-full -left-0.5"
                style={{
                  top: `${(j + 1) * 25}%`,
                  background: "radial-gradient(circle, #D4AF37 0%, #B8941F 100%)",
                  boxShadow: "0 0 6px rgba(212, 175, 55, 0.6)",
                }}
              />
            ))}
          </div>
        ))}
      </div>

      {/* Outer dark frame */}
      <div 
        className="absolute inset-0 border-8"
        style={{
          borderColor: "#111111",
          boxShadow: "inset 0 0 30px rgba(0,0,0,0.3)",
        }}
      />

      {/* Inner gold trim */}
      <div 
        className="absolute inset-1 border-2"
        style={{ borderColor: "rgba(212, 175, 55, 0.5)" }}
      />

      {/* Light glow effect (translucent paper) */}
      <div className="absolute inset-0 bg-linear-to-br from-white/15 via-transparent to-black/10" />
    </div>
  );
}

export default function ShojiDoorTransition() {
  const { hasVisited, setHasVisited } = useSiteStore();
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    if (!hasVisited) {
      const timer = setTimeout(() => {
        setIsExiting(true);
        setHasVisited();
      }, 2000); // Reduced to 2 seconds
      return () => clearTimeout(timer);
    }
  }, [hasVisited, setHasVisited]);

  const leftDoorVariants: Variants = {
    closed: { x: "0%" },
    open: { 
      x: "-100%", 
      transition: { 
        duration: hasVisited ? 0.6 : 1.8, 
        ease: [0.76, 0, 0.24, 1] 
      } 
    },
  };

  const rightDoorVariants: Variants = {
    closed: { x: "0%" },
    open: { 
      x: "100%", 
      transition: { 
        duration: hasVisited ? 0.6 : 1.8, 
        ease: [0.76, 0, 0.24, 1] 
      } 
    },
  };

  return (
    <AnimatePresence>
      {!isExiting && (
        <div 
          className="fixed inset-0 flex pointer-events-none"
          style={{ zIndex: 100 }}
        >
          {/* Left Shoji Door */}
          <motion.div
            className="absolute top-0 left-0 w-1/2 h-full"
            initial="closed"
            animate="open"
            variants={leftDoorVariants}
          >
            <ShojiPanel />
            {/* Right edge shadow */}
            <div className="absolute top-0 right-0 w-12 h-full bg-linear-to-l from-black/50 to-transparent" />
          </motion.div>
          
          {/* Right Shoji Door */}
          <motion.div
            className="absolute top-0 right-0 w-1/2 h-full"
            initial="closed"
            animate="open"
            variants={rightDoorVariants}
          >
            <ShojiPanel />
            {/* Left edge shadow */}
            <div className="absolute top-0 left-0 w-12 h-full bg-linear-to-r from-black/50 to-transparent" />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}