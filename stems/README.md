# /stems — Audio stems (privado)

**Nunca subir a `/public`.** Esta carpeta vive fuera del directorio público.
Los archivos se sirven mediante la API route protegida en
`/app/api/stem/[track]/route.ts`.

## Archivos esperados

6 stems, mismo BPM y duración exacta (sincronizados al ms):

| Archivo | Pista |
|---|---|
| `drums.mp3` | Batería |
| `bass.mp3` | Bajo |
| `guitars.mp3` | Guitarras |
| `vocals.mp3` | Voz |
| `fx.mp3` | FX / sintes / texturas |
| `mix.mp3` | Mezcla / otros instrumentos |

## Especificaciones

- **Formato**: MP3 **192 kbps** (sweet spot calidad/peso). Total ~30 MB
  los 6 — debajo del límite de 50 MB de funciones serverless en Vercel.
- **Sincronización**: mismo punto de inicio (silencio al comienzo si es
  necesario para alinear todas las pistas al ms).
- **Duración**: idéntica entre todos los archivos.
- **Loop-friendly**: que el final empalme con el comienzo sin click.
- **Loudness**: normalizar todos los stems al mismo loudness (LUFS) para
  que los faders se sientan parejos.

## Variables de entorno

```env
STEM_TRACK_NAME="Nombre de la canción"   # Ejemplo: "Zamba para no morir"
```

Configurar en Vercel → Settings → Environment Variables.

## Notas

- Los archivos se incluyen en el bundle de Vercel via `outputFileTracingIncludes`
  en `next.config.mjs`. Cuidado con el tamaño total (50 MB de límite por
  función serverless).
- Si hace falta cambiar la canción del player, reemplazar los 6 archivos y
  actualizar `STEM_TRACK_NAME`.
