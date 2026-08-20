"use client";

export function PrintDossierButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="btn-primary"
    >
      ↓ Descargar dossier (PDF)
    </button>
  );
}
