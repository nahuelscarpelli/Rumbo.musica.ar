"use client";

import { motion } from "framer-motion";
import { SOCIAL } from "@/lib/data";

const tagline = "MÚSICA ARGENTINA, SIN ETIQUETAS.";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative isolate flex min-h-[100svh] items-center justify-center overflow-hidden"
    >
      {/* Background video */}
      <div className="absolute inset-0 -z-10 overflow-hidden bg-bg">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 h-full w-full object-cover"
          aria-hidden
        >
          <source src="/hero/hero.mp4" type="video/mp4" />
        </video>

        {/* Dark overlay for legibility */}
        <div aria-hidden className="absolute inset-0 bg-bg/40" />
        {/* Color accent */}
        <div
          aria-hidden
          className="absolute inset-0 opacity-50"
          style={{
            background:
              "radial-gradient(circle at 70% 20%, rgba(192,57,43,0.18) 0%, transparent 45%), radial-gradient(circle at 20% 80%, rgba(232,213,183,0.06) 0%, transparent 50%)",
          }}
        />
        {/* Vignette bottom — fades into the next section */}
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-bg via-bg/70 to-transparent"
        />
      </div>

      <div className="container-rumbo relative flex flex-col items-center gap-10 py-32 text-center">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-7xl uppercase tracking-[0.04em] md:text-9xl lg:text-[10rem] lg:leading-[0.95]"
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
            Folclore <span className="text-accent">·</span> Sintetizadores{" "}
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
