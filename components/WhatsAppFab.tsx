"use client";

import { useEffect, useState } from "react";
import { CONTACT } from "@/lib/data";

const WP_NUMBER = CONTACT.phoneLink.replace(/^\+/, "");
const WP_MESSAGE = "Hola RUMBO, quería consultarles por";
const WP_HREF = `https://wa.me/${WP_NUMBER}?text=${encodeURIComponent(WP_MESSAGE)}`;

export function WhatsAppFab() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.9);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={WP_HREF}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar a RUMBO por WhatsApp"
      className={`fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-accent text-text shadow-[0_8px_24px_rgba(0,0,0,0.5)] ring-1 ring-accent/40 transition-all duration-300 hover:scale-105 hover:bg-accent/90 hover:shadow-[0_12px_32px_rgba(192,57,43,0.4)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-2 ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <svg
        viewBox="0 0 24 24"
        aria-hidden
        className="h-7 w-7 fill-current"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.967-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12.057 0h-.014C5.405 0 .002 5.402.002 12.044c0 2.633.851 5.077 2.296 7.061l-1.504 4.481 4.638-1.483A11.97 11.97 0 0 0 12.057 24h.014c6.638 0 12.041-5.402 12.041-12.044C24.112 5.402 18.695 0 12.057 0zm0 22.061h-.014a9.93 9.93 0 0 1-5.057-1.382l-.363-.215-3.756 1.201 1.226-3.677-.238-.378A9.945 9.945 0 0 1 2.116 12.05c0-5.514 4.488-10 10.005-10 2.671 0 5.18 1.04 7.07 2.929a9.93 9.93 0 0 1 2.93 7.075c0 5.514-4.488 10.007-10.063 10.007z" />
      </svg>
    </a>
  );
}
