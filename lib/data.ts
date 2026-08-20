export type Member = {
  name: string;
  role: string;
  initials: string;
  image?: string;
};

export type Release = {
  title: string;
  description: string;
  spotifyTrackId?: string;
  spotifyAlbumId?: string;
  spotifyUrl?: string;
  youtubeId?: string;
  youtubeUrl?: string;
  comingSoon?: boolean;
};

export type ShowDate = {
  date: string;
  time?: string;
  event: string;
  location: string;
  upcoming?: boolean;
  featured?: boolean;
  ticketUrl?: string;
};

export type Act = {
  number: string;
   title: string;
  tagline: string;
};

export const MEMBERS: Member[] = [
  { name: "Martina Puebla", role: "Voz", initials: "MP", image: "/integrantes/marty.jpeg" },
  { name: "Richard Toro", role: "Guitarra y Dirección", initials: "RT", image: "/integrantes/richard.jpeg" },
  { name: "Nahuel Scarpelli", role: "Guitarra y Producción", initials: "NS", image: "/integrantes/nahuel.jpeg" },
  { name: "Matías Ríos", role: "Piano y Sintetizadores", initials: "MR", image: "/integrantes/maty.jpeg" },
  { name: "Samuel Franco", role: "Bajo", initials: "SF", image: "/integrantes/samu.jpeg" },
  { name: "Absalón \"Chino\" Dhuin", role: "Batería y Producción", initials: "AD", image: "/integrantes/chino.jpeg" },
];

export const RELEASES: Release[] = [
  {
    title: "La Luna",
    description: "Reversión de Áhyre",
    spotifyTrackId: "0yj1hgXv1D4mEPLaTxO2ad",
    spotifyUrl: "https://open.spotify.com/intl-es/track/0yj1hgXv1D4mEPLaTxO2ad",
    youtubeId: "LlTaNi7LUuA",
    youtubeUrl: "https://www.youtube.com/watch?v=LlTaNi7LUuA",
  },
  {
    title: "Mi mariposa triste",
    description: "Reversión de Hernán Figueroa Reyes",
    spotifyTrackId: "5yaqWWAyYg6IZijGEuWs5Y",
    spotifyUrl: "https://open.spotify.com/intl-es/track/5yaqWWAyYg6IZijGEuWs5Y",
    youtubeId: "Flicqztzb1k",
    youtubeUrl: "https://www.youtube.com/watch?v=Flicqztzb1k",
  },
  {
    title: "Live Session",
    description: "Sesión en vivo — álbum",
    spotifyAlbumId: "6w5JvTMWJl1wD4eRGPA3kJ",
    spotifyUrl: "https://open.spotify.com/intl-es/album/6w5JvTMWJl1wD4eRGPA3kJ",
    youtubeId: "VJAOUMmVxmA",
    youtubeUrl: "https://www.youtube.com/watch?v=VJAOUMmVxmA&list=PLnMoXbPBZOkRf7KSFVpgp7MqzCXgEKJ6v",
  },
  {
    title: "Zamba para no morir",
    description: "feat. Cristian Soloa",
    spotifyTrackId: "5xrYknAHFrMa9zAcJKtvga",
    spotifyUrl: "https://open.spotify.com/intl-es/track/5xrYknAHFrMa9zAcJKtvga",
    youtubeId: "n7ipMbGUwg0",
    youtubeUrl: "https://youtu.be/n7ipMbGUwg0",
  },
];

export const ACTS: Act[] = [
  { number: "I", title: "La Tierra", tagline: "El origen" },
  { number: "II", title: "El Despertar", tagline: "La raíz que despierta" },
  { number: "III", title: "La Raíz", tagline: "Fusión total" },
  { number: "IV", title: "El Vuelo", tagline: "La expansión" },
  { number: "V", title: "La Luna", tagline: "La plenitud" },
];

export const UPCOMING_DATES: ShowDate[] = [
  {
    date: "JUE 10 SEP 2026",
    time: "20:30 hs",
    event: "Del Silencio a la Luna",
    location: "Nave Cultural, Mendoza",
    upcoming: true,
    featured: true,
    ticketUrl: "https://www.entradaweb.com.ar/evento/4a801dbb/step/1",
  },
];

export const SOUND_TAGS = [
  "Zamba",
  "Chacarera",
  "Gato",
  "Cueca",
  "Electrónica",
  "Sintetizadores",
  "Guitarra Eléctrica",
  "Bombo Legüero",
];

export const CONTACT = {
  phone: "(261) 252-4888",
  phoneLink: "+5492612524888",
  email: "rumbofolclore@gmail.com",
  instagramHandle: "@rumbo_folclore",
  city: "Mendoza, Argentina",
  inpi: "INPI Nº 3.755.185 — Clase 41",
};

// Perfil oficial de RUMBO en Spotify — único lugar donde se define.
export const SPOTIFY_ARTIST_URL =
  "https://open.spotify.com/artist/4tBt8agenCfItovBi50ilq";

// Carpeta pública de fotos en alta — sin /u/N/ (que ata al índice de cuenta del dueño).
export const DRIVE_HIRES_URL =
  "https://drive.google.com/drive/folders/1Sb5F2dBX6LI4m4wyoUG7ZWdYubbfuD5x";

export const SOCIAL = {
  instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL || "https://www.instagram.com/rumbo_folclore",
  youtube: process.env.NEXT_PUBLIC_YOUTUBE_CHANNEL_URL || "https://www.youtube.com/@rumbo_folclore",
  tiktok: process.env.NEXT_PUBLIC_TIKTOK_URL || "https://www.tiktok.com/@rumbo_folclore",
  spotify: SPOTIFY_ARTIST_URL,
  linktree: "https://linktr.ee/rumbofolclore",
  facebook: "https://www.facebook.com/profile.php?id=61585107061452",
  whatsapp: "https://wa.me/5492612524888",
};

// ============================================================================
// /prensa — datos de la página de prensa (EPK)
// ============================================================================

/** Ficha técnica rápida — datos duros que un programador escanea. */
export const PRENSA_FICHA = {
  origin: "Mendoza, Argentina",
  // TODO — confirmar duración total del show en minutos
  showDurationMinutes: 125,
  // TODO — confirmar formatos disponibles (banda completa / acústico / otros)
  formats: [] as string[],
  riderUrl: "/rumbo-rider.pdf",
  logoUrl: "/logo.svg",
};

/**
 * Bios en tres largos. Todas en tercera persona, sin frases que pidan
 * permiso por la fusión y sin épica publicitaria. Cada bloque se copia
 * como texto plano desde /prensa.
 */
export const PRENSA_BIOS = {
  oneLine:
    "RUMBO es una banda de Mendoza que cruza el folclore argentino con guitarras eléctricas, sintetizadores y producción contemporánea.",
  paragraph:
    "RUMBO es una banda de Mendoza que cruza el folclore argentino —zamba, chacarera, gato, cueca— con guitarras eléctricas, sintetizadores y producción contemporánea. El bombo legüero convive con loops y texturas electrónicas; la voz, con arreglos de banda completa. Han tocado en la Fiesta Departamental de la Vendimia de San Martín y en el Festival Nacional de la Cueca y el Damasco de Santa Rosa, donde salieron ganadores del pre-festival 2025.",
  long:
    "RUMBO es una banda de Mendoza que cruza el folclore argentino con guitarras eléctricas, sintetizadores y producción contemporánea. Trabaja sobre zamba, chacarera, gato y cueca; suma bombo legüero, batería, bajo y teclados, y arma arreglos donde la raíz se sostiene a la par de las texturas electrónicas.\n\nSu propuesta en vivo se articula alrededor de Del Silencio a la Luna, un concierto teatral en cinco actos que recorre una dramaturgia continua desde la oscuridad total hasta la luz plena, con puesta lumínica sincronizada y proyección HDMI. El repertorio combina reversiones —como La Luna de Áhyre o Mi mariposa triste de Hernán Figueroa Reyes— con temas propios y colaboraciones, entre ellas Zamba para no morir junto a Cristian Soloa.\n\nLa banda ha tocado en la Fiesta Departamental de la Vendimia de San Martín, en la Vía Blanca de la Vendimia de Tupungato y en los actos del 25 de Mayo en Tunuyán y Tupungato. En 2025 ganó el pre-festival de la Cueca y el Damasco de Santa Rosa y participó como banda seleccionada del Festival Nacional en 2026. Fue elegida por La Cima FM de Tupungato dentro del ciclo Sacamos las Bandas del Garaje de Cosquín Rock Radio.\n\nRUMBO se presenta con el aval del INAMU Nuevo Cuyo y marca registrada INPI Nº 3.755.185, clase 41.",
};

export type PressMention = {
  outlet: string;
  title: string;
  context?: string;
  date?: string;
  url?: string;
};

/** Menciones de prensa. Array vacío → la sección no se renderiza. */
export const PRENSA_MENTIONS: PressMention[] = [
  {
    outlet: "Cosquín Rock Radio",
    title: "Sacamos las Bandas del Garaje",
    context: "Seleccionados por La Cima FM de Tupungato.",
  },
];

export type Antecedent = {
  event: string;
  place: string;
  year?: string;
};

export const PRENSA_ANTECEDENTS: Antecedent[] = [
  { event: "Fiesta Departamental de la Vendimia", place: "San Martín" },
  { event: "Vía Blanca de la Vendimia", place: "Tupungato" },
  { event: "25 de Mayo departamental", place: "Tunuyán y Tupungato" },
  {
    event: "Ganadores Pre Festival de la Cueca y el Damasco",
    place: "Santa Rosa",
    year: "2025",
  },
  {
    event: "Festival Nacional de la Cueca y el Damasco",
    place: "Santa Rosa",
    year: "2026",
  },
];

export type PressPhoto = {
  /** Archivo en resolución pantalla (72dpi) para la grilla y descarga baja. */
  src: string;
  /** URL de descarga en alta (300dpi). Puede coincidir con src si no hay hi-res todavía. */
  hiResUrl?: string;
  photographer: string;
  handle?: string;
  aspect: "vertical" | "horizontal";
  /** Marcar en b/n para que los diarios sepan que existe una versión monocromo. */
  monochrome?: boolean;
  alt: string;
};

/**
 * Fotos de prensa — reusa el pool de /public/galeria/ y agrega crédito
 * por foto. hiResUrl y aspecto son TODO por confirmar; por ahora todo
 * apunta al mismo archivo y se asume "horizontal" (el layout tolera ambos).
 * Créditos según mapping confirmado por RUMBO.
 */
export const PRENSA_PHOTOS: PressPhoto[] = [
  { src: "/galeria/galeria-01.jpg", photographer: "Jeremías Vilchez", handle: "@jere.vilchez", aspect: "horizontal", alt: "RUMBO en vivo — 01" },
  { src: "/galeria/galeria-02.jpg", photographer: "Jeremías Vilchez", handle: "@jere.vilchez", aspect: "horizontal", alt: "RUMBO en vivo — 02" },
  { src: "/galeria/galeria-03.jpg", photographer: "Jeremías Vilchez", handle: "@jere.vilchez", aspect: "horizontal", alt: "RUMBO en vivo — 03" },
  { src: "/galeria/galeria-04.jpg", photographer: "Jeremías Vilchez", handle: "@jere.vilchez", aspect: "horizontal", alt: "RUMBO en vivo — 04" },
  { src: "/galeria/galeria-05.jpg", photographer: "Jeremías Vilchez", handle: "@jere.vilchez", aspect: "horizontal", alt: "RUMBO en vivo — 05" },
  { src: "/galeria/galeria-06.jpg", photographer: "Jeremías Vilchez", handle: "@jere.vilchez", aspect: "horizontal", alt: "RUMBO en vivo — 06" },
  { src: "/galeria/galeria-07.jpg", photographer: "Jorge Ariel",       handle: "@jorgearielfotografia", aspect: "horizontal", alt: "RUMBO en vivo — 07" },
  { src: "/galeria/galeria-08.jpg", photographer: "Jorge Ariel",       handle: "@jorgearielfotografia", aspect: "horizontal", alt: "RUMBO en vivo — 08" },
  { src: "/galeria/galeria-09.jpg", photographer: "Jeremías Vilchez", handle: "@jere.vilchez", aspect: "horizontal", alt: "RUMBO en vivo — 09" },
  { src: "/galeria/galeria-10.jpg", photographer: "Pablo Arias", aspect: "horizontal", alt: "RUMBO en vivo — 10" },
  { src: "/galeria/galeria-11.jpg", photographer: "Pablo Arias", aspect: "horizontal", alt: "RUMBO en vivo — 11" },
];

/** Video destacado para /prensa (EN VIVO). Hardcoded — no depende de env var. */
export const PRENSA_VIDEO_ID = "36-X6NDK_Ms";

export const NAV_LINKS = [
  { href: "#musica", label: "Música" },
  { href: "#show", label: "Show" },
  { href: "#arma-el-rumbo", label: "Armá el Rumbo" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#fechas", label: "Fechas" },
  { href: "#galeria", label: "Galería" },
  { href: "#prensa", label: "Prensa" },
  { href: "#contacto", label: "Contacto" },
];
