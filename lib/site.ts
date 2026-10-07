import type { Metadata } from "next";

// Single source of truth for the site's public URL and identity.
// Change SITE_URL here (or via NEXT_PUBLIC_SITE_URL) and canonicals, sitemap,
// robots, Open Graph and JSON-LD all follow.
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.hasanur.site"
).replace(/\/$/, "");

export const SITE_NAME = "MD. Hasanur Rahman";

export const DEFAULT_TITLE =
  "MD. Hasanur Rahman - Researcher, Developer & Entrepreneur";

export const DEFAULT_DESCRIPTION =
  "MD. Hasanur Rahman is a bioinformatics researcher working on cancer genomics and Alzheimer's therapeutics, and a developer. Publications, projects and writing.";

export const OG_IMAGE = {
  url: `${SITE_URL}/og.jpg`,
  width: 1920,
  height: 1080,
  alt: "MD. Hasanur Rahman - Professional Portrait",
};

// Stable @id values so schema nodes on every page refer to the same entities.
export const PERSON_ID = `${SITE_URL}/#person`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

// Profiles that identify the same person. Keep in sync with the profiles'
// own "website" field, which should point back to SITE_URL.
export const SAME_AS = [
  "https://orcid.org/0000-0001-9238-3149",
  "https://scholar.google.com/citations?user=l2q048wAAAAJ",
  "https://www.researchgate.net/profile/Md-Rahman-262",
  "https://github.com/hasanur-rahman079",
  "https://www.linkedin.com/in/hasanur069/",
  "https://x.com/hasanur069",
];

// Absolute URL for a site path.
export function absoluteUrl(path = "/") {
  return `${SITE_URL}${path === "/" ? "" : path}`;
}

// Per-page metadata with its own canonical and matching Open Graph/Twitter
// tags. Next replaces (not merges) `openGraph` from the layout, so the image
// and site name are repeated here.
export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const url = absoluteUrl(path);
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      images: [OG_IMAGE],
      locale: "en-US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [OG_IMAGE.url],
    },
  };
}
