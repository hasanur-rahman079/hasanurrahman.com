import React from "react";

interface GallerySkeletonProps {
  count?: number;
}

export default function GallerySkeleton({ count = 10 }: GallerySkeletonProps) {
  return (
    <div className="columns-2 gap-1">
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className="flex flex-wrap p-2">
          <div className="animate-pulse">
            <div className="w-full h-64 bg-neutral-200 dark:bg-neutral-700 rounded"></div>
          </div>
        </div>
      ))}
    </div>
  );
}
