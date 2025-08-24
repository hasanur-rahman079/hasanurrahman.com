"use client";

import { useEffect } from "react";
import useSWR from "swr";

type PostView = {
  slug: string;
  total: string;
};

async function fetcher<JSON = any>(
  input: RequestInfo,
  init?: RequestInit
): Promise<JSON> {
  const res = await fetch(input, init);
  return res.json();
}

// Loading skeleton component
function ViewCounterSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="h-4 bg-neutral-200 dark:bg-neutral-700 rounded w-24"></div>
    </div>
  );
}

export default function ViewCounter({
  slug,
  trackView,
}: {
  slug: string;
  trackView: boolean;
}) {
  const { data, isLoading } = useSWR<PostView>(`/api/views/${slug}`, fetcher);
  const views = data?.total || 0;

  useEffect(() => {
    const registerView = () =>
      fetch(`/api/views/${slug}`, {
        method: "POST",
      });

    if (trackView) {
      registerView();
    }
  }, [slug, trackView]);

  if (isLoading) {
    return <ViewCounterSkeleton />;
  }

  return (
    <p className="font-mono text-sm text-neutral-500 tracking-tighter">
      {views ? `${Number(views).toLocaleString()} views` : "0 views"}
    </p>
  );
}
