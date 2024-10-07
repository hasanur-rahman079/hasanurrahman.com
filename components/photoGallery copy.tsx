"use client";

import { useState, useEffect } from "react";
import LightGallery from "lightgallery/react";

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

// import plugins if you need
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import Image from "next/image";
import { HiOutlineMapPin } from "react-icons/hi2";

interface ImageData {
  id: number;
  img: string;
  des: string;
  alt: string;
  date: string;
  location: string;
}

interface PhotoGalleryProps {
  img: ImageData[];
}

export default function PhotoGalleryOld({ img }: PhotoGalleryProps) {
  const [sortedImages, setSortedImages] = useState<ImageData[]>([]);

  useEffect(() => {
    const sorted = [...img].sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
    setSortedImages(sorted);
  }, [img]);

  return (
    <>
      <LightGallery
        elementClassNames="columns-2 gap-1"
        speed={500}
        plugins={[lgThumbnail, lgZoom]}
      >
        {sortedImages.map((obj) => {
          return (
            <a
              className="flex flex-wrap p-2"
              key={obj.id}
              href={obj.img}
              data-sub-html={`${obj.des}, Location: ${obj.location}, Date: ${obj.date}`}
            >
              <Image
                width={400}
                height={500}
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
                className="img-responsive rounded bg-slate-200 relative"
                alt={`${obj.alt}-MD. Hasanur Rahman (Hasanur)`}
                src={obj.img}
              />

              <div className="absolute pt-1 pl-1">
                <div className="bg-slate-700/80 rounded flex gap-1 p-1">
                  <HiOutlineMapPin color="white" />
                  <p className="text-xs text-slate-100">{obj.location}</p>
                </div>
              </div>
            </a>
          );
        })}
      </LightGallery>
    </>
  );
}
