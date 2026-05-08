"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { RumboMark } from "@/components/ui/RumboMark";

type Photo = {
  id: number;
  caption: string;
};

// Placeholder photos — replace with real photos in /public/galeria/.
const PHOTOS: Photo[] = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  caption: `RUMBO — registro ${String(i + 1).padStart(2, "0")}`,
}));

export function Galeria() {
  const [lightbox, setLightbox] = useState<Photo | null>(null);

  const youtubeId = process.env.NEXT_PUBLIC_YOUTUBE_LATEST_VIDEO;

  return (
    <section id="galeria" className="relative bg-bg py-24 md:py-32">
      <div className="container-rumbo">
        <SectionTitle eyebrow="04 — Visual">Galería</SectionTitle>

        <ul className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
          {PHOTOS.map((photo, i) => (
            <motion.li
              key={photo.id}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: (i % 8) * 0.04 }}
            >
              <button
                type="button"
                onClick={() => setLightbox(photo)}
                className="group relative block aspect-[4/5] w-full overflow-hidden border border-border bg-surface"
                aria-label={`Abrir foto ${photo.id}`}
              >
                <span
                  aria-hidden
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <RumboMark className="h-10 w-auto text-text/15 transition-all duration-500 group-hover:scale-110 group-hover:text-text/30" />
                </span>
                <span
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-bg/90 via-transparent to-transparent opacity-60"
                />
              </button>
            </motion.li>
          ))}
        </ul>

        {/* YouTube latest */}
        <div className="mt-20">
          <p className="eyebrow">Último video</p>
          <div className="mt-4 aspect-video w-full overflow-hidden border border-border bg-surface">
            {youtubeId ? (
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${youtubeId}`}
                title="Último video de RUMBO"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
                className="h-full w-full"
              />
            ) : (
              <div className="flex h-full w-full flex-col items-center justify-center gap-3 p-10 text-center">
                <RumboMark className="h-12 w-auto text-text/30" />
                <p className="font-mono text-xs uppercase tracking-widest2 text-muted">
                  Configurar NEXT_PUBLIC_YOUTUBE_LATEST_VIDEO
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-bg/95 p-6"
            onClick={() => setLightbox(null)}
            role="dialog"
            aria-modal="true"
            aria-label={lightbox.caption}
          >
            <button
              type="button"
              onClick={() => setLightbox(null)}
              aria-label="Cerrar"
              className="absolute right-6 top-6 font-mono text-xs uppercase tracking-widest2 text-text/70 hover:text-accent"
            >
              [ × ] Cerrar
            </button>
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative aspect-[4/5] w-full max-w-2xl border border-border bg-surface"
              onClick={(e) => e.stopPropagation()}
            >
              <span className="absolute inset-0 flex items-center justify-center">
                <RumboMark className="h-24 w-auto text-text/20" />
              </span>
              <span className="absolute bottom-4 left-4 font-mono text-xs uppercase tracking-widest2 text-text/70">
                {lightbox.caption}
              </span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
