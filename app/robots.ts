export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/api/og/*"
      },
    ],
    sitemap: "https://www.hasanurrahman.me/sitemap.xml",
    host: "https://www.hasanurrahman.me",
  };
}
