import { withContentlayer } from "next-contentlayer2";

// Previous domains. If these are attached to the Vercel project, every path
// 301-redirects to the same path on the current domain, which passes link
// equity (they must still resolve in DNS for this to run).
const LEGACY_HOSTS = "(www\.)?(hasanurrahman\.com|hasanurrahman\.me|hasanur\.me)";

/** @type {import('next').NextConfig} */

const nextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: LEGACY_HOSTS }],
        destination: "https://www.hasanur.site/:path*",
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "github.com",
      },
      {
        protocol: "https",
        hostname: "ghchart.rshah.org",
      },
    ],
  },
};

export default withContentlayer(nextConfig);
