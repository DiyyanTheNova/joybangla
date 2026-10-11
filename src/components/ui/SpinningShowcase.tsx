"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

const featuredPeople = [
  {
    name: "Featured Member",
    role: "Industry Leader",
    image: "/images/mew1.webp",
  },
  {
    name: "Featured Partner",
    role: "Creative Director",
    image: "/images/mew2.webp",
  },
  {
    name: "Featured Creator",
    role: "Tech Innovator",
    image: "/images/mew3.webp",
  },
   {
    name: "Featured Member",
    role: "Industry Leader",
    image: "/images/mew4.webp",
  },
  {
    name: "Featured Partner",
    role: "Creative Director",
    image: "/images/mew5.webp",
  },
  {
    name: "Featured Creator",
    role: "Tech Innovator",
    image: "/images/mew6.webp",
  },
   {
    name: "Featured Member",
    role: "Industry Leader",
    image: "/images/mew7.webp",
  },
  {
    name: "Featured Partner",
    role: "Creative Director",
    image: "/images/mew8.webp",
  },
  {
    name: "Featured Creator",
    role: "Tech Innovator",
    image: "/images/mew9.webp",
  },
   {
    name: "Featured Member",
    role: "Industry Leader",
    image: "/images/mew10.webp",
  },
  {
    name: "Featured Partner",
    role: "Creative Director",
    image: "/images/mew11.webp",
  },
  {
    name: "Featured Creator",
    role: "Tech Innovator",
    image: "/images/mew12.webp",
  },
   {
    name: "Featured Member",
    role: "Industry Leader",
    image: "/images/mew13.webp",
  },
  {
    name: "Featured Partner",
    role: "Creative Director",
    image: "/images/mew14.webp",
  },
  {
    name: "Featured Creator",
    role: "Tech Innovator",
    image: "/images/mew15.webp",
  },
   {
    name: "Featured Member",
    role: "Industry Leader",
    image: "/images/mew16.webp",
  },
  {
    name: "Featured Partner",
    role: "Creative Director",
    image: "/images/mew17.webp",
  },
  {
    name: "Featured Creator",
    role: "Tech Innovator",
    image: "/images/mew18.webp",
  },
];

export default function SpinningShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % featuredPeople.length);
    }, 4000); // Change every 4 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-125 md:h-150 overflow-hidden">
      {/* Rotating Container */}
      <div className="relative w-full h-full flex items-center justify-center">
        {featuredPeople.map((person, index) => {
          const isActive = index === currentIndex;
          const offset = index - currentIndex;
          
          return (
            <motion.div
              key={index}
              className="absolute inset-0 flex items-center justify-center"
              initial={false}
              animate={{
                rotateY: offset * 120,
                opacity: isActive ? 1 : 0.3,
                scale: isActive ? 1 : 0.7,
                x: offset === 0 ? 0 : offset > 0 ? 200 : -200,
                zIndex: isActive ? 10 : 1,
              }}
              transition={{
                duration: 0.8,
                ease: [0.4, 0, 0.2, 1],
              }}
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              <div className="relative w-75 md:w-100 aspect-3/4">
                {/* Image Container with Border */}
                <div className={`relative w-full h-full overflow-hidden border-2 transition-colors duration-500 ${
                  isActive ? "border-bh-red" : "border-bh-white/10"
                }`}>
                  <Image
                    src={person.image}
                    alt={person.name}
                    fill
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                    priority={isActive}
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-bh-black via-transparent to-transparent" />
                </div>

                {/* Info Card */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 p-6 bg-bh-black/90 backdrop-blur-sm border-t border-bh-white/10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 20 }}
                  transition={{ delay: 0.2 }}
                >
                  <h3 className="font-heading text-xl text-bh-white mb-1">
                    {person.name}
                  </h3>
                  <p className="font-body text-sm text-bh-red">
                    {person.role}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {featuredPeople.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-bh-red w-8"
                : "bg-bh-white/30 hover:bg-bh-white/60"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Auto-progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-bh-white/5">
        <motion.div
          className="h-full bg-bh-red"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>
    </div>
  );
}