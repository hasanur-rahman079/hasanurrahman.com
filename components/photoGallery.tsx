"use client";

import { useState } from "react";
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
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <>
      {loading ? (
        <div className="text-center">Loading...</div>
      ) : (
        <>
          <LightGallery
            elementClassNames="columns-2 gap-1"
            speed={500}
            plugins={[lgThumbnail, lgZoom]}
          >
            {images.resources.map((obj) => {
              return (
                <a
                  className="flex flex-wrap p-2"
                  key={obj.public_id}
                  href={obj.secure_url}
                  data-sub-html={`${obj.des}, Location: ${obj.location}`}
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
                    alt={`${
                      obj.title || obj.filename
                    }-MD. Hasanur Rahman (Hasanur)`}
                    src={obj.secure_url}
                  />

                  {/* <div className="absolute pt-1 pl-1">
                <div className="bg-slate-700/80 rounded flex gap-1 p-1">
                  <HiOutlineMapPin color="white" />
                  <p className="text-xs text-slate-100">{obj.location}</p>
                </div>
              </div> */}
                </a>
              );
            })}
          </LightGallery>

          {/* <div className="mt-8">
            {!loading && img && (
              <button
                className="border w-full py-4 rounded hover:bg-slate-200 transition-all duration-300"
                onClick={handleLoadMore}
              >
                Load More
              </button>
            )}
          </div> */}
        </>
      )}
    </>
  );
}
