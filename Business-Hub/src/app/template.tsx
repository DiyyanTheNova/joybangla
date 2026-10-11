"use client";

import ShojiDoorTransition from "@/components/layout/ShojiDoorTransition";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ShojiDoorTransition />
      <main className="relative z-10">
        {children}
      </main>
    </>
  );
}