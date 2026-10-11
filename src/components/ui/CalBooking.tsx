"use client";

import { useEffect } from "react";
import Script from "next/script";

interface CalBookingProps {
  calLink: string;
}

export default function CalBooking({ calLink }: CalBookingProps) {
  useEffect(() => {
    const initCal = () => {
      if (typeof window !== "undefined" && (window as any).Cal) {
        (window as any).Cal("init", { origin: "https://cal.com" });
        (window as any).Cal("inline", {
          elementOrSelector: "#my-cal-inline",
          calLink: calLink,
          config: { layout: "month_view", theme: "dark" }
        });
      }
    };

    const script = document.querySelector('script[src="https://cal.com/embed.js"]');
    if (script) {
      initCal();
    } else {
      window.addEventListener("cal-api-script-loaded", initCal);
    }

    return () => {
      window.removeEventListener("cal-api-script-loaded", initCal);
    };
  }, [calLink]);

  return (
    <>
      <Script 
        src="https://cal.com/embed.js" 
        strategy="afterInteractive"
        onLoad={() => {
          if (typeof window !== "undefined" && (window as any).Cal) {
            (window as any).Cal("init", { origin: "https://cal.com" });
            (window as any).Cal("inline", {
              elementOrSelector: "#my-cal-inline",
              calLink: calLink,
              config: { layout: "month_view", theme: "dark" }
            });
          }
        }}
      />
      <div id="my-cal-inline" className="w-full min-h-150 bg-bh-black border border-bh-white/10 rounded-sm" />
    </>
  );
}