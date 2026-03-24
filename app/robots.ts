import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/cron/", "/.next/"],
      },
    ],
    sitemap: "https://www.hasanurrahman.me/sitemap.xml",
    host: "https://www.hasanurrahman.me",
  };
}
