import React from "react";
import PhotoGallery from "components/photoGallery";
import { Metadata } from "next";
import { v2 as cloudinary } from "cloudinary";

// export const metadata: Metadata = {
//   title: "Gallery",
//   description: "Here's what research I've published so far",
// };

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export default async function GalleryPage() {
  const resources = await cloudinary.search
    .expression("resource_type:image AND tags=hasanurWebsite")
    .execute();

  // console.log(resources);
  return (
    <section>
      <h1 className="font-bold text-3xl font-serif mb-8">Gallery</h1>
      <p className="text-neutral-700 dark:text-neutral-300 mt-2 mb-8">
        Capturing Memorable Moments: Conference Participants, Workshop Trainees,
        and Travel Adventures
      </p>

      <PhotoGallery images={resources} />
    </section>
  );
}
