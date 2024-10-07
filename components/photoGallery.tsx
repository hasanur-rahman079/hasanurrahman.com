"use client";

import { useState, useEffect } from "react";
import LightGallery from "lightgallery/react";
import { CldImage } from "next-cloudinary";

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
import { fetchCloudImages } from "lib/cloudinary";

interface ImageData {
  id: string;
  img: string;
  des: string;
  alt: string;
  date: string;
  pubId: string;
  location: string;
}

interface PhotoGalleryProps {
  img: {
    resources: Array<{
      asset_id: string;
      secure_url: string;
      created_at: string;
      public_id: string;
    }>;
    next_cursor?: string;
  };
}

export default function PhotoGallery({ img }: PhotoGalleryProps) {
  const [cloudinaryImages, setCloudinaryImages] = useState<ImageData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        setLoading(true);
        const response = await fetchCloudImages(img);
        console.log("Cloudinary API response", response);

        const newImages =
          response.resources?.map((image) => ({
            id: image.asset_id,
            img: image.secure_url,
            des: "",
            alt: "",
            date: image.created_at,
            pubId: image.public_id,
            location: "",
          })) || [];

        console.log("New images", newImages);

        setCloudinaryImages((prevImages) => [...prevImages, ...newImages]);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching Cloudinary images:", error);
        setLoading(false);
      }
    };

    fetchImages();
  }, [img]);

  useEffect(() => {
    setCloudinaryImages([]);
  }, [img]);

  const handleLoadMore = async () => {
    try {
      setLoading(true);
      const response = await fetchCloudImages(img.next_cursor);
      console.log("Cloudinary API response (load more)", response);

      const newImages =
        response.resources?.map((image) => ({
          id: image.asset_id,
          img: image.secure_url,
          des: "",
          alt: "",
          date: image.created_at,
          pubId: image.public_id,
          location: "",
        })) || [];

      console.log("New images (load more)", newImages);

      setCloudinaryImages((prevImages) => [...prevImages, ...newImages]);
    } catch (error) {
      console.error("Error fetching Cloudinary images (load more):", error);
    } finally {
      setLoading(false);
    }
  };

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
            {cloudinaryImages.map((obj) => {
              return (
                <a
                  className="flex flex-wrap p-2"
                  key={obj.id}
                  href={obj.img}
                  data-sub-html={`${obj.des}, Location: ${obj.location}, Date: ${obj.date}`}
                >
                  <Image
                    key={obj.id}
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

          <div className="mt-8">
            {!loading && img.next_cursor && (
              <button
                className="border w-full py-4 rounded hover:bg-slate-200 transition-all duration-300"
                onClick={handleLoadMore}
              >
                Load More
              </button>
            )}
          </div>
        </>
      )}
    </>
  );
}
