import type { Metadata } from "next";
import { Space_Grotesk, Inter, Hind_Siliguri } from "next/font/google";
import { ReactLenis } from "lenis/react";
import dynamic from "next/dynamic";
import "lenis/dist/lenis.css";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AuthProvider from "@/components/AuthProvider";
import { LanguageProvider } from "@/components/LanguageProvider";
import "./globals.css";

// DYNAMIC IMPORT (No ssr: false needed - GlobalGrid is already client-side via useEffect)
const GlobalGrid = dynamic(() => import("@/components/layout/GlobalGrid"));

// English Fonts
const headingFont = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const bodyFont = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

// Bangla Font
const banglaFont = Hind_Siliguri({
  subsets: ["bengali"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-bangla",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Business Hub | Build. Connect. Discover.",
    template: "%s | Business Hub",
  },
  description:
    "A premium digital ecosystem connecting people, businesses, opportunities, and knowledge. Fast. Smooth. Useful.",
  keywords: [
    "Business Hub",
    "Marketplace",
    "Jobs",
    "Opportunities",
    "Digital Ecosystem",
    "B2B Platform",
  ],
  authors: [{ name: "Business Hub" }],
  creator: "Business Hub",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://businesshub.com",
    siteName: "Business Hub",
    title: "Business Hub | Build. Connect. Discover.",
    description:
      "A premium digital ecosystem connecting people, businesses, opportunities, and knowledge.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Business Hub Ecosystem",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Business Hub",
    description: "A premium digital ecosystem.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${headingFont.variable} ${bodyFont.variable} ${banglaFont.variable}`}
    >
      <body className="bg-bh-black text-bh-ivory font-body antialiased selection:bg-bh-red selection:text-bh-white flex flex-col min-h-screen relative overflow-x-clip">
        {/* LENIS SMOOTH SCROLL PROVIDER */}
        <ReactLenis root options={{ lerp: 0.05, smoothWheel: true }}>
          {/* GLOBAL INTERACTIVE GRID (Client-side via useEffect) */}
          <GlobalGrid />

          {/* Main Content Wrapper (Foreground Layer) */}
          <div className="relative z-10 flex flex-col min-h-screen w-full">
            <LanguageProvider>
              <AuthProvider>
                <Header />
                <main className="grow">{children}</main>
                <Footer />
              </AuthProvider>
            </LanguageProvider>
          </div>
        </ReactLenis>
      </body>
    </html>
  );
}