import { MEMBERS, SOCIAL } from "@/lib/data";

/**
 * Schema.org MusicGroup structured data.
 * Helps Google show enriched panels (band photo, members, links)
 * when people search for "Rumbo Mendoza", "Rumbo folclore", etc.
 *
 * Tested with https://search.google.com/test/rich-results
 */
export function MusicGroupSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "MusicGroup",
    name: "RUMBO",
    alternateName: ["Rumbo Folclore", "Rumbo Banda", "Rumbo Mendoza"],
    url: "https://rumbo.musica.ar",
    logo: "https://rumbo.musica.ar/logo.svg",
    image: "https://rumbo.musica.ar/og/og-default.jpg",
    description:
      "Banda mendocina de folclore fusión. Reinterpretamos el folclore argentino —chacarera, zamba, gato, cueca— fusionándolo con electrónica, guitarra eléctrica y sintetizadores.",
    genre: [
      "Folclore argentino",
      "Folclore fusión",
      "Música argentina",
      "World music",
      "Electrónica",
    ],
    foundingLocation: {
      "@type": "Place",
      name: "Mendoza, Argentina",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Mendoza",
        addressRegion: "Mendoza",
        addressCountry: "AR",
      },
    },
    member: MEMBERS.map((m) => ({
      "@type": "Person",
      name: m.name,
      roleName: m.role,
    })),
    sameAs: [
      SOCIAL.instagram,
      SOCIAL.spotify,
      SOCIAL.youtube,
      SOCIAL.tiktok,
      SOCIAL.linktree,
    ].filter(Boolean),
    email: "rumbofolclore@gmail.com",
    telephone: "+5492612524888",
  };

  return (
    <script
      type="application/ld+json"
      // Stringify with no extra whitespace so it's a single line in HTML.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/**
 * WebSite schema — enables Google sitelinks search box.
 */
export function WebsiteSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "RUMBO",
    url: "https://rumbo.musica.ar",
    inLanguage: "es-AR",
    publisher: {
      "@type": "MusicGroup",
      name: "RUMBO",
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
