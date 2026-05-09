/**
 * Simple in-memory rate limiter, sliding window.
 *
 * Note: per-instance only. On Vercel each serverless cold start gets a fresh
 * Map, and concurrent instances each track separately. Good enough to deter
 * casual scraping; replace with Upstash/Redis if you need real enforcement.
 */
type Hit = { timestamps: number[] };
const buckets = new Map<string, Hit>();

export type RateLimitResult = {
  ok: boolean;
  remaining: number;
  resetMs: number;
};

export function rateLimit(
  key: string,
  { limit, windowMs }: { limit: number; windowMs: number }
): RateLimitResult {
  const now = Date.now();
  const cutoff = now - windowMs;

  const bucket = buckets.get(key) ?? { timestamps: [] };
  bucket.timestamps = bucket.timestamps.filter((t) => t > cutoff);

  if (bucket.timestamps.length >= limit) {
    buckets.set(key, bucket);
    const oldest = bucket.timestamps[0]!;
    return {
      ok: false,
      remaining: 0,
      resetMs: Math.max(0, oldest + windowMs - now),
    };
  }

  bucket.timestamps.push(now);
  buckets.set(key, bucket);

  // Light-weight cleanup: occasionally drop empty buckets
  if (buckets.size > 1000 && Math.random() < 0.01) {
    for (const [k, b] of buckets.entries()) {
      if (b.timestamps.length === 0) buckets.delete(k);
    }
  }

  return {
    ok: true,
    remaining: limit - bucket.timestamps.length,
    resetMs: windowMs,
  };
}
