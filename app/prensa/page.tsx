import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CopyableBio } from "@/components/prensa/CopyableBio";
import { PrintDossierButton } from "@/components/prensa/PrintDossierButton";
import { WhatsappFab } from "@/components/prensa/WhatsappFab";
import {
  CONTACT,
  DRIVE_HIRES_URL,
  MEMBERS,
  PRENSA_ANTECEDENTS,
  PRENSA_BIOS,
  PRENSA_FICHA,
  PRENSA_MENTIONS,
  PRENSA_PHOTOS,
  PRENSA_VIDEO_ID,
  RELEASES,
  SOCIAL,
  type Release,
} from "@/lib/data";

export const metadata: Metadata = {
  title: "RUMBO — EPK · Prensa y contratación",
  description:
    "Biografía, integrantes, antecedentes, rider técnico y fotos en alta. Material para organizadores y medios.",
  alternates: { canonical: "https://rumbo.musica.ar/prensa" },
  openGraph: {
    title: "RUMBO — EPK · Prensa y contratación",
    description:
      "Biografía, integrantes, antecedentes, rider técnico y fotos en alta. Material para organizadores y medios.",
    url: "https://rumbo.musica.ar/prensa",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "RUMBO — EPK · Prensa y contratación",
    description:
      "Biografía, integrantes, antecedentes, rider técnico y fotos en alta.",
  },
  robots: { index: true, follow: true },
};

function spotifyEmbedSrc(release: Release): string | null {
  if (release.spotifyTrackId)
    return `https://open.spotify.com/embed/track/${release.spotifyTrackId}?utm_source=generator&theme=0`;
  if (release.spotifyAlbumId)
    return `https://open.spotify.com/embed/album/${release.spotifyAlbumId}?utm_source=generator&theme=0`;
  return null;
}

export default function PrensaPage() {
  return (
    <>
      <Navbar />
      <main className="pb-24 pt-32 md:pt-40">
        <div className="container-rumbo flex flex-col gap-20">
          {/* ===================================================================
              1 · HERO
              =================================================================== */}
          <header className="flex flex-col gap-4">
            <span className="eyebrow">Electronic Press Kit</span>
            <h1 className="font-display text-5xl uppercase tracking-wider2 md:text-7xl">
              RUMBO — EPK
            </h1>
            <p className="max-w-xl text-lg text-text/80">
              Material para organizadores y medios.
            </p>
          </header>

          {/* ===================================================================
              2 · EN VIVO
              =================================================================== */}
          <section aria-labelledby="prensa-envivo" className="flex flex-col gap-4">
            <h2 id="prensa-envivo" className="eyebrow flex items-center gap-3 before:block before:h-px before:w-8 before:bg-accent">
              01 · En vivo
            </h2>
            <div className="aspect-video w-full overflow-hidden border border-border bg-black">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${PRENSA_VIDEO_ID}?rel=0&modestbranding=1`}
                title="RUMBO en vivo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
                className="h-full w-full"
              />
            </div>
          </section>

          {/* ===================================================================
              3 · ESCUCHAR
              =================================================================== */}
          <section aria-labelledby="prensa-escuchar" className="flex flex-col gap-6">
            <h2 id="prensa-escuchar" className="eyebrow flex items-center gap-3 before:block before:h-px before:w-8 before:bg-accent">
              02 · Escuchar
            </h2>
            <ul className="grid gap-2 md:grid-cols-2">
              {RELEASES.map((release) => {
                const embed = spotifyEmbedSrc(release);
                return (
                  <li key={release.title} className="flex flex-col gap-2 border border-border bg-surface/40 p-3">
                    <div className="flex items-baseline justify-between gap-3">
                      <div className="min-w-0">
                        <p className="truncate font-display text-base uppercase tracking-wider2">
                          {release.title}
                        </p>
                        <p className="truncate text-[11px] text-text/50">{release.description}</p>
                      </div>
                      {release.youtubeUrl && (
                        <a
                          href={release.youtubeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="shrink-0 font-mono text-[9px] uppercase tracking-widest2 text-text/60 hover:text-accent"
                        >
                          YouTube ↗
                        </a>
                      )}
                    </div>
                    {embed && (
                      <iframe
                        src={embed}
                        title={`${release.title} en Spotify`}
                        width="100%"
                        height={release.spotifyAlbumId ? 152 : 80}
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        loading="lazy"
                        className="block w-full"
                      />
                    )}
                  </li>
                );
              })}
            </ul>
          </section>

          {/* ===================================================================
              4 · BIO (3 largos con "copiar")
              =================================================================== */}
          <section aria-labelledby="prensa-bio" className="flex flex-col gap-6">
            <h2 id="prensa-bio" className="eyebrow flex items-center gap-3 before:block before:h-px before:w-8 before:bg-accent">
              03 · Bio
            </h2>
            <div className="flex flex-col gap-4">
              <CopyableBio label="Una línea" meta="~200 caracteres" text={PRENSA_BIOS.oneLine} />
              <CopyableBio label="Un párrafo" meta="~80 palabras" text={PRENSA_BIOS.paragraph} />
              <CopyableBio label="Larga" meta="~300 palabras" text={PRENSA_BIOS.long} />
            </div>
          </section>

          {/* ===================================================================
              5 · FICHA TÉCNICA
              =================================================================== */}
          <section aria-labelledby="prensa-ficha" className="flex flex-col gap-6">
            <h2 id="prensa-ficha" className="eyebrow flex items-center gap-3 before:block before:h-px before:w-8 before:bg-accent">
              04 · Ficha técnica
            </h2>

            <dl className="grid gap-6 md:grid-cols-2">
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-widest2 text-muted">Origen</dt>
                <dd className="mt-1 font-display text-2xl uppercase tracking-wider2">
                  {PRENSA_FICHA.origin}
                </dd>
              </div>
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-widest2 text-muted">Duración del show</dt>
                <dd className="mt-1 font-display text-2xl uppercase tracking-wider2">
                  {PRENSA_FICHA.showDurationMinutes} min
                </dd>
              </div>
              <div className="md:col-span-2">
                <dt className="font-mono text-[10px] uppercase tracking-widest2 text-muted">
                  Formatos disponibles
                </dt>
                <dd className="mt-1 text-text/80">
                  {PRENSA_FICHA.formats.length > 0 ? (
                    <ul className="flex flex-wrap gap-2">
                      {PRENSA_FICHA.formats.map((f) => (
                        <li
                          key={f}
                          className="border border-border px-3 py-1 font-mono text-xs uppercase tracking-widest2"
                        >
                          {f}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <span className="font-mono text-xs uppercase tracking-widest2 text-muted">
                      A confirmar — consultar por contratación
                    </span>
                  )}
                </dd>
              </div>
            </dl>

            <div>
              <p className="font-mono text-[10px] uppercase tracking-widest2 text-muted mb-3">
                Integrantes
              </p>
              <ul className="grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
                {MEMBERS.map((m) => (
                  <li key={m.name} className="bg-bg p-4">
                    <p className="font-display text-lg uppercase tracking-wider2">{m.name}</p>
                    <p className="mt-0.5 font-mono text-[10px] uppercase tracking-widest2 text-muted">
                      {m.role}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <a
                href={PRENSA_FICHA.riderUrl}
                className="btn-ghost inline-flex"
                target="_blank"
                rel="noopener noreferrer"
              >
                ↓ Rider técnico (PDF)
              </a>
            </div>
          </section>

          {/* ===================================================================
              6 · ANTECEDENTES
              =================================================================== */}
          <section aria-labelledby="prensa-antecedentes" className="flex flex-col gap-6">
            <h2 id="prensa-antecedentes" className="eyebrow flex items-center gap-3 before:block before:h-px before:w-8 before:bg-accent">
              05 · Antecedentes
            </h2>
            <ul className="flex flex-col">
              {PRENSA_ANTECEDENTS.map((a, i) => (
                <li
                  key={i}
                  className="grid grid-cols-1 gap-1 border-t border-border py-4 last:border-b md:grid-cols-[1fr_auto_auto] md:items-baseline md:gap-6"
                >
                  <span className="font-display text-lg uppercase tracking-wider2">
                    {a.event}
                  </span>
                  <span className="font-mono text-xs uppercase tracking-widest2 text-muted">
                    {a.place}
                  </span>
                  {a.year && (
                    <span className="font-mono text-xs uppercase tracking-widest2 text-accent-2">
                      {a.year}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </section>

          {/* ===================================================================
              7 · PRENSA (opcional — solo si hay menciones)
              =================================================================== */}
          {PRENSA_MENTIONS.length > 0 && (
            <section aria-labelledby="prensa-menciones" className="flex flex-col gap-6">
              <h2 id="prensa-menciones" className="eyebrow flex items-center gap-3 before:block before:h-px before:w-8 before:bg-accent">
                06 · Prensa
              </h2>
              <ul className="flex flex-col">
                {PRENSA_MENTIONS.map((m, i) => (
                  <li
                    key={i}
                    className="border-t border-border py-4 last:border-b"
                  >
                    <p className="font-display text-lg uppercase tracking-wider2">
                      {m.outlet}
                    </p>
                    <p className="mt-1 text-text/80">
                      {m.url ? (
                        <a href={m.url} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-accent">
                          {m.title}
                        </a>
                      ) : (
                        m.title
                      )}
                      {m.date && (
                        <span className="ml-2 font-mono text-xs uppercase tracking-widest2 text-muted">
                          · {m.date}
                        </span>
                      )}
                    </p>
                    {m.context && (
                      <p className="mt-1 text-sm text-text/60">{m.context}</p>
                    )}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* ===================================================================
              8 · FOTOS
              =================================================================== */}
          <section aria-labelledby="prensa-fotos" className="flex flex-col gap-6">
            <h2 id="prensa-fotos" className="eyebrow flex items-center gap-3 before:block before:h-px before:w-8 before:bg-accent">
              07 · Fotos
            </h2>

            {PRENSA_PHOTOS.length === 0 ? (
              <div className="border border-dashed border-border p-8 text-center">
                <p className="font-mono text-xs uppercase tracking-widest2 text-muted">
                  Fotos disponibles próximamente
                </p>
              </div>
            ) : (
              <>
                <ul className="grid grid-cols-2 gap-4 md:grid-cols-3">
                  {PRENSA_PHOTOS.map((p) => (
                    <li
                      key={p.src}
                      className={`flex flex-col gap-2 ${
                        p.aspect === "vertical" ? "row-span-1" : ""
                      }`}
                    >
                      <div className={`relative w-full overflow-hidden border border-border bg-surface ${
                        p.aspect === "vertical" ? "aspect-[4/5]" : "aspect-[3/2]"
                      }`}>
                        <Image
                          src={p.src}
                          alt={p.alt}
                          fill
                          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                          className={`object-cover ${p.monochrome ? "grayscale" : ""}`}
                        />
                      </div>
                      <div className="flex items-center justify-between gap-2 font-mono text-[10px] uppercase tracking-widest2">
                        <span className="text-text/70">
                          {p.photographer}
                          {p.handle && (
                            <span className="ml-1 text-muted">{p.handle}</span>
                          )}
                        </span>
                      </div>
                      <div className="flex gap-1 print:hidden">
                        <a
                          href={p.hiResUrl ?? p.src}
                          download
                          className="flex-1 border border-border px-2 py-1 text-center font-mono text-[9px] uppercase tracking-widest2 text-text/70 hover:border-accent hover:text-accent"
                        >
                          ↓ Alta
                        </a>
                        <a
                          href={p.src}
                          download
                          className="flex-1 border border-border px-2 py-1 text-center font-mono text-[9px] uppercase tracking-widest2 text-text/70 hover:border-accent hover:text-accent"
                        >
                          ↓ Web
                        </a>
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="border-t border-border pt-4 text-xs text-muted">
                  Fotografía:{" "}
                  <span className="text-text/80">Jeremías Vilchez</span> (
                  <a href="https://instagram.com/jere.vilchez" target="_blank" rel="noopener noreferrer" className="hover:text-accent">
                    @jere.vilchez
                  </a>
                  ),{" "}
                  <span className="text-text/80">Jorge Ariel</span> (
                  <a href="https://instagram.com/jorgearielfotografia" target="_blank" rel="noopener noreferrer" className="hover:text-accent">
                    @jorgearielfotografia
                  </a>
                  ) y <span className="text-text/80">Pablo Arias</span>.
                </div>

                <div className="print:hidden">
                  <a
                    href={DRIVE_HIRES_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border border-border px-4 py-2 font-mono text-xs uppercase tracking-widest2 text-text/80 hover:border-accent hover:text-accent transition-colors"
                  >
                    <svg
                      aria-hidden
                      viewBox="0 0 24 24"
                      className="h-4 w-4 shrink-0 fill-current"
                    >
                      <path d="M6.26 3l6.53 11.31h9.21L15.47 3H6.26zm-1.72.98L1 15.98 4.55 22l3.55-6.02L4.54 3.98zM9.29 22h9.24L22 15.98H12.85L9.29 22z" />
                    </svg>
                    Ver carpeta completa en Drive
                    <span aria-hidden className="text-muted">↗</span>
                  </a>
                </div>
              </>
            )}
          </section>

          {/* ===================================================================
              9 · DESCARGAS
              =================================================================== */}
          <section aria-labelledby="prensa-descargas" className="flex flex-col gap-6 print:hidden">
            <h2 id="prensa-descargas" className="eyebrow flex items-center gap-3 before:block before:h-px before:w-8 before:bg-accent">
              08 · Descargas
            </h2>
            <ul className="grid gap-3 md:grid-cols-3">
              <li>
                <a
                  href={PRENSA_FICHA.riderUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col gap-1 border border-border p-4 hover:border-accent hover:text-accent transition-colors"
                >
                  <span className="font-mono text-[10px] uppercase tracking-widest2 text-accent">↓ PDF</span>
                  <span className="font-display text-lg uppercase tracking-wider2">Rider técnico</span>
                </a>
              </li>
              <li>
                <a
                  href={PRENSA_FICHA.logoUrl}
                  download="rumbo-logo.svg"
                  className="flex flex-col gap-1 border border-border p-4 hover:border-accent hover:text-accent transition-colors"
                >
                  <span className="font-mono text-[10px] uppercase tracking-widest2 text-accent">↓ SVG</span>
                  <span className="font-display text-lg uppercase tracking-wider2">Logo (fondo transp.)</span>
                </a>
              </li>
              <li className="flex flex-col gap-1 border border-border p-4">
                <span className="font-mono text-[10px] uppercase tracking-widest2 text-accent">↓ PDF</span>
                <span className="font-display text-lg uppercase tracking-wider2">Dossier</span>
                <PrintDossierButton />
              </li>
            </ul>
          </section>

          {/* ===================================================================
              10 · CONTACTO
              =================================================================== */}
          <section aria-labelledby="prensa-contacto" className="flex flex-col gap-6">
            <h2 id="prensa-contacto" className="eyebrow flex items-center gap-3 before:block before:h-px before:w-8 before:bg-accent">
              09 · Contacto
            </h2>
            <ul className="grid gap-4 md:grid-cols-2">
              <li>
                <p className="eyebrow">Mail</p>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="mt-2 block font-display text-xl uppercase tracking-wider2 hover:text-accent"
                >
                  {CONTACT.email}
                </a>
              </li>
              <li>
                <p className="eyebrow">WhatsApp</p>
                <a
                  href={SOCIAL.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 block font-display text-xl uppercase tracking-wider2 hover:text-accent"
                >
                  {CONTACT.phone}
                </a>
              </li>
              <li>
                <p className="eyebrow">Instagram</p>
                <a
                  href={SOCIAL.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 block font-display text-xl uppercase tracking-wider2 hover:text-accent"
                >
                  {CONTACT.instagramHandle}
                </a>
              </li>
              <li>
                <p className="eyebrow">Web</p>
                <Link
                  href="/"
                  className="mt-2 block font-display text-xl uppercase tracking-wider2 hover:text-accent"
                >
                  rumbo.musica.ar
                </Link>
              </li>
            </ul>
            <p className="text-xs text-muted">
              {CONTACT.inpi} · {CONTACT.city}
            </p>
          </section>
        </div>
      </main>
      <WhatsappFab />
      <Footer />
    </>
  );
}
