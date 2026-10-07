"use client";

import clsx from "clsx";
import Image, { type ImageProps } from "next/image";
import { useCallback, useState } from "react";

interface SkeletonImageProps extends Omit<ImageProps, "width" | "height"> {
  width: number;
  height: number;
  /** Classes for the wrapper that holds the skeleton, e.g. margins or rounding. */
  wrapperClassName?: string;
}

/**
 * next/image with a pulsing placeholder. The wrapper reserves the image's
 * aspect ratio, so the page does not jump while the photo loads.
 */
export default function SkeletonImage({
  wrapperClassName,
  className,
  onLoad,
  width,
  height,
  alt,
  ...props
}: SkeletonImageProps) {
  const [loaded, setLoaded] = useState(false);

  // A cached image can finish loading before React attaches onLoad.
  const imgRef = useCallback((img: HTMLImageElement | null) => {
    if (img?.complete && img.naturalWidth > 0) {
      setLoaded(true);
    }
  }, []);

  return (
    <span
      className={clsx(
        "relative block w-full overflow-hidden",
        !loaded && "animate-pulse bg-neutral-200 dark:bg-neutral-800",
        wrapperClassName
      )}
      style={loaded ? undefined : { aspectRatio: `${width} / ${height}` }}
    >
      <Image
        {...props}
        ref={imgRef}
        alt={alt}
        width={width}
        height={height}
        className={clsx(
          "h-auto w-full transition-opacity duration-500",
          loaded ? "opacity-100" : "opacity-0",
          className
        )}
        onLoad={(event) => {
          setLoaded(true);
          onLoad?.(event);
        }}
      />
    </span>
  );
}
