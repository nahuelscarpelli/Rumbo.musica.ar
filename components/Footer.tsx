import Link from "next/link";
import { RumboLogo } from "@/components/ui/RumboLogo";
import { CONTACT, SOCIAL } from "@/lib/data";

const SOCIALS = [
  { href: SOCIAL.instagram, label: "Instagram" },
  { href: SOCIAL.spotify, label: "Spotify" },
  { href: SOCIAL.youtube, label: "YouTube" },
  { href: SOCIAL.tiktok, label: "TikTok" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-bg pb-10 pt-20">
      <div className="container-rumbo flex flex-col gap-12">
        <div className="flex flex-col items-start gap-8 md:flex-row md:items-end md:justify-between">
          <div className="flex flex-col gap-5">
            <Link href="#hero" aria-label="RUMBO" className="text-text">
              <RumboLogo className="text-2xl md:text-3xl" />
            </Link>
            <p className="font-display text-2xl uppercase tracking-wider2 md:text-3xl">
              Música argentina,
              <br />
              <span className="text-accent-2">sin etiquetas.</span>
            </p>
          </div>

          <ul className="flex flex-wrap gap-3">
            {SOCIALS.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-border px-3 py-2 font-mono text-[10px] uppercase tracking-widest2 text-text/80 hover:border-accent hover:text-accent transition-colors"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="divider-diag" />

        <div className="flex flex-col items-start justify-between gap-3 font-mono text-[10px] uppercase tracking-widest2 text-muted md:flex-row md:items-center">
          <span>{CONTACT.inpi} · {CONTACT.city}</span>
          <span>© {new Date().getFullYear()} RUMBO — Todos los derechos reservados.</span>
          <a
            href={`mailto:${CONTACT.email}`}
            className="text-text/70 hover:text-accent transition-colors"
          >
            {CONTACT.email}
          </a>
        </div>
      </div>
    </footer>
  );
}
