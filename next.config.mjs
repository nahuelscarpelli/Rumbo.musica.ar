/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "i.scdn.co" },
      { protocol: "https", hostname: "i.ytimg.com" },
    ],
  },

  // Include /stems/*.mp3 in the serverless function bundle so the API route
  // can read them at runtime (they live outside /public on purpose).
  outputFileTracingIncludes: {
    "/api/stem/**": ["./stems/**/*"],
  },

  async headers() {
    return [
      {
        source: "/api/stem/:path*",
        headers: [
          { key: "X-Robots-Tag", value: "noindex" },
          { key: "Cache-Control", value: "no-store, no-cache" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "no-referrer" },
        ],
      },
    ];
  },
};

export default nextConfig;
