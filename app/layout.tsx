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
    default: "MD. Hasanur Rahman",
    template: "%s | MD. Hasanur Rahman",
  },
  description: "Researcher, Developer, and Entrepreneur.",
  openGraph: {
    title: "MD. Hasanur Rahman",
    description: "Researcher, Developer, and Entrepreneur.",
    url: "https://hasanurrahman.com",
    siteName: "MD. Hasanur Rahman",
    images: [
      {
        url: "https://hasanurrahman.com/og.jpg",
        width: 1920,
        height: 1080,
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
    title: "MD. Hasanur Rahman",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/favicon.ico",
  },
  verification: {
    // google: "eZSdmzAXlLkKhNJzfgwDqWORghxnJ8qR9_CHdAh5-xw",
    yandex: "137AE967403A67845F3F1C204E322FC8",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={clsx(
        "text-black bg-white dark:text-white dark:bg-[#111010]",
        chivo.variable
      )}
    >
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
