"use client";

import { motion } from "framer-motion";
import { RumboLogo } from "@/components/ui/RumboLogo";
import { SOCIAL } from "@/lib/data";

const tagline = "MÚSICA ARGENTINA, SIN ETIQUETAS.";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden"
    >
      {/* Background image fallback + dark gradient */}
      <div className="absolute inset-0 -z-10">
        <div
          aria-hidden
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,#1a0d0a_0%,#0a0a0a_55%,#000_100%)]"
        />
        {/* Subtle moving gradient highlight */}
        <div
          aria-hidden
          className="absolute inset-0 opacity-40"
          style={{
            background:
              "radial-gradient(circle at 70% 20%, rgba(192,57,43,0.18) 0%, transparent 45%), radial-gradient(circle at 20% 80%, rgba(232,213,183,0.06) 0%, transparent 50%)",
          }}
        />
        {/* Vignette bottom */}
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-bg via-bg/80 to-transparent"
        />
        {/* Mountain silhouette accent (geometric, inspired by logo) */}
        <svg
          aria-hidden
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          className="absolute inset-x-0 bottom-0 h-44 w-full text-bg/95"
        >
          <path
            fill="currentColor"
            d="M0,256 L160,176 L260,224 L420,128 L600,224 L760,96 L920,224 L1100,160 L1260,224 L1440,176 L1440,320 L0,320 Z"
          />
        </svg>
      </div>

      <div className="container-rumbo relative flex flex-col items-center gap-10 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <RumboLogo
            showWordmark={false}
            className="mx-auto h-20 w-auto text-text md:h-28"
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.1, delay: 0.1 }}
          className="font-display text-6xl uppercase tracking-widest2 md:text-9xl"
          aria-label="RUMBO"
        >
          <span className="inline-flex">
            {"RUMBO".split("").map((ch, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 + i * 0.07, ease: [0.22, 1, 0.36, 1] }}
              >
                {ch}
              </motion.span>
            ))}
          </span>
        </motion.h1>

        <div className="flex flex-col items-center gap-4">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.7 }}
            className="font-display text-lg uppercase tracking-widest2 text-text/90 md:text-2xl"
            aria-label={tagline}
          >
            <span className="inline-flex flex-wrap justify-center gap-x-2 gap-y-1">
              {tagline.split(" ").map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + i * 0.08 }}
                >
                  {word}
                </motion.span>
              ))}
            </span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="font-mono text-xs uppercase tracking-widest2 text-muted md:text-sm"
          >
            Folclore <span className="text-accent">·</span> Electrónica{" "}
            <span className="text-accent">·</span> Identidad
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="mt-4 flex flex-col gap-3 sm:flex-row"
        >
          <a
            href={SOCIAL.spotify}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            <span aria-hidden>▶</span>
            Escuchanos
          </a>
          <a href="#show" className="btn-ghost">
            Ver el show
          </a>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <div
        aria-hidden
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted"
      >
        <span className="font-mono text-[10px] uppercase tracking-widest2">scroll</span>
        <span className="block h-8 w-px animate-scroll-hint bg-text/40" />
      </div>
    </section>
  );
}
