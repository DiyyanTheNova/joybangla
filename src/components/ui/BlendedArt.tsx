import Image from "next/image";
import { cn } from "@/lib/utils";

interface BlendedArtProps {
  src: string;
  alt: string;
  className?: string;
  fadeDirection?: "left" | "right" | "top" | "bottom" | "all";
  opacity?: number;
}

export default function BlendedArt({ 
  src, 
  alt, 
  className, 
  fadeDirection = "left", 
  opacity = 0.8 
}: BlendedArtProps) {
  
  // This creates the "transparency" effect by fading edges
  const maskClasses = {
    left: "mask-image-linear-gradient(to right, black 40%, transparent 100%)",
    right: "mask-image-linear-gradient(to left, black 40%, transparent 100%)",
    all: "mask-image-radial-gradient(circle, black 40%, transparent 80%)",
  };

  return (
    <div className={cn("relative w-full h-full overflow-hidden pointer-events-none", className)}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        style={{ opacity: opacity }}
      />
      {/* The Fade Overlay */}
      <div className={cn("absolute inset-0 bg-linear-to-l from-bh-black via-bh-black/50 to-transparent", 
        fadeDirection === "left" && "bg-linear-to-l from-transparent to-bh-black",
        fadeDirection === "right" && "bg-linear-to-r from-transparent to-bh-black",
      )} />
    </div>
  );
}