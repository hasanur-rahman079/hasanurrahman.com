import { allBlogs } from "contentlayer/generated";
import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site";

// lastModified is only set where we know a real date (blog posts). Stamping
// every page with the build time teaches crawlers to ignore the field.
const staticPaths = [
  "/",
  "/about",
  "/research",
  "/blog",
  "/dev",
  "/affiliations",
  "/gallery",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = staticPaths.map((path) => ({
    url: absoluteUrl(path),
  }));

  const blogRoutes: MetadataRoute.Sitemap = allBlogs.map((post) => ({
    url: absoluteUrl(`/blog/${post.slug}`),
    lastModified: new Date(post.publishedAt),
  }));

  return [...staticRoutes, ...blogRoutes];
}
