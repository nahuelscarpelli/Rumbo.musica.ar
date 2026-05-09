import { NextResponse } from "next/server";
import { readFile, stat } from "node:fs/promises";
import path from "node:path";
import { isStemName } from "@/lib/stems";
import { rateLimit } from "@/lib/rate-limit";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const STEMS_DIR = path.join(process.cwd(), "stems");

function clientIp(req: Request): string {
  const fwd = req.headers.get("x-forwarded-for");
  if (fwd) return fwd.split(",")[0]!.trim();
  return req.headers.get("x-real-ip") ?? "anon";
}

function deny(status: number, body: string) {
  return new NextResponse(body, {
    status,
    headers: {
      "Cache-Control": "no-store, no-cache",
      "X-Robots-Tag": "noindex",
    },
  });
}

export async function GET(
  req: Request,
  { params }: { params: { track: string } }
) {
  // 1. Whitelist
  const track = params.track;
  if (!isStemName(track)) {
    return deny(404, "Not found");
  }

  // 2. Rate limit
  const ip = clientIp(req);
  const rl = rateLimit(`stem:${ip}`, { limit: 10, windowMs: 60_000 });
  if (!rl.ok) {
    return new NextResponse("Too many requests", {
      status: 429,
      headers: {
        "Cache-Control": "no-store, no-cache",
        "Retry-After": String(Math.ceil(rl.resetMs / 1000)),
      },
    });
  }

  // 3. Read file (404 if missing — graceful while stems aren't uploaded)
  const filePath = path.join(STEMS_DIR, `${track}.mp3`);
  try {
    await stat(filePath);
  } catch {
    return deny(404, "Stem unavailable");
  }

  let buffer: Buffer;
  try {
    buffer = await readFile(filePath);
  } catch {
    return deny(500, "Stem read error");
  }

  // 4. Stream with anti-download headers
  return new NextResponse(new Uint8Array(buffer), {
    status: 200,
    headers: {
      "Content-Type": "audio/mpeg",
      "Content-Length": String(buffer.byteLength),
      "Cache-Control": "no-store, no-cache",
      "X-Content-Type-Options": "nosniff",
      "X-Robots-Tag": "noindex",
      "Accept-Ranges": "none",
    },
  });
}
