"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { CONTACT, SOCIAL } from "@/lib/data";

type Status = "idle" | "sending" | "success" | "error";

export function Contacto() {
  const [status, setStatus] = useState<Status>("idle");
  const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID;

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!formspreeId) {
      setStatus("error");
      return;
    }
    const form = e.currentTarget;
    const data = new FormData(form);
    setStatus("sending");
    try {
      const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contacto" className="relative bg-bg py-24 md:py-32">
      <div className="container-rumbo">
        <SectionTitle eyebrow="06 — Hablemos">Contacto</SectionTitle>

        <div className="mt-14 grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-5"
          >
            <Field label="Nombre" name="name" type="text" required />
            <Field label="Email" name="email" type="email" required />

            <div className="flex flex-col gap-2">
              <label
                htmlFor="kind"
                className="font-mono text-[10px] uppercase tracking-widest2 text-muted"
              >
                Tipo de consulta
              </label>
              <select
                id="kind"
                name="kind"
                required
                defaultValue=""
                className="border border-border bg-bg px-4 py-3 font-mono text-sm text-text outline-none focus:border-accent"
              >
                <option value="" disabled>
                  Elegí una opción
                </option>
                <option value="booking">Booking — Contratar a la banda</option>
                <option value="prensa">Prensa</option>
                <option value="fan">Fan</option>
                <option value="otro">Otro</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="message"
                className="font-mono text-[10px] uppercase tracking-widest2 text-muted"
              >
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="resize-y border border-border bg-bg px-4 py-3 font-mono text-sm text-text outline-none focus:border-accent"
              />
            </div>

            <div className="flex flex-col items-start gap-3">
              <button
                type="submit"
                disabled={status === "sending"}
                className="btn-primary disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "sending" ? "Enviando…" : "Enviar"}
              </button>

              {status === "success" && (
                <p className="font-mono text-xs uppercase tracking-widest2 text-accent-2">
                  ✓ Mensaje enviado. Te respondemos pronto.
                </p>
              )}
              {status === "error" && (
                <p className="font-mono text-xs uppercase tracking-widest2 text-accent">
                  No pudimos enviar el mensaje. Escribinos directo a {CONTACT.email}.
                </p>
              )}
            </div>
          </motion.form>

          {/* Direct info */}
          <motion.aside
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col gap-8 border border-border bg-surface p-8"
          >
            <div>
              <p className="eyebrow">Directo</p>
              <ul className="mt-4 flex flex-col gap-3">
                <li>
                  <a
                    href={`tel:${CONTACT.phoneLink}`}
                    className="group flex items-center gap-3 text-text hover:text-accent transition-colors"
                  >
                    <span aria-hidden className="text-accent group-hover:text-text-balance">📞</span>
                    <span className="font-mono">{CONTACT.phone}</span>
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="group flex items-center gap-3 text-text hover:text-accent transition-colors"
                  >
                    <span aria-hidden className="text-accent">✉</span>
                    <span className="font-mono">{CONTACT.email}</span>
                  </a>
                </li>
                <li>
                  <a
                    href={SOCIAL.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 text-text hover:text-accent transition-colors"
                  >
                    <span aria-hidden className="text-accent">◎</span>
                    <span className="font-mono">{CONTACT.instagramHandle}</span>
                  </a>
                </li>
              </ul>
            </div>

            <div className="divider-diag" />

            <div>
              <p className="eyebrow">Redes</p>
              <ul className="mt-4 flex flex-wrap gap-3">
                <SocialLink href={SOCIAL.spotify} label="Spotify" />
                <SocialLink href={SOCIAL.youtube} label="YouTube" />
                <SocialLink href={SOCIAL.tiktok} label="TikTok" />
                <SocialLink href={SOCIAL.instagram} label="Instagram" />
                <SocialLink href={SOCIAL.linktree} label="Linktree" />
              </ul>
            </div>

            <div className="divider-diag" />

            <div>
              <p className="eyebrow">Gestión</p>
              <p className="mt-3 font-mono text-sm text-text/80">{CONTACT.email}</p>
              <p className="font-mono text-xs uppercase tracking-widest2 text-muted">
                INAMU Nuevo Cuyo
              </p>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type,
  required,
}: {
  label: string;
  name: string;
  type: string;
  required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={name}
        className="font-mono text-[10px] uppercase tracking-widest2 text-muted"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="border border-border bg-bg px-4 py-3 font-mono text-sm text-text outline-none focus:border-accent"
      />
    </div>
  );
}

function SocialLink({ href, label }: { href: string; label: string }) {
  return (
    <li>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="border border-border px-3 py-2 font-mono text-[10px] uppercase tracking-widest2 text-text/80 hover:border-accent hover:text-accent transition-colors"
      >
        {label}
      </a>
    </li>
  );
}
