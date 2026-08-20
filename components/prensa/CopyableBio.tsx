"use client";

import { useState } from "react";

type Props = {
  label: string;
  meta?: string;
  text: string;
};

/**
 * Bio block with a "copiar" button. Copies text as plain UTF-8 to the
 * clipboard and briefly confirms. Falls back to a hidden textarea +
 * document.execCommand for older browsers / non-secure contexts.
 * Hidden in print media so the printed dossier is clean.
 */
export function CopyableBio({ label, meta, text }: Props) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
      } else {
        const ta = document.createElement("textarea");
        ta.value = text;
        ta.style.position = "fixed";
        ta.style.opacity = "0";
        document.body.appendChild(ta);
        ta.select();
        document.execCommand("copy");
        document.body.removeChild(ta);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* silent fail — the text is still selectable manually */
    }
  }

  return (
    <article className="border border-border bg-surface/40 p-6 md:p-8">
      <header className="mb-4 flex items-baseline justify-between gap-4">
        <div>
          <p className="eyebrow">{label}</p>
          {meta && (
            <p className="mt-1 font-mono text-[10px] uppercase tracking-widest2 text-muted">
              {meta}
            </p>
          )}
        </div>
        <button
          type="button"
          onClick={handleCopy}
          className="print:hidden border border-border px-3 py-1.5 font-mono text-[10px] uppercase tracking-widest2 text-text/80 hover:border-accent hover:text-accent transition-colors"
          aria-live="polite"
        >
          {copied ? "✓ Copiado" : "Copiar"}
        </button>
      </header>
      <div className="whitespace-pre-line text-text/85 leading-relaxed">
        {text}
      </div>
    </article>
  );
}
