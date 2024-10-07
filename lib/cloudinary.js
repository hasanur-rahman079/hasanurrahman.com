// cloudinary.js

export const fetchCloudImages = async (nextCursor) => {
  try {
    const cloudName = process.env.CLOUDINARY_CLOUD_NAME;
    const apiKey = process.env.CLOUDINARY_API_KEY;
    const apiSecret = process.env.CLOUDINARY_API_SECRET;

    const url = `/api/images?next_cursor=${nextCursor || ""}`;

    const getImages = await fetch(url, {
      headers: {
        Authorization: `Basic ${Buffer.from(`${apiKey}:${apiSecret}`).toString(
          "base64"
        )}`,
      },
    });

    const response = await getImages.json();

    return response;
  } catch (error) {
    console.error("Error while fetching galleries", error);
  }
};
