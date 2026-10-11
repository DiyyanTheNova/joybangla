import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bh: {
          black: "#111111",      // Primary environment, nav, hero, footer
          red: "#C1121F",        // CTA, active state, attention
          gold: "#D4AF37",       // Premium micro-accent
          ivory: "#F2EDE3",      // Reading surfaces, archive
          white: "#FFFFFF",      // Contrast, clean content areas
        },
      },
      fontFamily: {
        heading: ["var(--font-heading)", "sans-serif"], // Space Grotesk
        body: ["var(--font-body)", "sans-serif"],       // Inter
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      }
    },
  },
  plugins: [],
};
export default config;