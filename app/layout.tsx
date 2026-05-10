import type { Metadata, Viewport } from "next";
import { Anton, DM_Mono } from "next/font/google";
import "./globals.css";
import { Cursor } from "@/components/ui/Cursor";
import { MusicGroupSchema, WebsiteSchema } from "@/components/seo/StructuredData";

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
    default: "RUMBO — Banda de folclore fusión de Mendoza, Argentina",
    template: "%s · RUMBO",
  },
  description:
    "RUMBO es una banda mendocina de folclore fusión. Fusionamos chacarera, zamba, gato y cueca con electrónica, guitarra eléctrica y sintetizadores. Música argentina contemporánea desde Mendoza.",
  applicationName: "RUMBO",
  generator: "Next.js",
  keywords: [
    "rumbo",
    "rumbo banda",
    "rumbo mendoza",
    "rumbo folclore",
    "rumbo folclore fusión",
    "rumbo música",
    "banda rumbo",
    "folclore argentino",
    "folclore mendoza",
    "folclore fusión",
    "música argentina contemporánea",
    "banda de mendoza",
    "chacarera fusión",
    "zamba fusión",
    "del silencio a la luna",
    "rumbo folclore argentino",
    "rumbo música argentina",
    "banda mendocina",
    "cuyo",
    "INAMU Nuevo Cuyo",
  ],
  authors: [{ name: "RUMBO", url: "https://rumbo.musica.ar" }],
  creator: "RUMBO",
  publisher: "RUMBO",
  category: "music",
  alternates: {
    canonical: "https://rumbo.musica.ar",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "RUMBO — Banda de folclore fusión de Mendoza",
    description:
      "Folclore argentino fusionado con sonidos modernos. Chacareras, zambas y gatos con electrónica, guitarra eléctrica y sintetizadores.",
    url: "https://rumbo.musica.ar",
    siteName: "RUMBO",
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: "/og/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "RUMBO — Música argentina, sin etiquetas.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RUMBO — Banda de folclore fusión de Mendoza",
    description: "Folclore argentino fusionado con sonidos modernos.",
    images: ["/og/og-default.jpg"],
  },
  icons: {
    icon: "/favicon.svg",
  },
  verification: {
    // Reemplazar cuando se registre el sitio en Google Search Console
    // google: "REEMPLAZAR-CON-CODIGO-DE-VERIFICACION",
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
      <head>
        <MusicGroupSchema />
        <WebsiteSchema />
      </head>
      <body className="grain-overlay min-h-screen bg-bg text-text antialiased">
        <Cursor />
        {children}
      </body>
    </html>
  );
}
