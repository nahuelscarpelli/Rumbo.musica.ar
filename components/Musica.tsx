"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { RELEASES, type Release } from "@/lib/data";
import { RumboMark } from "@/components/ui/RumboMark";

function spotifyEmbedSrc(release: Release): string | null {
  if (release.spotifyTrackId) {
    return `https://open.spotify.com/embed/track/${release.spotifyTrackId}?utm_source=generator&theme=0`;
  }
  if (release.spotifyAlbumId) {
    return `https://open.spotify.com/embed/album/${release.spotifyAlbumId}?utm_source=generator&theme=0`;
  }
  return null;
}

export function Musica() {
  return (
    <section id="musica" className="relative py-24 md:py-32">
      <div className="container-rumbo">
        <SectionTitle eyebrow="01 — Discografía">Música</SectionTitle>

        <div className="mt-12 grid gap-px bg-border md:grid-cols-2">
          {RELEASES.map((release, i) => (
            <motion.article
              key={release.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative flex flex-col gap-6 bg-bg p-6 md:p-8"
            >
              <header className="flex flex-col gap-2">
                <span
                  className={`inline-flex w-fit items-center gap-2 font-mono text-[10px] uppercase tracking-widest2 ${
                    release.comingSoon ? "text-accent" : "text-muted"
                  }`}
                >
                  <span
                    aria-hidden
                    className={`block h-1.5 w-1.5 rotate-45 ${
                      release.comingSoon ? "bg-accent" : "bg-accent-2"
                    }`}
                  />
                  {release.comingSoon ? "Próximamente" : "Disponible"}
                </span>
                <h3 className="font-display text-3xl uppercase tracking-wider2 md:text-4xl">
                  {release.title}
                </h3>
                <p className="text-sm text-text/60">{release.description}</p>
              </header>

              {release.comingSoon ? (
                <div className="flex flex-1 flex-col items-center justify-center gap-4 border border-dashed border-border bg-surface/50 p-10 text-center">
                  <RumboMark className="h-10 w-auto text-text/30" />
                  <p className="font-mono text-xs uppercase tracking-widest2 text-muted">
                    Próximo lanzamiento
                  </p>
                  <p className="text-sm text-text/60">
                    Mantenete cerca para escucharlo en cuanto salga.
                  </p>
                </div>
              ) : (
                <>
                  {spotifyEmbedSrc(release) && (
                    <div className="relative w-full overflow-hidden border border-border bg-surface">
                      <iframe
                        title={`${release.title} en Spotify`}
                        src={spotifyEmbedSrc(release) ?? undefined}
                        width="100%"
                        height={release.spotifyAlbumId ? 352 : 152}
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        loading="lazy"
                        className="block w-full"
                      />
                    </div>
                  )}

                  <div className="flex flex-wrap gap-3">
                    {release.spotifyUrl && (
                      <a
                        href={release.spotifyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border border-border px-4 py-2 font-mono text-[10px] uppercase tracking-widest2 text-text/80 hover:border-accent hover:text-accent transition-colors"
                      >
                        ▶ Spotify
                      </a>
                    )}
                    {release.youtubeUrl && (
                      <a
                        href={release.youtubeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border border-border px-4 py-2 font-mono text-[10px] uppercase tracking-widest2 text-text/80 hover:border-accent hover:text-accent transition-colors"
                      >
                        ▶ YouTube
                      </a>
                    )}
                  </div>
                </>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
