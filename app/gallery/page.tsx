import React from "react";
import PhotoGallery from "components/photoGallery";
import { Metadata } from "next";
import { v2 as cloudinary } from "cloudinary";

export const metadata: Metadata = {
  title: "Gallery - MD. Hasanur Rahman",
  description: "Capturing Memorable Moments: Conference Participants, Workshop Trainees, and Travel Adventures",
  openGraph: {
    title: "Gallery - MD. Hasanur Rahman",
    description: "Capturing Memorable Moments: Conference Participants, Workshop Trainees, and Travel Adventures",
    url: "https://www.hasanurrahman.me/gallery",
    siteName: "MD. Hasanur Rahman",
    images: [
      {
        url: "https://www.hasanurrahman.me/og.jpg",
        width: 1920,
        height: 1080,
      },
    ],
    locale: "en-US",
    type: "website",
  },
};

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export default async function GalleryPage() {
  try {
    const resources = await cloudinary.search
      .expression("resource_type:image AND tags=hasanurWebsite")
      .max_results(100)
      .execute();

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
  } catch (error) {
    console.error("Error loading gallery images:", error);
    
    return (
      <section>
        <h1 className="font-bold text-3xl font-serif mb-8">Gallery</h1>
        <p className="text-neutral-700 dark:text-neutral-300 mt-2 mb-8">
          Capturing Memorable Moments: Conference Participants, Workshop Trainees,
          and Travel Adventures
        </p>
        
        <div className="text-center py-12">
          <p className="text-neutral-500 dark:text-neutral-400 mb-4">
            Unable to load gallery images at the moment.
          </p>
          <p className="text-sm text-neutral-400 dark:text-neutral-500">
            Please check back later or contact support if the issue persists.
          </p>
        </div>
      </section>
    );
  }
}
