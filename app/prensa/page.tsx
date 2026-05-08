import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { RumboLogo } from "@/components/ui/RumboLogo";
import { CONTACT, MEMBERS, RELEASES, SOUND_TAGS, SOCIAL } from "@/lib/data";

export const metadata: Metadata = {
  title: "Prensa — EPK",
  description:
    "Electronic Press Kit de RUMBO: biografía, integrantes, releases, rider técnico, fotos y links de descarga.",
};

const TECH_INFO = [
  "16+ canales de entrada requeridos",
  "Monitoreo: in-ears (preferido) / piso (adaptable)",
  "Proyección HDMI sincronizada con secuencia",
  "Energía: 220v × 4 tomas en escena",
  "Duración del show: a consultar según formato",
  "Capacidad de escenario: auditorios, teatros, festivales y espacios abiertos",
];

const DOWNLOADS = [
  { label: "Gacetilla de prensa", href: "/rumbo-gacetilla.pdf" },
  { label: "Rider técnico", href: "/rumbo-rider.pdf" },
  { label: "Fotos en alta", href: "https://drive.google.com/", external: true },
];

export default function PrensaPage() {
  return (
    <>
      <Navbar />
      <main className="pb-24 pt-32 md:pt-40">
        <div className="container-rumbo">
          <Link
            href="/"
            className="font-mono text-[10px] uppercase tracking-widest2 text-muted hover:text-accent"
          >
            ← Volver al inicio
          </Link>

          <header className="mt-8 flex flex-col gap-6 border-b border-border pb-12 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="eyebrow">Electronic Press Kit</span>
              <h1 className="mt-3 font-display text-5xl uppercase tracking-wider2 md:text-7xl">
                RUMBO — EPK
              </h1>
              <p className="mt-4 max-w-xl text-text/70">
                Material de prensa, biografía, integrantes, releases y requerimientos
                técnicos.
              </p>
            </div>
            <RumboLogo className="h-14 w-auto text-text" />
          </header>

          <section className="mt-14 grid gap-12 lg:grid-cols-[1.4fr_1fr]">
            <div>
              <h2 className="font-display text-3xl uppercase tracking-wider2">Biografía</h2>
              <p className="mt-5 text-text/80">
                RUMBO es una banda mendocina que reinterpreta el folclore argentino
                fusionando géneros tradicionales —zamba, chacarera, gato, cueca— con
                sonidos modernos: electrónica, sintetizadores, guitarra eléctrica y
                bajo. Su propuesta artística combina tradición y contemporaneidad sin
                perder identidad: una declaración estética cinematográfica, oscura y
                ritual.
              </p>
              <p className="mt-4 text-text/80">
                Nacida en Cuyo, la banda construyó su sonido entre estudios y escenarios
                de festivales locales y vendimias departamentales. Su show insignia,
                <em className="text-accent-2"> Del Silencio a la Luna</em>, es un
                concierto teatral en cinco actos que recorre la dramaturgia desde la
                oscuridad total hasta la luz plena.
              </p>

              <h3 className="mt-10 font-display text-2xl uppercase tracking-wider2">
                Identidad sonora
              </h3>
              <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2 font-display text-xl uppercase tracking-wider2">
                {SOUND_TAGS.map((t) => (
                  <li key={t} className="flex items-center gap-2">
                    <span aria-hidden className="block h-1.5 w-1.5 rotate-45 bg-accent" />
                    {t}
                  </li>
                ))}
              </ul>

              <h3 className="mt-12 font-display text-2xl uppercase tracking-wider2">
                Releases destacados
              </h3>
              <ul className="mt-4 flex flex-col">
                {RELEASES.map((r) => (
                  <li key={r.title} className="border-t border-border py-4 last:border-b">
                    <p className="font-display text-2xl uppercase tracking-wider2">
                      {r.title}
                    </p>
                    <p className="text-sm text-text/60">{r.description}</p>
                  </li>
                ))}
              </ul>
            </div>

            <aside className="flex flex-col gap-10">
              <div className="border border-border bg-surface p-8">
                <p className="eyebrow">Descargas</p>
                <ul className="mt-5 flex flex-col gap-3">
                  {DOWNLOADS.map((d) => (
                    <li key={d.label}>
                      <a
                        href={d.href}
                        {...(d.external
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : { download: true })}
                        className="flex items-center justify-between gap-4 border border-border px-4 py-3 font-mono text-xs uppercase tracking-widest2 text-text/80 hover:border-accent hover:text-accent transition-colors"
                      >
                        <span>{d.label}</span>
                        <span aria-hidden className="text-accent">↓</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border border-border bg-surface p-8">
                <p className="eyebrow">Contacto directo</p>
                <ul className="mt-5 flex flex-col gap-3 font-mono text-sm">
                  <li>
                    <a href={`mailto:${CONTACT.email}`} className="hover:text-accent">
                      {CONTACT.email}
                    </a>
                  </li>
                  <li>
                    <a href={`tel:${CONTACT.phoneLink}`} className="hover:text-accent">
                      {CONTACT.phone}
                    </a>
                  </li>
                  <li>
                    <a
                      href={SOCIAL.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-accent"
                    >
                      {CONTACT.instagramHandle}
                    </a>
                  </li>
                </ul>
              </div>

              <div className="border border-border bg-surface p-8">
                <p className="eyebrow">Marca registrada</p>
                <p className="mt-3 font-display text-xl uppercase tracking-wider2">
                  {CONTACT.inpi}
                </p>
              </div>
            </aside>
          </section>

          <section className="mt-20">
            <h2 className="font-display text-3xl uppercase tracking-wider2">Integrantes</h2>
            <ul className="mt-6 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
              {MEMBERS.map((m) => (
                <li key={m.name} className="bg-bg p-6">
                  <p className="font-display text-2xl uppercase tracking-wider2">{m.name}</p>
                  <p className="mt-1 font-mono text-xs uppercase tracking-widest2 text-muted">
                    {m.role}
                  </p>
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-20">
            <h2 className="font-display text-3xl uppercase tracking-wider2">
              Información técnica
            </h2>
            <ul className="mt-6 flex flex-col">
              {TECH_INFO.map((line, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 border-t border-border py-4 last:border-b"
                >
                  <span aria-hidden className="mt-2 block h-1.5 w-1.5 rotate-45 bg-accent" />
                  <span className="text-text/80">{line}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
