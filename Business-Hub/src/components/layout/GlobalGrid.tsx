"use client";

import { useEffect, useRef } from "react";

export default function GlobalGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("mousemove", handleMouseMove);

    const gridSize = 40;
    const dotSize = 1.2;
    const interactionRadius = 150;
    const maxPush = 25;

    const animate = () => {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const cols = Math.ceil(canvas.width / gridSize) + 1;
      const rows = Math.ceil(canvas.height / gridSize) + 1;

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = i * gridSize;
          const y = j * gridSize;
          
          const dx = x - mouseRef.current.x;
          const dy = y - mouseRef.current.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          let offsetX = 0;
          let offsetY = 0;
          
          if (distance < interactionRadius) {
            const force = (interactionRadius - distance) / interactionRadius;
            const angle = Math.atan2(dy, dx);
            const pushDistance = force * maxPush;
            
            offsetX = Math.cos(angle) * pushDistance;
            offsetY = Math.sin(angle) * pushDistance;
          }
          
          ctx.beginPath();
          ctx.arc(x + offsetX, y + offsetY, dotSize, 0, Math.PI * 2);
          
          const opacity = distance < interactionRadius ? 0.8 : 0.25;
          ctx.fillStyle = `rgba(242, 237, 227, ${opacity})`;
          ctx.fill();
        }
      }
      
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
    />
  );
}