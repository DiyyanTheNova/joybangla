"use client";

import Link from 'next/link';
import { motion } from "framer-motion";
import { Play, X } from "lucide-react";
import { useState } from "react";

const videos = [
  { title: "Platform Launch 2024", category: "Brand Strategy", youtubeId: "dQw4w9WgXcQ", duration: "3:45", color: "from-red-900/40 to-black", slug: "platform-launch-2024" },
  { title: "Client Success Story", category: "Case Study", youtubeId: "dQw4w9WgXcQ", duration: "5:20", color: "from-amber-900/40 to-black" },
  { title: "Product Demo", category: "Tutorial", youtubeId: "dQw4w9WgXcQ", duration: "8:15", color: "from-blue-900/40 to-black" },
  { title: "Team Spotlight", category: "Behind the Scenes", youtubeId: "dQw4w9WgXcQ", duration: "4:30", color: "from-emerald-900/40 to-black" },
  { title: "Marketplace Overview", category: "Feature Walkthrough", youtubeId: "dQw4w9WgXcQ", duration: "6:00", color: "from-violet-900/40 to-black" },
  { title: "Partnership Announcement", category: "News", youtubeId: "dQw4w9WgXcQ", duration: "2:45", color: "from-rose-900/40 to-black" },
];

export default function VideoReels() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <section className="py-24 px-6 md:px-12 bg-bh-black border-t border-bh-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <span className="inline-block text-bh-red font-heading text-sm uppercase tracking-[0.2em] mb-4">Our Work</span>
          <h2 className="font-heading text-3xl md:text-5xl text-bh-white mb-4">Featured Projects</h2>
          <p className="font-body text-bh-ivory/60 max-w-2xl">Real results from real campaigns. Watch how we transform brands and businesses.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video, index) => {
            // Extract the card content so we can conditionally wrap it in a Link
            const CardContent = (
              <motion.div
                key={video.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group relative aspect-video bg-bh-black border border-bh-white/10 overflow-hidden cursor-pointer"
                onClick={() => !video.slug && setActiveVideo(video.youtubeId)}
              >
                {/* FIXED: bg-linear-to-br -> bg-gradient-to-br */}
                <div className={`absolute inset-0 bg-linear-to-br ${video.color}`} />
                
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                
                {/* FIXED: bg-linear-to-t -> bg-gradient-to-t */}
                <div className="absolute inset-0 bg-linear-to-t from-bh-black via-bh-black/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                <motion.div className="absolute inset-0 flex items-center justify-center" whileHover={{ scale: 1.1 }}>
                  <div className="w-16 h-16 rounded-full bg-bh-red/90 flex items-center justify-center backdrop-blur-sm shadow-lg group-hover:bg-bh-red transition-colors">
                    <Play className="w-6 h-6 text-bh-white ml-1" fill="white" />
                  </div>
                </motion.div>

                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-bh-black/80 backdrop-blur-sm border border-bh-white/10 rounded-sm text-xs font-heading uppercase tracking-wider text-bh-ivory/80">
                    {video.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="px-2 py-1 bg-bh-black/80 backdrop-blur-sm rounded-sm text-xs font-body text-bh-ivory/80">{video.duration}</span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-heading text-xl text-bh-white mb-1 group-hover:text-bh-red transition-colors">{video.title}</h3>
                  <p className="font-body text-sm text-bh-ivory/60">Watch project showcase</p>
                </div>

                <div className="absolute inset-0 border-2 border-bh-red opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </motion.div>
            );

            // If the video has a slug, wrap it in a Next.js Link for the Case Study page
            if (video.slug) {
              return (
                <Link key={video.title} href={`/work/${video.slug}`} className="block">
                  {CardContent}
                </Link>
              );
            }

            return CardContent;
          })}
        </div>
      </div>

      {activeVideo && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-bh-black/95 backdrop-blur-md flex items-center justify-center p-6"
          onClick={() => setActiveVideo(null)}
        >
          <button onClick={() => setActiveVideo(null)} className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center rounded-full bg-bh-white/10 text-bh-ivory hover:bg-bh-red hover:text-bh-white transition-colors">
            <X className="w-6 h-6" />
          </button>

          <div className="relative w-full max-w-5xl aspect-video bg-bh-black border border-bh-white/10 rounded-sm overflow-hidden shadow-2xl">
            <iframe
              src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Video showcase"
            />
          </div>
        </motion.div>
      )}
    </section>
  );
}