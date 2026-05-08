import type { Metadata, Viewport } from "next";
import { Anton, DM_Mono } from "next/font/google";
import "./globals.css";
import { Cursor } from "@/components/ui/Cursor";

const display = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
  display: "swap",
});

const mono = DM_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rumbo.musica.ar"),
  title: {
    default: "RUMBO — Música Argentina",
    template: "%s · RUMBO",
  },
  description:
    "Banda mendocina que fusiona el folclore argentino con sonidos modernos. Chacareras, zambas y gatos con electrónica, guitarra eléctrica y sintetizadores.",
  keywords: [
    "rumbo",
    "rumbo folclore",
    "folclore argentino",
    "banda mendoza",
    "folclore fusión",
    "música argentina",
    "del silencio a la luna",
  ],
  authors: [{ name: "RUMBO" }],
  creator: "RUMBO",
  openGraph: {
    title: "RUMBO — Música Argentina",
    description: "Folclore argentino fusionado con sonidos modernos.",
    url: "https://rumbo.musica.ar",
    siteName: "RUMBO",
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RUMBO — Música Argentina",
    description: "Folclore argentino fusionado con sonidos modernos.",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-AR" className={`${display.variable} ${mono.variable}`}>
      <body className="grain-overlay min-h-screen bg-bg text-text antialiased">
        <Cursor />
        {children}
      </body>
    </html>
  );
}
