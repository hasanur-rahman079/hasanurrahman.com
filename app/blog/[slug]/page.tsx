import { Mdx } from "components/mdx";
import { allBlogs } from "contentlayer/generated";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Balancer from "react-wrap-balancer";
import {
  absoluteUrl,
  OG_IMAGE,
  PERSON_ID,
  SITE_NAME,
  SITE_URL,
  WEBSITE_ID,
} from "@/lib/site";
import ViewCounter from "../view-counter";

interface Params {
  slug: string;
}

function getOgImage(title: string, image?: string) {
  return image
    ? absoluteUrl(image)
    : absoluteUrl(`/api/og?title=${encodeURIComponent(title)}`);
}

export async function generateStaticParams() {
  return allBlogs.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata(props: {
  params: Promise<Params>;
}): Promise<Metadata | undefined> {
  const params = await props.params;
  const post = allBlogs.find((post) => post.slug === params.slug);
  if (!post) {
    return;
  }

  const {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
    slug,
  } = post;
  const ogImage = getOgImage(title, image);

  return {
    title,
    description,
    authors: [{ name: SITE_NAME, url: SITE_URL }],
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      authors: [SITE_NAME],
      siteName: SITE_NAME,
      locale: "en-US",
      url: absoluteUrl(`/blog/${slug}`),
      images: [{ url: ogImage, width: OG_IMAGE.width, height: OG_IMAGE.height }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function Blog(props: { params: Promise<Params> }) {
  const params = await props.params;
  const post = allBlogs.find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  const url = absoluteUrl(`/blog/${post.slug}`);
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${url}#article`,
        headline: post.title,
        description: post.summary,
        datePublished: post.publishedAt,
        dateModified: post.publishedAt,
        image: getOgImage(post.title, post.image),
        url,
        mainEntityOfPage: { "@type": "WebPage", "@id": url },
        inLanguage: "en",
        author: { "@id": PERSON_ID },
        publisher: { "@id": PERSON_ID },
        isPartOf: { "@id": WEBSITE_ID },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          {
            "@type": "ListItem",
            position: 2,
            name: "Blog",
            item: absoluteUrl("/blog"),
          },
          { "@type": "ListItem", position: 3, name: post.title, item: url },
        ],
      },
    ],
  };

  return (
    <section>
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD built from trusted frontmatter
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
      <h1 className="max-w-[650px] font-bold font-serif text-3xl">
        <Balancer>{post.title}</Balancer>
      </h1>
      <div className="mt-4 mb-8 grid max-w-[650px] grid-cols-[auto_1fr_auto] items-center font-mono text-sm">
        <div className="rounded-md bg-neutral-100 px-2 py-1 tracking-tighter dark:bg-neutral-800">
          <time dateTime={post.publishedAt}>{post.publishedAt}</time>
        </div>
        <div className="mx-2 h-[0.2em] bg-neutral-50 dark:bg-neutral-800" />
        <ViewCounter slug={post.slug} trackView />
      </div>
      <Mdx code={post.body.code} />
    </section>
  );
}
