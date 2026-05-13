"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { RumboMark } from "@/components/ui/RumboMark";
import { STEMS } from "@/lib/stems";
import { useStemPlayer } from "@/hooks/useStemPlayer";
import { StemCard } from "./stem/StemCard";

function formatTime(s: number): string {
  if (!Number.isFinite(s) || s < 0) return "0:00";
  const m = Math.floor(s / 60);
  const sec = Math.floor(s % 60);
  return `${m}:${sec.toString().padStart(2, "0")}`;
}

export function StemPlayer() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setEnabled(true);
            obs.disconnect();
            break;
          }
        }
      },
      { rootMargin: "200px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const {
    meta,
    loadState,
    loadProgress,
    stems,
    solo,
    isPlaying,
    currentTime,
    duration,
    activeCount,
    play,
    pause,
    reset,
    toggleStem,
    setVolume,
    toggleSolo,
  } = useStemPlayer({ enabled });

  const intensity = Math.min(activeCount / STEMS.length, 1);
  const trackName = meta.track ?? "Próxima canción";
  const stemsAvailable = meta.ready;
  const ready = stemsAvailable && loadState === "ready";

  return (
    <section
      id="arma-el-rumbo"
      ref={sectionRef}
      className="relative isolate overflow-hidden bg-bg py-14 md:py-20"
    >
      <div
        aria-hidden
        className="absolute inset-0 -z-10 transition-[opacity,background] duration-1000"
        style={{
          background: `radial-gradient(circle at 50% 30%, rgba(192,57,43,${
            0.04 + intensity * 0.12
          }) 0%, transparent 55%), radial-gradient(circle at 50% 70%, rgba(41,128,185,${
            0.05 + intensity * 0.1
          }) 0%, transparent 60%)`,
        }}
      />

      <div className="container-rumbo relative">
        <SectionTitle eyebrow="Interactivo">Armá el Rumbo</SectionTitle>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mt-4 max-w-xl text-balance text-sm text-text/80 md:text-base"
        >
          Cada capa es parte de algo más grande. Armá el sonido.
        </motion.p>

        {/* Header: track / transport / progress */}
        <div className="mt-6 flex flex-col gap-3 border-y border-border py-3 md:flex-row md:items-center md:gap-6">
          <span className="font-display text-base uppercase tracking-wider2 text-accent-2 md:text-lg">
            {trackName}
          </span>

          {ready && (
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={isPlaying ? pause : play}
                aria-label={isPlaying ? "Pausar" : "Reproducir"}
                className="grid h-9 w-9 place-items-center border border-text/60 text-sm transition-colors hover:border-accent hover:text-accent"
              >
                {isPlaying ? "❚❚" : "▶"}
              </button>
              <button
                type="button"
                onClick={reset}
                aria-label="Resetear"
                className="grid h-9 w-9 place-items-center border border-border text-sm text-text/60 transition-colors hover:border-text hover:text-text"
              >
                ↺
              </button>
            </div>
          )}

          <div className="flex items-center gap-2 font-mono text-xs text-muted md:ml-auto">
            <span className="tabular-nums">{formatTime(currentTime)}</span>
            <span className="relative h-1 flex-1 bg-border md:w-48 md:flex-none">
              <span
                className="absolute inset-y-0 left-0 bg-accent transition-[width] duration-100"
                style={{
                  width: duration > 0 ? `${(currentTime / duration) * 100}%` : "0%",
                }}
              />
            </span>
            <span className="tabular-nums">{formatTime(duration)}</span>
          </div>
        </div>

        {/* States: stems unavailable / loading / error */}
        {!stemsAvailable && (
          <div className="mt-6 flex flex-col items-center gap-3 border border-dashed border-border bg-surface/40 p-6 text-center">
            <RumboMark className="h-9 w-auto text-text/30" />
            <p className="font-mono text-xs uppercase tracking-widest2 text-muted">
              Preparando capas
            </p>
            <p className="max-w-md text-sm text-text/60">
              El stem player se activa cuando subamos los archivos de audio.
            </p>
          </div>
        )}

        {stemsAvailable && loadState !== "ready" && (
          <div className="mt-6 flex flex-col items-center gap-3 border border-dashed border-border bg-surface/40 p-6 text-center">
            <p className="font-mono text-xs uppercase tracking-widest2 text-muted">
              {loadState === "error"
                ? "No se pudieron cargar las capas"
                : loadState === "loading"
                  ? `Cargando capas… ${loadProgress}%`
                  : "Listo para empezar"}
            </p>
            {loadState === "loading" && (
              <span className="block h-1 w-64 overflow-hidden bg-border">
                <span
                  className="block h-full bg-accent-2 transition-[width] duration-200"
                  style={{ width: `${loadProgress}%` }}
                />
              </span>
            )}
            {(loadState === "idle" || loadState === "error") && (
              <button type="button" onClick={play} className="btn-ghost mt-1">
                {loadState === "error" ? "Reintentar" : "Cargar capas"}
              </button>
            )}
          </div>
        )}

        {/* Mixer console: 6 vertical channels */}
        {ready && (
          <ul className="mt-6 flex justify-between gap-1.5 sm:gap-3">
            {STEMS.map((stem) => (
              <li key={stem.name} className="flex-1">
                <StemCard
                  stem={stem}
                  state={stems[stem.name]}
                  isSolo={solo === stem.name}
                  disabled={loadState !== "ready"}
                  onToggle={() => toggleStem(stem.name)}
                  onVolume={(v) => setVolume(stem.name, v)}
                  onSolo={() => toggleSolo(stem.name)}
                />
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
