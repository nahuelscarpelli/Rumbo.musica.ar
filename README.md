# RUMBO — Sitio Oficial

Sitio web oficial de **RUMBO**, banda mendocina de folclore fusión.
Hosteado en `rumbo.musica.ar` (en trámite).

> Música argentina, sin etiquetas.

---

## Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (animaciones)
- **Vercel** (deploy gratuito recomendado)

---

## Desarrollo local

```bash
# 1. Instalar dependencias
npm install

# 2. Copiar variables de entorno y completarlas
cp .env.example .env.local

# 3. Servidor de desarrollo
npm run dev
# → http://localhost:3000
```

### Scripts

| Comando             | Descripción                                |
| ------------------- | ------------------------------------------ |
| `npm run dev`       | Servidor de desarrollo (hot reload)        |
| `npm run build`     | Build de producción                        |
| `npm run start`     | Levanta el build de producción             |
| `npm run lint`      | Linter de Next.js                          |
| `npm run typecheck` | Chequeo de tipos sin emitir archivos       |

---

## Variables de entorno

Definidas en `.env.example`. Todas son **públicas** (`NEXT_PUBLIC_`).

```env
NEXT_PUBLIC_SPOTIFY_EMBED_URL      # URL completa del embed de Spotify (artist o playlist)
NEXT_PUBLIC_YOUTUBE_CHANNEL_URL    # URL del canal de YouTube
NEXT_PUBLIC_YOUTUBE_LATEST_VIDEO   # ID del video destacado en #galeria
NEXT_PUBLIC_INSTAGRAM_URL          # URL de Instagram
NEXT_PUBLIC_TIKTOK_URL             # URL de TikTok
NEXT_PUBLIC_FORMSPREE_ID           # ID de Formspree para el formulario de contacto
```

**Sin estas variables el sitio funciona** — los embeds muestran un fallback con el logo y el formulario muestra un mensaje de error pidiendo que escriban directo al mail.

---

## Deploy en Vercel (gratis)

Vercel ofrece hosting gratuito ideal para este proyecto (similar al patrón de Foundation).

1. Crear cuenta en [vercel.com](https://vercel.com).
2. **Import Git Repository** → seleccionar este repo.
3. Vercel detecta Next.js automáticamente. No hace falta tocar config de build.
4. Pegar las variables de entorno (sección **Environment Variables**).
5. **Deploy**.
6. Configurar el dominio `rumbo.musica.ar` en **Settings → Domains** una vez aprobado el trámite.

### Alternativas de hosting gratuito

- **Cloudflare Pages**: build command `npm run build`, output `.next` (con adapter).
- **Netlify**: detecta Next.js automáticamente, plan free generoso.

---

## Cómo actualizar contenido

Todo el contenido textual de la banda vive en **`lib/data.ts`**. Editar ese archivo y push — Vercel redespliega solo.

### Agregar una fecha próxima

`lib/data.ts` → arreglo `UPCOMING_DATES`:

```ts
export const UPCOMING_DATES: ShowDate[] = [
  {
    date: "12 OCT 2026",
    event: "Del Silencio a la Luna",
    location: "Teatro Independencia, Mendoza",
    upcoming: true,
    ticketUrl: "https://...",
  },
];
```

### Agregar un release

`lib/data.ts` → arreglo `RELEASES`:

```ts
{
  title: "Nuevo single",
  description: "feat. Artista invitado",
}
```

### Cambiar integrantes

`lib/data.ts` → arreglo `MEMBERS`. Cada integrante tiene `name`, `role` e `initials` (2 letras que se muestran como placeholder hasta cargar la foto real).

### Reemplazar fotos placeholder

Subir las fotos a `/public/galeria/...` y reemplazar el componente `Galeria.tsx` para usar `<Image src="..." />` de `next/image` en lugar del logo SVG que aparece como placeholder.

### Reemplazar PDFs de prensa

Reemplazar los archivos:
- `/public/rumbo-gacetilla.pdf`
- `/public/rumbo-rider.pdf`

Los enlaces de descarga ya apuntan ahí.

---

## Estructura

```
.
├── app/
│   ├── layout.tsx           # Root layout, fuentes, metadata SEO
│   ├── page.tsx             # Landing (todas las secciones)
│   ├── globals.css          # Design tokens, grain overlay, utilidades
│   ├── sitemap.ts           # Sitemap auto-generado
│   └── prensa/page.tsx      # EPK extendido
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Musica.tsx
│   ├── Show.tsx             # "Del Silencio a la Luna"
│   ├── Nosotros.tsx
│   ├── Fechas.tsx
│   ├── Galeria.tsx
│   ├── Prensa.tsx
│   ├── Contacto.tsx
│   ├── Footer.tsx
│   └── ui/
│       ├── RumboLogo.tsx    # SVG del logo
│       ├── SectionTitle.tsx
│       ├── GrainOverlay.tsx
│       └── Cursor.tsx       # Cursor custom (solo desktop)
├── lib/
│   └── data.ts              # Integrantes, releases, fechas, contacto
├── public/
│   ├── favicon.svg
│   ├── logo.svg
│   ├── robots.txt
│   ├── rumbo-gacetilla.pdf  # placeholder — reemplazar
│   └── rumbo-rider.pdf      # placeholder — reemplazar
├── tailwind.config.ts
├── next.config.mjs
└── tsconfig.json
```

---

## Diseño

- Paleta oscura (`#0a0a0a` base) con acento rojo/óxido (`#c0392b`) y crema cálido (`#e8d5b7`).
- Tipografías: **Bebas Neue** (display) + **DM Mono** (cuerpo y técnico).
- Grain overlay SVG inline aplicado sobre todo el `<body>`.
- Animaciones con `prefers-reduced-motion` respetado.
- Mobile-first.

---

## Marca

INPI Nº 3.755.185 — Clase 41
Mendoza, Argentina
[@rumbo_folclore](https://www.instagram.com/rumbo_folclore) · rumbofolclore@gmail.com
