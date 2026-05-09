# /stems — Audio stems (privado)

**Nunca subir a `/public`.** Esta carpeta vive fuera del directorio público.
Los archivos se sirven mediante la API route protegida en
`/app/api/stem/[track]/route.ts`.

## Archivos esperados

5 stems, mismo BPM y duración exacta (sincronizados al ms):

| Archivo | Pista |
|---|---|
| `drums.mp3` | Batería |
| `vocals.mp3` | Voz |
| `guitars.mp3` | Guitarras |
| `keys.mp3` | Teclados |
| `fx.mp3` | FX / sintes / texturas |

## Especificaciones

- **Formato**: MP3 (192kbps mínimo) o WebM
- **Sincronización**: mismo punto de inicio (silencio al comienzo si es
  necesario para alinear todas las pistas al ms)
- **Duración**: idéntica entre todos los archivos
- **Loop-friendly**: que el final empalme con el comienzo sin click
- **Loudness**: normalizar todos los stems al mismo loudness (LUFS) para
  que los faders se sientan parejos

## Variables de entorno

```env
STEM_TRACK_NAME="Nombre de la canción"   # Ejemplo: "Zamba para no morir"
```

Configurar en Vercel → Settings → Environment Variables.

## Notas

- Los archivos se incluyen en el bundle de Vercel via `outputFileTracingIncludes`
  en `next.config.mjs`. Tener cuidado con el tamaño total (50 MB de límite por
  función serverless en plan gratuito).
- Si hace falta cambiar la canción del player, reemplazar los 5 archivos y
  actualizar `STEM_TRACK_NAME`.
