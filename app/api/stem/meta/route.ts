import { NextResponse } from "next/server";
import { stat } from "node:fs/promises";
import path from "node:path";
import { STEM_NAMES } from "@/lib/stems";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const STEMS_DIR = path.join(process.cwd(), "stems");

export async function GET() {
  const checks = await Promise.all(
    STEM_NAMES.map(async (name) => {
      try {
        await stat(path.join(STEMS_DIR, `${name}.mp3`));
        return [name, true] as const;
      } catch {
        return [name, false] as const;
      }
    })
  );

  const available = Object.fromEntries(checks);
  const ready = checks.every(([, present]) => present);

  return NextResponse.json(
    {
      ready,
      available,
      track: process.env.STEM_TRACK_NAME ?? null,
    },
    {
      headers: { "Cache-Control": "no-store, no-cache" },
    }
  );
}
