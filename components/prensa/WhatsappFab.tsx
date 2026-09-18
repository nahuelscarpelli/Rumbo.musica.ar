import { SOCIAL } from "@/lib/data";

/**
 * Floating WhatsApp button. Fixed bottom-right, print-hidden.
 * Server component — pure link, no state.
 */
export function WhatsappFab() {
  return (
    <a
      href={SOCIAL.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribir por WhatsApp"
      className="print:hidden fixed bottom-6 right-6 z-40 grid h-14 w-14 place-items-center rounded-full border border-accent bg-bg/90 backdrop-blur shadow-[0_10px_30px_-10px_rgba(0,0,0,0.7)] hover:bg-accent hover:text-bg transition-colors"
    >
      <svg
        aria-hidden
        viewBox="0 0 24 24"
        className="h-7 w-7 fill-current text-text/90"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.695.626.712.226 1.36.194 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347zM12.05 21.5A9.44 9.44 0 016.9 20.07l-.37-.22-3.82 1 1.02-3.72-.24-.38a9.4 9.4 0 01-1.44-5.02c0-5.2 4.24-9.42 9.45-9.42 2.52 0 4.9.98 6.68 2.76A9.36 9.36 0 0121.5 12c0 5.2-4.24 9.42-9.45 9.42zM20.52 3.5A11.42 11.42 0 0012.05.5C5.75.5.63 5.62.63 11.9c0 2.02.53 3.99 1.54 5.73L.53 23.5l6-1.57a11.42 11.42 0 005.5 1.4h.02c6.3 0 11.42-5.12 11.42-11.4 0-3.05-1.19-5.92-3.36-8.03z"/>
      </svg>
    </a>
  );
}
