"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";

const navLinks = [
  { name: "Expertise", href: "/expertise", bn: "দক্ষতা" },
  { name: "Projects", href: "/projects", bn: "প্রকল্প" },
  { name: "Agency", href: "/agency", bn: "এজেন্সি" },
  { name: "Contact", href: "/contact", bn: "যোগাযোগ" },
];

export default function Header() {
  const { language, setLanguage } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? "bg-bh-black/95 backdrop-blur-md py-4 border-b border-bh-white/10" 
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative w-32 h-10 flex items-center">
            <Image
              src="/bh-logo.png"
              alt="Business Hub"
              width={35}
              height={25}
              className="object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="font-heading text-xs uppercase tracking-[0.15em] text-bh-ivory/80 hover:text-bh-red transition-colors duration-300 cursor-pointer"
              >
                {language === "bn" ? link.bn : link.name}
              </Link>
            ))}
          </nav>

          {/* Right Side Actions - Registration & Language */}
          <div className="hidden md:flex items-center gap-6">
            {/* Registration Button */}
            <Link
              href="/join"
              className="px-6 py-2.5 bg-bh-red text-white font-heading text-xs uppercase tracking-wider hover:bg-bh-red/90 transition-all duration-300 border border-bh-red hover:border-bh-red/50"
            >
              {language === "bn" ? "নিবন্ধন" : "Register"}
            </Link>

            {/* Language Switcher - Far Right Corner */}
            <div className="flex items-center gap-3 pl-6 border-l border-bh-white/20">
              <button
                onClick={() => setLanguage("en")}
                className={`font-heading text-xs uppercase tracking-wider cursor-pointer transition-colors ${
                  language === "en" ? "text-bh-red font-bold" : "text-bh-ivory/40 hover:text-bh-ivory"
                }`}
              >
                EN
              </button>
              <span className="text-bh-white/20">|</span>
              <button
                onClick={() => setLanguage("bn")}
                className={`font-heading text-xs uppercase tracking-wider cursor-pointer transition-colors ${
                  language === "bn" ? "text-bh-red font-bold" : "text-bh-ivory/40 hover:text-bh-ivory"
                }`}
              >
                BN
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="md:hidden p-2 text-bh-ivory hover:text-bh-red transition-colors"
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-60 bg-bh-black flex flex-col p-6">
          <div className="flex justify-between items-center mb-12">
            <span className="font-heading text-2xl font-bold text-bh-red uppercase">
              BUSINESS HUB
            </span>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 text-bh-ivory hover:text-bh-red"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>
          
          {/* Registration Button in Mobile */}
          <Link
            href="/join"
            onClick={() => setIsMobileMenuOpen(false)}
            className="w-full mb-8 px-6 py-3 bg-bh-red text-white font-heading text-sm uppercase tracking-wider text-center hover:bg-bh-red/90 transition-colors"
          >
            {language === "bn" ? "নিবন্ধন করুন" : "Register Now"}
          </Link>
          
          {/* Language Switcher in Mobile Menu */}
          <div className="flex gap-4 mb-8 pb-8 border-b border-bh-white/10">
            <button
              onClick={() => setLanguage("en")}
              className={`px-4 py-2 rounded-sm font-heading text-sm uppercase tracking-wider border ${
                language === "en"
                  ? "text-bh-red border-bh-red/50 bg-bh-red/10"
                  : "text-bh-ivory/60 border-bh-white/10"
              }`}
            >
              English
            </button>
            <button
              onClick={() => setLanguage("bn")}
              className={`px-4 py-2 rounded-sm font-heading text-sm uppercase tracking-wider border ${
                language === "bn"
                  ? "text-bh-red border-bh-red/50 bg-bh-red/10"
                  : "text-bh-ivory/60 border-bh-white/10"
              }`}
            >
              বাংলা
            </button>
          </div>
          
          <nav className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-heading text-3xl uppercase text-bh-ivory hover:text-bh-red transition-colors"
              >
                {language === "bn" ? link.bn : link.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}