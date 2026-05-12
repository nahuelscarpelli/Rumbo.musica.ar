"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { RumboMark } from "@/components/ui/RumboMark";

type Photo = {
  id: number;
  src: string;
  alt: string;
};

const PHOTOS: Photo[] = Array.from({ length: 11 }, (_, i) => {
  const n = String(i + 1).padStart(2, "0");
  return {
    id: i + 1,
    src: `/galeria/galeria-${n}.jpg`,
    alt: `RUMBO — registro ${n}`,
  };
});

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
                aria-label={`Abrir ${photo.alt}`}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover grayscale-[0.2] transition-all duration-700 group-hover:scale-[1.04] group-hover:grayscale-0"
                />
                <span
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-bg/70 via-transparent to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-30"
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
            aria-label={lightbox.alt}
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
              <Image
                src={lightbox.src}
                alt={lightbox.alt}
                fill
                sizes="(max-width: 768px) 90vw, 672px"
                className="object-cover"
                priority
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
