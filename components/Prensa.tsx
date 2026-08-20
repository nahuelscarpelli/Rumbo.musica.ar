"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { CONTACT } from "@/lib/data";

export function Prensa() {
  return (
    <section id="prensa" className="relative bg-bg py-24 md:py-32">
      <div className="container-rumbo">
        <SectionTitle eyebrow="05 — EPK">Prensa</SectionTitle>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mt-8 max-w-2xl text-balance text-lg text-text/80"
        >
          Material para organizadores y medios.
        </motion.p>

        <div className="mt-10 flex flex-col gap-6 border border-border bg-surface p-8 lg:max-w-2xl">
          <div>
            <p className="eyebrow">EPK completo</p>
            <p className="mt-3 text-sm text-text/70">
              Biografía, integrantes, antecedentes, rider técnico, fotos en alta
              y dossier descargable en una sola página. Pensada para prensa y
              programación.
            </p>
            <Link href="/prensa" className="btn-primary mt-6 self-start">
              Ir al EPK →
            </Link>
          </div>
          <div className="divider-diag" />
          <div>
            <p className="eyebrow">Marca registrada</p>
            <p className="mt-3 font-display text-2xl uppercase tracking-wider2">
              {CONTACT.inpi}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
