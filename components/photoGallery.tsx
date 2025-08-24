"use client";

import { useState, useEffect } from "react";
import LightGallery from "lightgallery/react";

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-transitions.css";

// import plugins if you need
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import Image from "next/image";
import { HiOutlineMapPin } from "react-icons/hi2";
import GallerySkeleton from "./gallery-skeleton";

interface ImageData {
  asset_id: string;
  public_id: string;
  folder: string;
  filename: string;
  format: string;
  version: number;
  resource_type: string;
  type: string;
  created_at: string;
  uploaded_at: string;
  bytes: number;
  width: number;
  height: number;
  aspect_ratio: number;
  pixels: number;
  url: string;
  secure_url: string;
  status: string;
  access_mode: string;
  title?: string;
  des?: string;
  location?: string;
}

interface PhotoGalleryProps {
  images: {
    resources: ImageData[];
  };
}

export default function PhotoGallery({ images }: PhotoGalleryProps) {
  const [displayedImages, setDisplayedImages] = useState<ImageData[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const imagesPerPage = 10;

  useEffect(() => {
    if (images?.resources) {
      const initialImages = images.resources.slice(0, imagesPerPage);
      setDisplayedImages(initialImages);
      setHasMore(images.resources.length > imagesPerPage);
    }
  }, [images]);

  const loadMore = () => {
    if (loading) return;
    
    setLoading(true);
    setTimeout(() => {
      const nextPage = currentPage + 1;
      const startIndex = 0;
      const endIndex = nextPage * imagesPerPage;
      const newImages = images.resources.slice(startIndex, endIndex);
      
      setDisplayedImages(newImages);
      setCurrentPage(nextPage);
      setHasMore(endIndex < images.resources.length);
      setLoading(false);
    }, 500);
  };

  if (!images?.resources || images.resources.length === 0) {
    return <GallerySkeleton count={10} />;
  }

  return (
    <>
      <LightGallery
        elementClassNames="columns-2 gap-1"
        speed={500}
        plugins={[lgThumbnail, lgZoom]}
      >
        {displayedImages.map((obj) => {
          const title = obj.title || obj.filename || "Image";
          const description = obj.des || "";
          const location = obj.location || "";
          
          return (
            <a
              className="flex flex-wrap p-2"
              key={obj.public_id}
              href={obj.secure_url}
              data-sub-html={`${title}${description ? ` - ${description}` : ""}${location ? ` | Location: ${location}` : ""}`}
            >
              <Image
                key={obj.asset_id}
                width={400}
                height={500}
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
                className="img-responsive rounded bg-slate-200 relative"
                alt={`${title} - MD. Hasanur Rahman (Hasanur)`}
                src={obj.secure_url}
              />

              {location && (
                <div className="absolute pt-1 pl-1">
                  <div className="bg-slate-700/80 rounded flex gap-1 p-1">
                    <HiOutlineMapPin color="white" />
                    <p className="text-xs text-slate-100">{location}</p>
                  </div>
                </div>
              )}
            </a>
          );
        })}
      </LightGallery>

      {hasMore && (
        <div className="mt-8">
          <button
            className="border w-full py-4 rounded hover:bg-slate-200 dark:hover:bg-slate-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={loadMore}
            disabled={loading}
          >
            {loading ? "Loading..." : "View More"}
          </button>
        </div>
      )}
    </>
  );
}
