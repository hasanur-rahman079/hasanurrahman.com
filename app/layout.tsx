import type { Metadata } from "next";
import { Chivo } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import Sidebar from "@/components/sidebar";
import { Analytics } from "@vercel/analytics/react";
import {
  DEFAULT_DESCRIPTION,
  DEFAULT_TITLE,
  OG_IMAGE,
  PERSON_ID,
  SAME_AS,
  SITE_NAME,
  SITE_URL,
  WEBSITE_ID,
} from "@/lib/site";

const chivo = Chivo({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "--font-chivo",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: "%s | MD. Hasanur Rahman",
  },
  description: DEFAULT_DESCRIPTION,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  openGraph: {
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    images: [OG_IMAGE],
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    card: "summary_large_image",
    creator: "@hasanur069",
    images: [OG_IMAGE.url],
  },
  icons: {
    shortcut: "/favicon.ico",
  },
  verification: {
    google: "eZSdmzAXlLkKhNJzfgwDqWORghxnJ8qR9_CHdAh5-xw",
    yandex: "137AE967403A67845F3F1C204E322FC8",
  },
  // Every page sets its own canonical via `alternates`; this is only the
  // fallback for the homepage.
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": WEBSITE_ID,
        url: SITE_URL,
        name: SITE_NAME,
        description: DEFAULT_DESCRIPTION,
        inLanguage: "en",
        publisher: { "@id": PERSON_ID },
      },
      {
        "@type": "Person",
        "@id": PERSON_ID,
        name: SITE_NAME,
        alternateName: ["Hasanur Rahman", "Md Hasanur Rahman", "Hasanur"],
        url: SITE_URL,
        image: `${SITE_URL}/avatar.jpg`,
        sameAs: SAME_AS,
        jobTitle: "Research Assistant",
        worksFor: {
          "@type": "Organization",
          name: "Bangladesh Agricultural University",
          url: "https://bau.edu.bd",
        },
        description:
          "MD. Hasanur Rahman is a bioinformatics researcher working on cancer genomics and Alzheimer's therapeutics, and a developer based in Bangladesh.",
        knowsAbout: [
          "Bioinformatics",
          "Computational Biology",
          "Cancer Genomics",
          "Alzheimer's Disease",
          "Molecular Docking",
          "Web Development",
        ],
        address: {
          "@type": "PostalAddress",
          addressCountry: "BD",
        },
        mainEntityOfPage: { "@id": WEBSITE_ID },
      },
    ],
  };

  return (
    <html
      lang="en"
      className={clsx(
        "text-black bg-white dark:text-white dark:bg-[#111010]",
        chivo.variable
      )}
    >
      <body className="antialiased max-w-4xl mb-40 flex flex-col md:flex-row mx-4 mt-8 md:mt-20 lg:mt-32 lg:mx-auto">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        <Sidebar />
        <main className="flex-auto min-w-0 mt-6 md:mt-0 flex flex-col px-2 md:px-0">
          {children}
          <Analytics />
        </main>
      </body>
    </html>
  );
}
