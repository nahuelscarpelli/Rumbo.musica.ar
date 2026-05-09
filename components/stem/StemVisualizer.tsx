"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  active: boolean;
  color: string;
  /** 0..1 sample provider, polled every animation frame while active */
  getLevel: () => number;
  /** When true, renders bigger (used for SOLO state) */
  expanded?: boolean;
};

const BAR_COUNT = 7;

export function StemVisualizer({ active, color, getLevel, expanded = false }: Props) {
  const [levels, setLevels] = useState<number[]>(() => Array(BAR_COUNT).fill(0));
  const reducedMotion = useReducedMotion();
  const targetsRef = useRef<number[]>(Array(BAR_COUNT).fill(0));

  useEffect(() => {
    if (!active || reducedMotion) {
      setLevels(Array(BAR_COUNT).fill(active ? 0.25 : 0));
      return;
    }
    let raf = 0;
    let frame = 0;
    const tick = () => {
      const lvl = getLevel();
      // Generate a slightly different per-bar value using offsets
      frame = (frame + 1) % 1024;
      const next = targetsRef.current.map((prev, i) => {
        const phase = (Math.sin((frame + i * 13) / 6) + 1) / 2;
        const target = Math.max(0.08, lvl * (0.5 + phase * 0.7));
        return prev + (target - prev) * 0.35;
      });
      targetsRef.current = next;
      setLevels(next);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, getLevel, reducedMotion]);

  const height = expanded ? 56 : 40;
  const barW = 4;
  const gap = 4;
  const totalW = BAR_COUNT * barW + (BAR_COUNT - 1) * gap;

  return (
    <svg
      role="presentation"
      aria-hidden
      viewBox={`0 0 ${totalW} ${height}`}
      className="block w-full"
      style={{ height: `${height}px` }}
    >
      {levels.map((lvl, i) => {
        const h = Math.max(2, lvl * height);
        return (
          <rect
            key={i}
            x={i * (barW + gap)}
            y={(height - h) / 2}
            width={barW}
            height={h}
            rx={1}
            fill={color}
            opacity={active ? 1 : 0.25}
          />
        );
      })}
    </svg>
  );
}

function useReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const handler = () => setReduced(mq.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);
  return reduced;
}
