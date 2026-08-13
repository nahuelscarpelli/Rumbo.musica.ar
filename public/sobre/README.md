# /public/sobre — Experiencia post-show

Página oculta accesible por QR físico entregado al finalizar
"Del Silencio a la Luna". No indexada (robots noindex + Disallow).

URL pública: **https://rumbo.musica.ar/sobre**

## Archivos

| Archivo | Descripción |
|---|---|
| `index.html` | Experiencia en 3 actos (HTML + CSS + JS vanilla) |
| `qr.png` | QR listo para imprimir en el sobre (1200×1200, mark integrado) |
| `valles.png` | **PENDIENTE** — subir la imagen `IMG_2515.PNG` con este nombre exacto |

## Configuración

Todo lo configurable vive al inicio del `<script>` en `index.html`:

- `VIDEO_ID` — ID del video de YouTube que se embebe en el Acto 3
- `LINKS.youtube / spotify / instagram / facebook` — URLs de las 4 redes
- `IMAGE_HOLD_MS` (4000) — cuánto queda visible la imagen del Acto 1.5
- `LIGHTING_MS` (8000) — duración de la subida de luz en el Acto 2

## Comportamiento

1. **Acto 1** — sobre kraft con sello R. Tap → abre la solapa.
2. **Acto 1.5** — imagen `valles.png` a pantalla completa por 4 seg.
3. **Acto 2** — luz radial que sube durante 8 seg mientras aparece
   "RUMBO" en Anton + "Del Silencio a la Luna" en Georgia itálica.
4. **Acto 3** — video de YouTube + texto de comunidad + 4 botones a
   las redes.

Respeta `prefers-reduced-motion`: salta todo y va directo al Acto 3.
