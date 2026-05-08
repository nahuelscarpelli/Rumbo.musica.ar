"use client";

import { useEffect, useState } from "react";

export function Cursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return;
    setEnabled(true);

    const handler = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, []);

  if (!enabled) return null;

  return (
    <>
      <div
        aria-hidden
        style={{ transform: `translate(${pos.x}px, ${pos.y}px)` }}
        className="pointer-events-none fixed left-0 top-0 z-[9998] -ml-[3px] -mt-[3px] h-1.5 w-1.5 rounded-full bg-accent transition-transform duration-75 ease-out"
      />
      <div
        aria-hidden
        style={{ transform: `translate(${pos.x}px, ${pos.y}px)` }}
        className="pointer-events-none fixed left-0 top-0 z-[9997] -ml-5 -mt-5 h-10 w-10 rounded-full border border-text/30 transition-transform duration-300 ease-out"
      />
    </>
  );
}
