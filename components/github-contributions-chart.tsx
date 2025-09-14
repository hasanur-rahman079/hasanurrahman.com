"use client";

import { useState } from "react";

type GitHubContributionsChartProps = {
  username: string;
  year: number;
};

export default function GitHubContributionsChart({
  username,
  year,
}: GitHubContributionsChartProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  const handleImageError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  return (
    <div className="relative">
      {/* Loading skeleton */}
      {isLoading && (
        <div className="flex h-32 w-full animate-pulse items-center justify-center rounded-lg bg-gray-100 p-2 shadow dark:bg-gray-800">
          <div className="flex items-center space-x-2 text-gray-500 dark:text-gray-400">
            <div className="h-4 w-4 animate-spin rounded-full border-2 border-gray-300 border-t-gray-600" />
            <span className="text-sm">Loading contributions chart...</span>
          </div>
        </div>
      )}

      {/* Error state */}
      {hasError && !isLoading && (
        <div className="flex h-32 w-full items-center justify-center rounded-lg bg-gray-100 p-2 shadow dark:bg-gray-800">
          <div className="text-center text-gray-500 dark:text-gray-400">
            <span className="text-sm">Failed to load contributions chart</span>
          </div>
        </div>
      )}

      {/* Actual image */}
      {/* biome-ignore lint/a11y/noNoninteractiveElementInteractions: Image load handlers are necessary for loading state */}
      {/* biome-ignore lint/performance/noImgElement: External GitHub chart requires img element */}
      <img
        alt={`GitHub Contributions ${year}`}
        className={`w-full rounded-lg p-2 shadow transition-opacity duration-300 ${
          isLoading ? "absolute opacity-0" : "opacity-100"
        }`}
        onError={handleImageError}
        onLoad={handleImageLoad}
        src={`https://ghchart.rshah.org/38b000/${username}`}
      />
    </div>
  );
}
