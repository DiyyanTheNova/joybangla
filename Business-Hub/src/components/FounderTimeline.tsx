'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function FounderTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      lineRef.current,
      { scaleY: 0 },
      {
        scaleY: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top center',
          end: 'bottom center',
          scrub: true,
        },
      }
    );
    
    gsap.utils.toArray('.timeline-node').forEach((node: any) => {
      gsap.fromTo(node, 
        { opacity: 0, x: -50 }, 
        { 
          opacity: 1, x: 0, 
          scrollTrigger: {
            trigger: node,
            start: 'top 60%',
          }
        }
      );
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-32 relative max-w-3xl mx-auto px-6">
      {/* The Scroll Line */}
      <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-zinc-800">
        <div ref={lineRef} className="w-full h-full bg-red-600 origin-top" />
      </div>

      {/* Nodes */}
      <div className="space-y-24">
        {[
          { year: '2020', title: 'The Beginning', text: 'Started with a simple vision to fix agency bloat.' },
          { year: '2023', title: 'Scaling Up', text: 'Partnered with 50+ enterprise clients globally.' },
          { year: '2026', title: 'The Future', text: 'Building WebGL immersive experiences at scale.' },
        ].map((node, i) => (
          <div key={i} className="timeline-node relative md:w-1/2 md:even:ml-auto md:even:pl-12 md:odd:pr-12 pl-12 md:pl-0">
            <div className="absolute -left-7.25 md:left-auto md:-right-1.25 top-2 w-3 h-3 bg-white rounded-full md:odd:-right-1.5 md:even:-left-1.5 z-10 shadow-[0_0_15px_rgba(255,255,255,0.5)]" />
            <span className="text-red-500 font-mono tracking-widest text-sm">{node.year}</span>
            <h4 className="text-2xl font-bold mt-2 mb-3">{node.title}</h4>
            <p className="text-zinc-400 leading-relaxed">{node.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}