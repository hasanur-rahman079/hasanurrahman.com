import { allBlogs } from "contentlayer/generated";
import type { Metadata } from "next";
import Link from "next/link";
import ViewCounter from "./view-counter";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Read my thoughts and documentation on bioinformatics, software development, design, and more.",
};

export default async function BlogPage() {
  return (
    <section>
      <h1 className="mb-5 font-bold font-serif text-3xl">Blog</h1>
      {allBlogs
        .sort((a, b) => {
          if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
            return -1;
          }
          return 1;
        })
        .map((post) => (
          <Link
            className="mb-4 flex flex-col space-y-1"
            href={`/blog/${post.slug}`}
            key={post.slug}
          >
            <div className="flex w-full flex-col">
              <p>{post.title}</p>
              <ViewCounter slug={post.slug} trackView={false} />
            </div>
          </Link>
        ))}
    </section>
  );
}
