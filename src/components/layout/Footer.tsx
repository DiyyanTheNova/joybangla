import Link from "next/link";
import Image from "next/image";
import { Camera, Mail, ExternalLink } from "lucide-react";

const footerLinks = {
  explore: [
    { name: "Marketplace", href: "/marketplace" },
    { name: "Jobs", href: "/jobs" },
    { name: "Opportunities", href: "/opportunities" },
    { name: "Research", href: "/research" },
  ],
  business: [
    { name: "Business Hub", href: "/business" },
    { name: "Collaboration", href: "/collaboration" },
    { name: "Partnerships", href: "/partnerships" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Ivory Archive", href: "/archive" },
    { name: "Contact", href: "/contact" },
    { name: "Built By", href: "/builder" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
  ],
};

export default function Footer() {
  return (
    <footer className="relative bg-bh-black border-t border-bh-white/10 pt-20 pb-12 px-6 md:px-12 overflow-hidden">
      
      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Background Image */}
        <Image
          src="/images/footer-cranes.png" // Replace with your actual footer background image
          alt=""
          fill
          className="object-cover opacity-20"
          priority
        />
        
        {/* Dark Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-linear-to-t from-bh-black via-bh-black/95 to-bh-black/90" />
        
        {/* Subtle gradient accent */}
        <div className="absolute inset-0 bg-linear-to-br from-bh-red/5 via-transparent to-bh-gold/5" />
        
        {/* Decorative pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03]" 
             style={{
               backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
               backgroundSize: '40px 40px'
             }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Top Grid: Brand & Links */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="md:col-span-4 space-y-6">
            
            {/* BH Logo */}
            <Link href="/" className="inline-block">
              <div className="flex items-center gap-3">
                <Image 
                  src="/images/bh-logo.png" 
                  alt="Business Hub Logo"
                  width={40} 
                  height={40}
                  className="object-contain"
                  priority
                />
                <span className="font-heading text-xl text-bh-white">
                  Business<span className="text-bh-red">Hub</span>
                </span>
              </div>
            </Link>
            
            <p className="font-body text-sm text-bh-ivory/60 max-w-xs leading-relaxed">
              A premium digital ecosystem connecting people, businesses, opportunities, and knowledge. Fast. Smooth. Useful.
            </p>
            
            {/* Social & Contact Links */}
            <div className="flex gap-4 pt-2">
              <a
                href="https://www.instagram.com/the_ariel_888/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center border border-bh-white/10 text-bh-ivory/50 hover:text-bh-red hover:border-bh-red transition-all duration-300"
                aria-label="Instagram"
              >
                <Camera size={18} strokeWidth={1.5} />
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=phoniexfnarr888@gmail.com"
                className="w-10 h-10 flex items-center justify-center border border-bh-white/10 text-bh-ivory/50 hover:text-bh-red hover:border-bh-red transition-all duration-300"
                aria-label="Email"
              >
                <Mail size={18} strokeWidth={1.5} />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center border border-bh-white/10 text-bh-ivory/50 hover:text-bh-red hover:border-bh-red transition-all duration-300"
                aria-label="Portfolio"
              >
                <ExternalLink size={18} strokeWidth={1.5} />
              </a>
            </div>
          </div>
          
          {/* Link Columns */}
          <div className="md:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-heading text-xs uppercase tracking-wider text-bh-ivory mb-6">
                EXPLORE
              </h4>
              <ul className="space-y-4">
                {footerLinks.explore.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href} 
                      className="font-body text-sm text-bh-ivory/50 hover:text-bh-red transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-heading text-xs uppercase tracking-wider text-bh-ivory mb-6">
                BUSINESS
              </h4>
              <ul className="space-y-4">
                {footerLinks.business.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href} 
                      className="font-body text-sm text-bh-ivory/50 hover:text-bh-red transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-heading text-xs uppercase tracking-wider text-bh-ivory mb-6">
                COMPANY
              </h4>
              <ul className="space-y-4">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href} 
                      className="font-body text-sm text-bh-ivory/50 hover:text-bh-red transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-heading text-xs uppercase tracking-wider text-bh-ivory mb-6">
                LEGAL
              </h4>
              <ul className="space-y-4">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href} 
                      className="font-body text-sm text-bh-ivory/50 hover:text-bh-red transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-bh-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body text-xs text-bh-ivory/40">
            © {new Date().getFullYear()} Business Hub. All rights reserved.
          </p>
          <p className="font-body text-xs text-bh-ivory/40">
            Designed with purpose. Built for scale.
          </p>
        </div>
        
        {/* Creator Credit */}
        <div className="border-t border-bh-white/10 pt-8 mt-8 text-center">
          <p className="font-body text-xs text-bh-ivory/40 mb-2">
            Built with precision using Next.js, Sanity CMS & AI collaboration
          </p>
          <p className="font-body text-xs text-bh-ivory/30">
            © {new Date().getFullYear()} Business Hub. Crafted by [Ariel.Mew].
          </p>
        </div>
      </div>
    </footer>
  );
}