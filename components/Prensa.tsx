"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { CONTACT } from "@/lib/data";

const DOWNLOADS = [
  {
    label: "Gacetilla de prensa",
    href: "/rumbo-gacetilla.pdf",
    description: "PDF — biografía, información del show y notas para medios.",
  },
  {
    label: "Rider técnico",
    href: "/rumbo-rider.pdf",
    description: "PDF — requerimientos técnicos para producción de eventos.",
  },
  {
    label: "Fotos en alta resolución",
    href: "https://drive.google.com/drive/u/2/folders/1Sb5F2dBX6LI4m4wyoUG7ZWdYubbfuD5x",
    description: "Carpeta de Drive — fotos de prensa y de show en alta resolución.",
    external: true,
  },
];

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
          Materiales para organizadores y medios. Disponibles a pedido o por
          descarga directa.
        </motion.p>

        <div className="mt-12 grid gap-px bg-border md:grid-cols-3">
          {DOWNLOADS.map((d, i) => (
            <motion.a
              key={d.label}
              href={d.href}
              {...(d.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : { download: true })}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group flex flex-col gap-3 bg-bg p-8 transition-colors duration-300 hover:bg-surface"
            >
              <span className="font-mono text-[10px] uppercase tracking-widest2 text-accent group-hover:text-accent-2">
                ↓ Descargar
              </span>
              <span className="font-display text-2xl uppercase tracking-wider2">
                {d.label}
              </span>
              <span className="text-sm text-text/60">{d.description}</span>
            </motion.a>
          ))}
        </div>

        <div className="mt-16 flex flex-col gap-6 border border-border bg-surface p-8 lg:max-w-2xl">
          <div>
            <p className="eyebrow">Marca registrada</p>
            <p className="mt-3 font-display text-2xl uppercase tracking-wider2">
              {CONTACT.inpi}
            </p>
          </div>
          <div className="divider-diag" />
          <div>
            <p className="eyebrow">EPK ampliado</p>
            <p className="mt-3 text-sm text-text/70">
              ¿Querés más información, biografía completa, links a streaming y
              materiales editoriales?
            </p>
            <Link href="/prensa" className="btn-ghost mt-5 self-start">
              Ver EPK completo
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
