import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://rumbo.musica.ar";
  return [
    { url: base, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: `${base}/prensa`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
  ];
}
