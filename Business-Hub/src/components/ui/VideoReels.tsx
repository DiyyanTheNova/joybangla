"use client";

import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { Play } from "lucide-react";
import { useState, useRef } from "react";
import Image from "next/image";

const videos = [
  {
    title: "Platform Launch 2024",
    category: "Brand Strategy",
    youtubeId: "dQw4w9WgXcQ",
    thumbnail: "/images/video-thumb-1.jpg",
    duration: "3:45",
    type: "youtube",
    localSrc: "/videos/platform-launch.mp4",
  },
  {
    title: "Client Success Story",
    category: "Case Study",
    youtubeId: "dQw4w9WgXcQ",
    thumbnail: "/images/video-thumb-2.jpg",
    duration: "5:20",
    type: "youtube",
  },
  {
    title: "Product Demo",
    category: "Tutorial",
    youtubeId: "dQw4w9WgXcQ",
    thumbnail: "/images/video-thumb-3.jpg",
    duration: "8:15",
    type: "youtube",
  },
  {
    title: "Team Spotlight",
    category: "Behind the Scenes",
    youtubeId: "dQw4w9WgXcQ",
    thumbnail: "/images/video-thumb-4.jpg",
    duration: "4:30",
    type: "youtube",
  },
  {
    title: "Marketplace Overview",
    category: "Feature Walkthrough",
    youtubeId: "dQw4w9WgXcQ",
    thumbnail: "/images/video-thumb-5.jpg",
    duration: "6:00",
    type: "youtube",
  },
  {
    title: "Partnership Announcement",
    category: "News",
    youtubeId: "dQw4w9WgXcQ",
    thumbnail: "/images/video-thumb-6.jpg",
    duration: "2:45",
    type: "youtube",
  },
];

interface VideoCardProps {
  video: typeof videos[0];
  index: number;
  isActive: boolean;
  onClick: () => void;
}

function VideoCard({ video, index, isActive, onClick }: VideoCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Mouse tracking for 3D tilt effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const rotateX = useTransform(y, [-100, 100], [8, -8]);
  const rotateY = useTransform(x, [-100, 100], [-8, 8]);
  
  const springConfig = { damping: 25, stiffness: 150 };
  const rotateXSpring = useSpring(rotateX, springConfig);
  const rotateYSpring = useSpring(rotateY, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  // Calculate curved position
  const totalCards = videos.length;
  const angle = (index / (totalCards - 1)) * 120 - 60; 
  const radius = 350;
  const radians = (angle * Math.PI) / 180;
  
  const xPos = Math.sin(radians) * radius;
  const yPos = Math.cos(radians) * -80 - 100;
  const rotation = angle * 0.4;
  const zIndex = isActive ? 50 : index;

  return (
    <motion.div
      ref={cardRef}
      className="absolute left-1/2 top-1/2 cursor-pointer"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ 
        opacity: 1, 
        scale: isActive ? 1.15 : 0.9,
        transition: { delay: index * 0.1, duration: 0.6 }
      }}
      whileHover={{ 
        scale: 1.2,
        zIndex: 100,
        transition: { duration: 0.3 }
      }}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        x: `calc(-50% + ${xPos}px)`,
        y: `calc(-50% + ${yPos}px)`,
        rotateX: rotateXSpring,
        rotateY: rotateYSpring,
        rotate: rotation, // FIXED: Changed 'ro' to 'rotate'
        zIndex: zIndex,
        transformStyle: "preserve-3d",
      }}
    >
      {/* Card Container with 3D perspective */}
      <motion.div
        className={`relative w-50 md:w-60 bg-bh-black border-2 overflow-hidden rounded-xl shadow-2xl transition-colors duration-300 ${
          isActive ? "border-bh-red shadow-[0_0_40px_rgba(193,18,31,0.4)]" : "border-bh-white/10"
        }`}
        style={{
          transform: isActive ? "translateZ(30px)" : "translateZ(0)",
        }}
      >
        {/* Thumbnail */}
        <div className="relative aspect-4/3 w-full bg-linear-to-br from-bh-white/5 to-transparent">
          {video.thumbnail ? (
            <Image
              src={video.thumbnail}
              alt={video.title}
              fill
              className="object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <Play className="w-12 h-12 text-bh-white/30" />
            </div>
          )}
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-bh-black via-bh-black/40 to-transparent" />
          
          {/* Play Button */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ scale: 0.8, opacity: 0 }}
            whileHover={{ scale: 1, opacity: 1 }}
          >
            <div className="w-14 h-14 rounded-full bg-bh-red flex items-center justify-center shadow-lg">
              <Play className="w-6 h-6 text-bh-white ml-1" fill="white" />
            </div>
          </motion.div>
          
          {/* Duration Badge */}
          <div className="absolute top-3 right-3 px-2 py-1 bg-bh-black/80 backdrop-blur-sm rounded-sm text-xs font-body text-bh-ivory">
            {video.duration}
          </div>
          
          {/* Category Badge */}
          <div className="absolute top-3 left-3 px-3 py-1 bg-bh-black/80 backdrop-blur-sm border border-bh-white/10 rounded-sm text-xs font-heading uppercase tracking-wider text-bh-ivory/80">
            {video.category}
          </div>
        </div>
        
        {/* Info Section */}
        <div className="p-4">
          <h3 className={`font-heading text-lg font-bold mb-1 transition-colors ${
            isActive ? "text-bh-red" : "text-bh-white"
          }`}>
            {video.title}
          </h3>
          <p className="font-body text-sm text-bh-ivory/60">
            Watch project showcase
          </p>
        </div>
        
        {/* Active Indicator */}
        {isActive && (
          <motion.div
            layoutId="activeIndicator"
            className="absolute bottom-0 left-0 right-0 h-1 bg-bh-red"
          />
        )}
      </motion.div>
    </motion.div>
  );
}

export default function VideoReels() {
  const [activeVideo, setActiveVideo] = useState<typeof videos[0] | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-24 px-6 md:px-12 bg-bh-black border-t border-bh-white/5 relative overflow-hidden">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-16 relative z-10">
        <span className="inline-block text-bh-red font-heading text-sm uppercase tracking-[0.2em] mb-4">
          Our Work
        </span>
        <h2 className="font-heading text-3xl md:text-5xl text-bh-white mb-4">
          Featured Projects
        </h2>
        <p className="font-body text-bh-ivory/60 max-w-2xl">
          Real results from real campaigns. Watch how we transform brands and businesses.
        </p>
      </div>

      {/* Curved Video Showcase */}
      <div className="relative h-125 md:h-150 max-w-6xl mx-auto">
        {videos.map((video, index) => (
          <VideoCard
            key={index}
            video={video}
            index={index}
            isActive={index === activeIndex}
            onClick={() => {
              setActiveIndex(index);
              setActiveVideo(video);
            }}
          />
        ))}
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center gap-3 mt-12 relative z-10">
        {videos.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setActiveIndex(index);
              setActiveVideo(videos[index]);
            }}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === activeIndex
                ? "bg-bh-red w-8"
                : "bg-bh-white/30 hover:bg-bh-white/60"
            }`}
            aria-label={`View video ${index + 1}`}
          />
        ))}
      </div>

      {/* Video Modal */}
      {activeVideo && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-bh-black/95 backdrop-blur-md flex items-center justify-center p-6"
          onClick={() => setActiveVideo(null)}
        >
          {/* Close Button */}
          <button
            onClick={() => setActiveVideo(null)}
            className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center rounded-full bg-bh-white/10 text-bh-ivory hover:bg-bh-red hover:text-bh-white transition-colors z-50"
            aria-label="Close video"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Video Container */}
          <div className="relative w-full max-w-5xl aspect-video bg-bh-black border-2 border-bh-red rounded-sm overflow-hidden shadow-2xl">
            {activeVideo.type === "youtube" ? (
              <iframe
                src={`https://youtu.be/oomE4oltFRo}?autoplay=1`}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={activeVideo.title}
              />
            ) : (
              <video
                src={activeVideo.localSrc}
                className="w-full h-full"
                controls
                autoPlay
                playsInline
              />
            )}
          </div>
        </motion.div>
      )}
    </section>
  );
}