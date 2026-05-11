# /public/integrantes

Fotos de retrato de los 6 integrantes de RUMBO.

## Archivos esperados

Mantener **exactamente estos nombres de archivo** (los referencia `lib/data.ts`):

| Archivo | Integrante | Rol |
|---|---|---|
| `martina-puebla.jpg` | Martina Puebla | Voz |
| `richard-toro.png` | Richard Toro | Guitarra y Dirección |
| `nahuel-scarpelli.png` | Nahuel Scarpelli | Guitarra y Producción |
| `matias-rios.jpg` | Matías Ríos | Piano y Sintetizadores |
| `samuel-franco.png` | Samuel Franco | Bajo |
| `absalon-dhuin.png` | Absalón "Chino" Dhuin | Batería y Producción |

> Si querés cambiar la extensión (`.jpg` ↔ `.png`), avisame para actualizar `lib/data.ts` en el mismo commit.

## Especificaciones

- **Formato**: JPG o PNG.
- **Aspecto**: cuadrado **1:1** (el componente `Nosotros.tsx` recorta a `aspect-square` con `object-cover`).
- **Tamaño mínimo**: 800×800 px. Ideal **1200×1200 px** o más.
- **Encuadre**: rostro centrado, dejar aire arriba y a los costados — el grid recorta los bordes en pantallas chicas.
- **Estilo**: el sitio aplica un `grayscale-[0.3]` que se quita al hover. Funciona mejor con fotos contrastadas y de tono cálido/oscuro para mantener coherencia con la paleta del sitio.
- **Peso**: idealmente <300 KB cada una. Comprimir en [squoosh.app](https://squoosh.app) si superan los 500 KB.

## Reemplazo

Para reemplazar una foto: subir el archivo nuevo con el mismo nombre. Git pisa la versión anterior y Next.js sirve la nueva en el próximo build.

> Una vez actualizadas todas las fotos, borrar este README.
