import React from "react";
import PhotoGallery from "components/photoGallery";
import gallery from "lib/gallary";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Here's what research I've published so far",
};

async function galleryData() {
  return gallery;
}

export default async function GalleryPage() {
  const image = await galleryData();

  return (
    <section>
      <h1 className="font-bold text-3xl font-serif mb-8">Gallery</h1>
      <p className="text-neutral-700 dark:text-neutral-300 mt-2 mb-8">
        Capturing Memorable Moments: Conference Participants, Workshop Trainees,
        and Travel Adventures
      </p>

      <PhotoGallery img={image} />
    </section>
  );
}
