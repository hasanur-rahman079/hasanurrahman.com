import { allBlogs } from "contentlayer/generated";

export default async function sitemap() {
  const blogs = allBlogs.map((post) => ({
    url: `https://hasanurrahman.com/blog/${post.slug}`,
    lastModified: post.publishedAt,
  }));

  const routes = ["", "/about", "/blog", "/research", "/affiliations", "/dev"].map(
    (route) => ({
      url: `https://hasanurrahman.com${route}`,
      lastModified: new Date().toISOString().split("T")[0],
    })
  );

  return [...routes, ...blogs];
}
