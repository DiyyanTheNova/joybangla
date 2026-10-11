"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { X } from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  links: { name: string; href: string }[];
}

export default function MobileMenu({ isOpen, onClose, links }: MobileMenuProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-60 bg-brand-cream flex flex-col"
    >
      {/* Header of Mobile Menu */}
      <div className="flex items-center justify-between px-6 py-6">
        <Link href="/" className="relative w-32 h-10 flex items-center">
          <Image
            src="/bh-logo.png"
            alt="Business Hub"
            width={40}
            height={20}
            className="object-contain"
            priority
          />
        </Link>
        <button
          onClick={onClose}
          className="p-2 text-brand-maroon hover:bg-brand-maroon/5 rounded-full transition-colors"
          aria-label="Close menu"
        >
          <X size={24} />
        </button>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 flex flex-col justify-center px-6 md:px-12 gap-8">
        {links.map((link, index) => (
          <motion.div
            key={link.name}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 + index * 0.1, duration: 0.4 }}
          >
            <Link
              href={link.href}
              onClick={onClose}
              className="font-heading text-4xl md:text-6xl uppercase tracking-tight text-brand-maroon hover:text-brand-lavender transition-colors duration-300"
            >
              {link.name}
            </Link>
          </motion.div>
        ))}
      </nav>

      {/* Footer of Mobile Menu */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="px-6 pb-12 flex items-center gap-6"
      >
        <span className="font-heading text-sm uppercase tracking-wider text-brand-maroon border-b border-brand-maroon pb-1">EN</span>
        <span className="font-heading text-sm uppercase tracking-wider text-brand-maroon/40">FR</span>
      </motion.div>
    </motion.div>
  );
}