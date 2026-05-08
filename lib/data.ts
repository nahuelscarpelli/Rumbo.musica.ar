export type Member = {
  name: string;
  role: string;
  initials: string;
};

export type Release = {
  title: string;
  description: string;
  spotifyUrl?: string;
  youtubeUrl?: string;
};

export type ShowDate = {
  date: string;
  event: string;
  location: string;
  upcoming?: boolean;
  ticketUrl?: string;
};

export type Act = {
  number: string;
  title: string;
  light: string;
  tagline: string;
};

export const MEMBERS: Member[] = [
  { name: "Martina Puebla", role: "Voz", initials: "MP" },
  { name: "Richard Toro", role: "Guitarra y Dirección", initials: "RT" },
  { name: "Nahuel Scarpelli", role: "Guitarra y Producción", initials: "NS" },
  { name: "Matías Ríos", role: "Piano y Sintetizadores", initials: "MR" },
  { name: "Samuel Franco", role: "Bajo", initials: "SF" },
  { name: "Absalón \"Chino\" Dhuin", role: "Batería y Producción", initials: "AD" },
];

export const RELEASES: Release[] = [
  {
    title: "La Luna",
    description: "Reversión de Áhyre",
  },
  {
    title: "Mi mariposa triste",
    description: "Reversión de Hernán Figueroa Reyes",
  },
  {
    title: "Zamba para no morir",
    description: "feat. Cristian Soloa",
  },
];

export const ACTS: Act[] = [
  { number: "I", title: "La Tierra", light: "0–5% luz", tagline: "El origen" },
  { number: "II", title: "El Despertar", light: "5–20% luz", tagline: "La raíz que despierta" },
  { number: "III", title: "La Raíz", light: "20–50% luz", tagline: "Fusión total" },
  { number: "IV", title: "El Vuelo", light: "50–80% luz", tagline: "La expansión" },
  { number: "V", title: "La Luna", light: "78–100% luz", tagline: "La plenitud" },
];

export const PAST_DATES: ShowDate[] = [
  {
    date: "Destacado",
    event: "Fiesta Departamental de la Vendimia",
    location: "San Martín, Mendoza",
  },
  {
    date: "Destacado",
    event: "Vía Blanca Vendimia de Tupungato",
    location: "Tupungato, Mendoza",
  },
  {
    date: "Destacado",
    event: "Casino de Mendoza",
    location: "San Martín, Mendoza",
  },
  {
    date: "Destacado",
    event: "Cierre de Semana Santa",
    location: "Manzano Histórico, Tunuyán",
  },
  {
    date: "Destacado",
    event: "Casino-Hotel Fuente Mayor",
    location: "Vista Flores, Mendoza",
  },
  {
    date: "Destacado",
    event: "25 de Mayo Departamental",
    location: "Tunuyán y Tupungato",
  },
];

export const UPCOMING_DATES: ShowDate[] = [
  // Cuando haya fechas confirmadas, agregarlas aquí.
  // Ejemplo:
  // { date: "12 OCT 2026", event: "Del Silencio a la Luna", location: "Teatro Independencia, Mendoza", upcoming: true, ticketUrl: "#" },
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

export const SOCIAL = {
  instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL || "https://www.instagram.com/rumbo_folclore",
  youtube: process.env.NEXT_PUBLIC_YOUTUBE_CHANNEL_URL || "https://www.youtube.com/@rumbo_folclore",
  tiktok: process.env.NEXT_PUBLIC_TIKTOK_URL || "https://www.tiktok.com/@rumbo_folclore",
  spotify: "https://open.spotify.com/",
  linktree: "https://linktr.ee/rumbofolclore",
};

export const NAV_LINKS = [
  { href: "#musica", label: "Música" },
  { href: "#show", label: "Show" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#fechas", label: "Fechas" },
  { href: "#galeria", label: "Galería" },
  { href: "#prensa", label: "Prensa" },
  { href: "#contacto", label: "Contacto" },
];
