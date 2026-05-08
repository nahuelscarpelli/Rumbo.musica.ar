"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { MEMBERS, SOUND_TAGS } from "@/lib/data";

export function Nosotros() {
  return (
    <section id="nosotros" className="relative bg-bg py-24 md:py-32">
      {/* Section divider — diagonal hint */}
      <div aria-hidden className="container-rumbo">
        <div className="divider-diag mb-20" />
      </div>

      <div className="container-rumbo">
        <SectionTitle eyebrow="02 — La banda">Nosotros</SectionTitle>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mt-10 max-w-3xl text-balance text-lg text-text/80 md:text-xl"
        >
          RUMBO es una banda mendocina que reinterpreta el folclore argentino
          fusionando géneros tradicionales con sonidos modernos. Incorporamos
          batería, guitarra eléctrica, bajo y sintetizadores a nuestra identidad
          sonora, sin perder la esencia de nuestras raíces.
        </motion.p>

        {/* Members grid */}
        <ul className="mt-16 grid grid-cols-1 gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
          {MEMBERS.map((m, i) => (
            <motion.li
              key={m.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.06 }}
              className="group relative flex flex-col gap-5 bg-bg p-8 transition-colors duration-300 hover:bg-surface"
            >
              <div className="relative aspect-square w-full overflow-hidden border border-border bg-surface">
                {m.image ? (
                  <Image
                    src={m.image}
                    alt={`${m.name} — ${m.role}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover grayscale-[0.3] transition-all duration-700 group-hover:scale-[1.04] group-hover:grayscale-0"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-display text-7xl uppercase tracking-wider2 text-text/15 transition-all duration-500 group-hover:scale-110 group-hover:text-text/30">
                      {m.initials}
                    </span>
                  </div>
                )}
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-br from-transparent via-bg/20 to-bg/70 transition-opacity duration-500 group-hover:opacity-60"
                />
                <div className="absolute inset-x-0 bottom-0 flex translate-y-2 flex-col gap-1 bg-gradient-to-t from-bg/95 to-transparent p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <span className="font-display text-lg uppercase tracking-wider2">
                    {m.name}
                  </span>
                </div>
              </div>
              <div>
                <h3 className="font-display text-2xl uppercase tracking-wider2">{m.name}</h3>
                <p className="mt-1 font-mono text-xs uppercase tracking-widest2 text-muted">
                  {m.role}
                </p>
              </div>
            </motion.li>
          ))}
        </ul>

        {/* Sound identity */}
        <div className="mt-20 border-y border-border py-10">
          <p className="eyebrow">Identidad sonora</p>
          <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-3">
            {SOUND_TAGS.map((tag, i) => (
              <motion.li
                key={tag}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className="flex items-center gap-2 font-display text-2xl uppercase tracking-wider2 md:text-3xl"
              >
                <span aria-hidden className="block h-1.5 w-1.5 rotate-45 bg-accent" />
                {tag}
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
