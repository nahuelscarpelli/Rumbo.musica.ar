"use client";

import { motion } from "framer-motion";
import { ACTS, UPCOMING_DATES } from "@/lib/data";

export function Show() {
  const featured = UPCOMING_DATES.find((d) => d.featured) ?? UPCOMING_DATES[0];
  const ticketUrl = featured?.ticketUrl;

  return (
    <section
      id="show"
      className="relative overflow-hidden bg-show-bg py-24 md:py-36"
    >
      {/* Starfield + gradient */}
      <div aria-hidden className="absolute inset-0 starfield opacity-60" />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-bg via-show-bg to-bg"
      />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 80% 10%, rgba(232,213,183,0.08) 0%, transparent 40%), radial-gradient(circle at 15% 90%, rgba(192,57,43,0.10) 0%, transparent 45%)",
        }}
      />

      <div className="container-rumbo relative">
        <motion.span
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="eyebrow flex items-center gap-3 before:block before:h-px before:w-8 before:bg-accent-2"
        >
          Concierto teatral
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mt-4 font-display text-5xl uppercase tracking-wider2 text-text-balance md:text-8xl lg:text-[8rem] lg:leading-[0.95]"
        >
          Del Silencio
          <br />
          <span className="text-accent-2">a la Luna</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-8 font-mono text-sm uppercase tracking-widest2 text-text/70"
        >
          Nave Cultural · Mendoza
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-10 max-w-2xl text-lg text-text/80 md:text-xl"
        >
          Un arco dramático en cinco actos. De la oscuridad total a la luz plena.
          Folclore, electrónica y danza en escena.
        </motion.p>

        {/* Timeline — horizontal on desktop, vertical on mobile */}
        <div className="mt-20">
          {/* Desktop horizontal timeline */}
          <div className="hidden md:block">
            <div className="relative">
              <div className="absolute left-0 right-0 top-12 h-px bg-gradient-to-r from-transparent via-text/30 to-transparent" />
              <ul className="grid grid-cols-5 gap-6">
                {ACTS.map((act, i) => (
                  <motion.li
                    key={act.number}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    className="relative flex flex-col items-center text-center"
                  >
                    {/* Dot */}
                    <span
                      className="relative z-10 flex h-6 w-6 items-center justify-center rounded-full border border-text/40"
                      style={{
                        background: `radial-gradient(circle, rgba(232,213,183,${0.1 + i * 0.18}) 0%, transparent 70%)`,
                      }}
                    >
                      <span
                        className="block h-2 w-2 rounded-full bg-accent-2"
                        style={{ opacity: 0.3 + i * 0.15 }}
                      />
                    </span>
                    <span className="mt-6 font-display text-2xl uppercase tracking-wider2 text-accent-2">
                      Acto {act.number}
                    </span>
                    <h3 className="mt-2 font-display text-3xl uppercase tracking-wider2">
                      {act.title}
                    </h3>
                    <p className="mt-3 text-sm text-text/70">{act.tagline}</p>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>

          {/* Mobile vertical timeline */}
          <ol className="md:hidden relative ml-3 border-l border-text/20 pl-6">
            {ACTS.map((act, i) => (
              <motion.li
                key={act.number}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative pb-10 last:pb-0"
              >
                <span
                  className="absolute -left-[33px] top-1 flex h-4 w-4 items-center justify-center rounded-full border border-text/40 bg-show-bg"
                >
                  <span
                    className="block h-1.5 w-1.5 rounded-full bg-accent-2"
                    style={{ opacity: 0.3 + i * 0.15 }}
                  />
                </span>
                <p className="font-display text-lg uppercase tracking-wider2 text-accent-2">
                  Acto {act.number}
                </p>
                <h3 className="font-display text-2xl uppercase tracking-wider2">
                  {act.title}
                </h3>
                <p className="mt-2 text-sm text-text/70">{act.tagline}</p>
              </motion.li>
            ))}
          </ol>
        </div>

        <div className="mt-16 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
          {ticketUrl ? (
            <a
              href={ticketUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Quiero mi entrada
            </a>
          ) : (
            <a href="#fechas" className="btn-primary">
              Quiero mi entrada
            </a>
          )}
          <a href="#contacto" className="btn-ghost">
            Programar el show
          </a>
        </div>
      </div>
    </section>
  );
}
