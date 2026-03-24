import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "404 - Page Not Found",
  description: "The page you are looking for does not exist.",
};

export default function NotFound() {
  return (
    <section>
      <h1 className="font-bold font-serif text-3xl">404</h1>
      <p className="my-5 text-neutral-700 dark:text-neutral-300">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        className="text-neutral-500 underline transition-all hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200"
        href="/"
      >
        ← back to home
      </Link>
    </section>
  );
}
