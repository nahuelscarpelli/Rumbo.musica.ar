# /public/brand

Logo oficial de RUMBO en sus distintas variantes y formatos.

## Archivos esperados

### SVG (prioridad — son los que se usan en el sitio)

| Archivo | Descripción | Uso |
|---|---|---|
| `rumbo-logo-full.svg` | **Símbolo + wordmark** (logo completo, horizontal) | Navbar, footer, EPK |
| `rumbo-logo-mark.svg` | **Solo el símbolo** (las 3 montañas, sin texto) | Hero, favicon, watermarks de placeholder |
| `rumbo-logo-stacked.svg` *(opcional)* | Símbolo arriba, wordmark debajo | Open Graph, prints |

> El SVG **debe ser monocromático** (un solo color) y usar `currentColor` en vez de fill/stroke fijo, así puedo recolorearlo desde CSS (rojo en hover, blanco en footer, etc.). Si tu logo tiene colores fijos, mandalo igual y yo lo adapto.

### PNG (fallback / redes)

| Archivo | Tamaño | Fondo | Uso |
|---|---|---|---|
| `rumbo-logo-full-white.png` | 2400×800 (3x) | transparente | fallback navegadores viejos |
| `rumbo-logo-mark-white.png` | 1024×1024 | transparente | apps, iOS icon |
| `rumbo-logo-full-black.png` | 2400×800 | transparente | uso sobre fondos claros (prensa) |

### Favicon (lo regenero yo a partir del SVG)

| Archivo | Tamaño |
|---|---|
| `apple-touch-icon.png` | 180×180 |
| `favicon-32.png` | 32×32 |
| `favicon-16.png` | 16×16 |

> Si tenés un manual de marca o variantes (versión negativa, monograma, etc.) mandalo todo — me sirve para usar la variante correcta en cada contexto.

> Una vez subidos los archivos, borrar este README.
