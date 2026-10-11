"use client";

import { useEffect, useRef, useState } from "react";

interface InteractiveGridProps {
  gridSize?: number;
  dotSize?: number;
  className?: string;
}

export default function InteractiveGrid({
  gridSize = 60,
  dotSize = 1.5,
  className = "",
}: InteractiveGridProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Track mouse
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Animation loop
    const animate = () => {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Calculate grid
      const cols = Math.ceil(canvas.width / gridSize) + 1;
      const rows = Math.ceil(canvas.height / gridSize) + 1;

      // Draw dots
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = i * gridSize;
          const y = j * gridSize;
          
          // Calculate distance from mouse
          const dx = x - mousePos.x;
          const dy = y - mousePos.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          // Mouse interaction radius
          const maxDistance = 150;
          
          // Calculate displacement (push away from mouse)
          let offsetX = 0;
          let offsetY = 0;
          
          if (distance < maxDistance) {
            const force = (maxDistance - distance) / maxDistance;
            const angle = Math.atan2(dy, dx);
            const pushDistance = force * 20; // Maximum push distance
            
            offsetX = Math.cos(angle) * pushDistance;
            offsetY = Math.sin(angle) * pushDistance;
          }
          
          // Draw dot
          ctx.beginPath();
          ctx.arc(x + offsetX, y + offsetY, dotSize, 0, Math.PI * 2);
          
          // Color based on distance to mouse
          const opacity = distance < maxDistance ? 0.8 : 0.3;
          ctx.fillStyle = `rgba(242, 237, 227, ${opacity})`; // BH Ivory
          ctx.fill();
        }
      }
      
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [mousePos, gridSize, dotSize]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
      style={{ zIndex: 0 }}
    />
  );
}