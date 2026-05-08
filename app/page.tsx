import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Musica } from "@/components/Musica";
import { Show } from "@/components/Show";
import { Nosotros } from "@/components/Nosotros";
import { Fechas } from "@/components/Fechas";
import { Galeria } from "@/components/Galeria";
import { Prensa } from "@/components/Prensa";
import { Contacto } from "@/components/Contacto";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Musica />
        <Show />
        <Nosotros />
        <Fechas />
        <Galeria />
        <Prensa />
        <Contacto />
      </main>
      <Footer />
    </>
  );
}
