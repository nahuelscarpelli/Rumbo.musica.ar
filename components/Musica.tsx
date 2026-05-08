"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { RELEASES, SOCIAL } from "@/lib/data";
import { RumboLogo } from "@/components/ui/RumboLogo";
import { RumboMark } from "@/components/ui/RumboMark";

export function Musica() {
  const spotifyEmbed = process.env.NEXT_PUBLIC_SPOTIFY_EMBED_URL;

  return (
    <section id="musica" className="relative py-24 md:py-32">
      <div className="container-rumbo">
        <SectionTitle eyebrow="01 — Discografía">Música</SectionTitle>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-14">
          {/* Spotify embed */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="relative aspect-square w-full max-w-md overflow-hidden border border-border bg-surface"
          >
            {spotifyEmbed ? (
              <iframe
                title="RUMBO en Spotify"
                src={spotifyEmbed}
                width="100%"
                height="100%"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                className="h-full w-full"
              />
            ) : (
              <div className="flex h-full w-full flex-col items-center justify-center gap-4 p-8 text-center">
                <RumboMark className="h-16 w-auto text-text/40" />
                <p className="font-mono text-xs uppercase tracking-widest2 text-muted">
                  Spotify embed
                </p>
                <p className="text-sm text-text/60">
                  Configurar <code className="text-accent-2">NEXT_PUBLIC_SPOTIFY_EMBED_URL</code> en
                  el entorno.
                </p>
                <a
                  href={SOCIAL.spotify}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost mt-2"
                >
                  Ir a Spotify
                </a>
              </div>
            )}
          </motion.div>

          {/* Release list */}
          <div className="flex flex-col gap-4">
            <p className="eyebrow">Releases destacados</p>
            <ul className="flex flex-col">
              {RELEASES.map((release, i) => (
                <motion.li
                  key={release.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="group grid grid-cols-[auto_1fr_auto] items-center gap-5 border-t border-border py-5 last:border-b"
                >
                  <div className="relative flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden border border-border bg-bg md:h-20 md:w-20">
                    <RumboMark className="h-8 w-auto text-text/30 group-hover:text-accent transition-colors" />
                    <span
                      aria-hidden
                      className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </div>
                  <div className="flex flex-col">
                    <h3 className="font-display text-2xl uppercase tracking-wider2 md:text-3xl">
                      {release.title}
                    </h3>
                    <p className="text-sm text-text/60">{release.description}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <a
                      href={SOCIAL.spotify}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Escuchar ${release.title} en Spotify`}
                      className="font-mono text-[10px] uppercase tracking-widest2 text-text/70 hover:text-accent transition-colors"
                    >
                      Spotify
                    </a>
                    <span className="text-muted">·</span>
                    <a
                      href={SOCIAL.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Ver ${release.title} en YouTube`}
                      className="font-mono text-[10px] uppercase tracking-widest2 text-text/70 hover:text-accent transition-colors"
                    >
                      YouTube
                    </a>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
