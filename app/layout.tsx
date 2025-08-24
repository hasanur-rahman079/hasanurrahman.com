import type { Metadata } from "next";
import { Chivo } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import Sidebar from "@/components/sidebar";
import { Analytics } from "@vercel/analytics/react";

const chivo = Chivo({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "--font-chivo",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "MD. Hasanur Rahman - Researcher, Developer & Entrepreneur",
    template: "%s | MD. Hasanur Rahman",
  },
  description: "MD. Hasanur Rahman (Hasanur) is a distinguished researcher, developer, and entrepreneur. Explore his research publications, bioinformatics work, and professional achievements.",
  keywords: [
    "MD. Hasanur Rahman",
    "Hasanur Rahman", 
    "Hasanur",
    "Hasan",
    "Md. Hasanur Rahman",
    "researcher",
    "developer",
    "entrepreneur",
    "bioinformatics",
    "scholar",
    "academic",
    "Bangladesh",
    "research publications",
    "Google Scholar",
    "ResearchGate"
  ],
  authors: [{ name: "MD. Hasanur Rahman" }],
  creator: "MD. Hasanur Rahman",
  publisher: "MD. Hasanur Rahman",
  openGraph: {
    title: "MD. Hasanur Rahman - Researcher, Developer & Entrepreneur",
    description: "MD. Hasanur Rahman (Hasanur) is a distinguished researcher, developer, and entrepreneur. Explore his research publications, bioinformatics work, and professional achievements.",
    url: "https://www.hasanurrahman.me",
    siteName: "MD. Hasanur Rahman",
    images: [
      {
        url: "https://www.hasanurrahman.me/og.jpg",
        width: 1920,
        height: 1080,
        alt: "MD. Hasanur Rahman - Professional Portrait",
      },
    ],
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
    title: "MD. Hasanur Rahman - Researcher, Developer & Entrepreneur",
    description: "MD. Hasanur Rahman (Hasanur) is a distinguished researcher, developer, and entrepreneur.",
    card: "summary_large_image",
    creator: "@hasanur069",
  },
  icons: {
    shortcut: "/favicon.ico",
  },
  verification: {
    google: "eZSdmzAXlLkKhNJzfgwDqWORghxnJ8qR9_CHdAh5-xw",
    yandex: "137AE967403A67845F3F1C204E322FC8",
  },
  alternates: {
    canonical: "https://www.hasanurrahman.me",
  },
  category: "Personal Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "MD. Hasanur Rahman",
    "alternateName": ["Hasanur Rahman", "Hasanur", "Hasan"],
    "url": "https://www.hasanurrahman.me",
    "image": "https://www.hasanurrahman.me/avatar.jpg",
    "sameAs": [
      "https://scholar.google.com/citations?hl=en&authuser=1&user=l2q048wAAAAJ",
      "https://www.researchgate.net/profile/Md-Rahman-262",
      "https://twitter.com/hasanur069",
      "https://www.linkedin.com/in/hasanur069/"
    ],
    "jobTitle": "Researcher, Developer, Entrepreneur",
    "worksFor": {
      "@type": "Organization",
      "name": "Independent Researcher"
    },
    "description": "MD. Hasanur Rahman is a distinguished researcher, developer, and entrepreneur with expertise in bioinformatics and computational biology.",
    "knowsAbout": ["Bioinformatics", "Computational Biology", "Research", "Development", "Entrepreneurship"],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "BD"
    }
  };

  return (
    <html
      lang="en"
      className={clsx(
        "text-black bg-white dark:text-white dark:bg-[#111010]",
        chivo.variable
      )}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        <meta name="author" content="MD. Hasanur Rahman" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.hasanurrahman.me" />
      </head>
      <body className="antialiased max-w-4xl mb-40 flex flex-col md:flex-row mx-4 mt-8 md:mt-20 lg:mt-32 lg:mx-auto">
        <Sidebar />
        <main className="flex-auto min-w-0 mt-6 md:mt-0 flex flex-col px-2 md:px-0">
          {children}
          <Analytics />
        </main>
      </body>
    </html>
  );
}
