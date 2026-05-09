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
  const [showEgg, setShowEgg] = useState(false);
  const eggFiredRef = useRef(false);

  // Lazy-enable when in viewport
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
    allMaxed,
    play,
    pause,
    reset,
    toggleStem,
    setVolume,
    toggleSolo,
    getLevel,
  } = useStemPlayer({ enabled });

  // Easter egg trigger
  useEffect(() => {
    if (allMaxed && !eggFiredRef.current && loadState === "ready") {
      eggFiredRef.current = true;
      setShowEgg(true);
      const t = setTimeout(() => setShowEgg(false), 2400);
      return () => clearTimeout(t);
    }
    if (!allMaxed) {
      eggFiredRef.current = false;
    }
  }, [allMaxed, loadState]);

  // Background intensity based on active layers (0..1)
  const intensity = Math.min(activeCount / STEMS.length, 1);

  const trackName = meta.track ?? "Próxima canción";
  const stemsAvailable = meta.ready;

  return (
    <section
      id="arma-el-rumbo"
      ref={sectionRef}
      className="relative isolate overflow-hidden bg-bg py-24 md:py-32"
    >
      {/* Narrative background — darkens to lit gradient */}
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
          className="mt-8 max-w-xl text-balance text-lg text-text/80 md:text-xl"
        >
          Cada capa es parte de algo más grande. Armá el sonido.
        </motion.p>

        {/* Track name + progress */}
        <div className="mt-10 flex flex-col gap-2 border-y border-border py-4 md:flex-row md:items-center md:justify-between md:gap-6">
          <span className="font-display text-xl uppercase tracking-wider2 text-accent-2">
            {trackName}
          </span>
          <div className="flex items-center gap-3 font-mono text-xs text-muted">
            <span className="tabular-nums">{formatTime(currentTime)}</span>
            <span className="relative h-1 flex-1 bg-border md:w-72 md:flex-none">
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

        {/* Loading / unavailable state */}
        {!stemsAvailable && (
          <div className="mt-10 flex flex-col items-center gap-4 border border-dashed border-border bg-surface/40 p-12 text-center">
            <RumboMark className="h-12 w-auto text-text/30" />
            <p className="font-mono text-xs uppercase tracking-widest2 text-muted">
              Preparando capas
            </p>
            <p className="max-w-md text-sm text-text/60">
              El stem player se activa cuando subamos los archivos de audio.
              Mientras tanto, podés escucharnos en{" "}
              <a
                href="https://open.spotify.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-2 underline-offset-4 hover:underline"
              >
                Spotify
              </a>
              .
            </p>
          </div>
        )}

        {stemsAvailable && loadState !== "ready" && (
          <div className="mt-10 flex flex-col items-center gap-4 border border-dashed border-border bg-surface/40 p-12 text-center">
            <RumboMark className="h-10 w-auto text-text/30" />
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
              <button type="button" onClick={play} className="btn-ghost mt-2">
                {loadState === "error" ? "Reintentar" : "Cargar capas"}
              </button>
            )}
          </div>
        )}

        {/* Stem grid */}
        {stemsAvailable && (
          <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {STEMS.map((stem) => (
              <li key={stem.name}>
                <StemCard
                  stem={stem}
                  state={stems[stem.name]}
                  isSolo={solo === stem.name}
                  disabled={loadState !== "ready"}
                  getLevel={() => getLevel(stem.name)}
                  onToggle={() => toggleStem(stem.name)}
                  onVolume={(v) => setVolume(stem.name, v)}
                  onSolo={() => toggleSolo(stem.name)}
                />
              </li>
            ))}
          </ul>
        )}

        {/* Transport */}
        {stemsAvailable && (
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              onClick={isPlaying ? pause : play}
              disabled={loadState === "error"}
              className="btn-primary disabled:cursor-not-allowed disabled:opacity-50"
            >
              {isPlaying ? "❚❚ Pausar" : "▶ Reproducir"}
            </button>
            <button type="button" onClick={reset} className="btn-ghost">
              ↺ Resetear
            </button>
          </div>
        )}

        {/* Easter egg overlay */}
        {showEgg && (
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center"
          >
            {/* Particles */}
            {Array.from({ length: 24 }).map((_, i) => (
              <span
                key={i}
                className="stem-particle"
                style={{
                  left: `${(i / 24) * 100}%`,
                  animationDelay: `${(i % 6) * 0.15}s`,
                  animationDuration: `${1.6 + (i % 4) * 0.3}s`,
                }}
              />
            ))}
            <div className="stem-logo-pulse flex flex-col items-center gap-4">
              <RumboMark className="h-24 w-auto text-accent" />
              <span className="font-display text-3xl uppercase tracking-wider2 text-text md:text-5xl">
                Esto es RUMBO.
              </span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
