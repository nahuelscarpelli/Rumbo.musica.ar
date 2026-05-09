import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Musica } from "@/components/Musica";
import { Show } from "@/components/Show";
import { StemPlayer } from "@/components/StemPlayer";
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
        <StemPlayer />
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
