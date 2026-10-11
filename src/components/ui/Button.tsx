"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "default" | "sm" | "lg";
  children: React.ReactNode;
}

export default function Button({ 
  variant = "primary", 
  size = "default", 
  className, 
  children, 
  ...props 
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center font-heading uppercase tracking-wider transition-all duration-300 ease-smooth rounded-sm disabled:opacity-50 disabled:pointer-events-none focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-brand-lavender/30";
  
      const variants = {
    primary: "bg-bh-red text-bh-white hover:bg-bh-red/90 shadow-lg shadow-bh-red/20 active:translate-y-[1px]",
    secondary: "bg-transparent border border-bh-ivory/30 text-bh-ivory hover:bg-bh-white/5 hover:border-bh-ivory",
    ghost: "bg-transparent text-bh-ivory/70 hover:text-bh-ivory hover:bg-bh-white/5",
       };
  const sizes = {
    default: "h-12 px-8 text-sm",
    sm: "h-9 px-5 text-xs",
    lg: "h-14 px-10 text-base",
  };

  return (
    <button 
      className={cn(baseStyles, variants[variant], sizes[size], className)} 
      {...props}
    >
      {children}
    </button>
  );
}