import { allBlogs } from "contentlayer/generated";

export default async function sitemap() {
  const blogs = allBlogs.map((post) => ({
    url: `https://www.hasanurrahman.me/blog/${post.slug}`,
    lastModified: post.publishedAt,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const routes = [
    { route: "", priority: 1.0, changeFrequency: 'weekly' as const },
    { route: "/about", priority: 0.8, changeFrequency: 'monthly' as const },
    { route: "/blog", priority: 0.9, changeFrequency: 'weekly' as const },
    { route: "/research", priority: 0.8, changeFrequency: 'monthly' as const },
    { route: "/affiliations", priority: 0.7, changeFrequency: 'monthly' as const },
    { route: "/dev", priority: 0.7, changeFrequency: 'monthly' as const },
    { route: "/gallery", priority: 0.6, changeFrequency: 'monthly' as const },
  ].map(({ route, priority, changeFrequency }) => ({
    url: `https://www.hasanurrahman.me${route}`,
    lastModified: new Date().toISOString().split("T")[0],
    changeFrequency,
    priority,
  }));

  return [...routes, ...blogs];
}
