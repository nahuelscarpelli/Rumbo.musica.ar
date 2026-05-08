"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { UPCOMING_DATES } from "@/lib/data";

export function Fechas() {
  return (
    <section id="fechas" className="relative py-24 md:py-32">
      <div className="container-rumbo">
        <SectionTitle eyebrow="03 — Agenda">Fechas</SectionTitle>

        {/* Upcoming */}
        <div className="mt-14">
          <p className="eyebrow">Próximas fechas</p>
          {UPCOMING_DATES.length === 0 ? (
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-4 max-w-xl text-text/60"
            >
              No hay fechas confirmadas en este momento. Para invitarnos a tocar o
              recibir avisos, escribinos desde{" "}
              <a href="#contacto" className="text-accent-2 underline-offset-4 hover:underline">
                la sección de contacto
              </a>
              .
            </motion.p>
          ) : (
            <ul className="mt-6 flex flex-col">
              {UPCOMING_DATES.map((d, i) => (
                <motion.li
                  key={`${d.event}-${i}`}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="grid grid-cols-1 gap-2 border-t border-border py-6 last:border-b md:grid-cols-[160px_1fr_auto] md:items-center md:gap-8"
                >
                  <span className="font-display text-2xl uppercase tracking-wider2 text-accent-2">
                    {d.date}
                  </span>
                  <div className="flex flex-col">
                    <span className="font-display text-xl uppercase tracking-wider2 md:text-2xl">
                      {d.event}
                    </span>
                    <span className="font-mono text-xs uppercase tracking-widest2 text-muted">
                      {d.location}
                    </span>
                  </div>
                  {d.ticketUrl && (
                    <a
                      href={d.ticketUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-ghost justify-self-start md:justify-self-end"
                    >
                      Entradas
                    </a>
                  )}
                </motion.li>
              ))}
            </ul>
          )}
        </div>

      </div>
    </section>
  );
}
