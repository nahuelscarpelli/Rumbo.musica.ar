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
    comingSoon: true,
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
    time: "21:00 hs",
    event: "Del Silencio a la Luna",
    location: "Nave Cultural, Mendoza",
    upcoming: true,
    featured: true,
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
  { href: "#arma-el-rumbo", label: "Armá el Rumbo" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#fechas", label: "Fechas" },
  { href: "#galeria", label: "Galería" },
  { href: "#prensa", label: "Prensa" },
  { href: "#contacto", label: "Contacto" },
];
