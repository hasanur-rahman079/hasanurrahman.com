import { supabase } from "@/lib/supabase";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    // Query Supabase to fetch all 'slug' and 'count' fields from the 'views' table
    const { data, error } = await supabase.from("views").select("slug, count");

    // Handle errors from Supabase query
    if (error) {
      console.error("Error fetching views from Supabase:", error.message);
      return res.status(500).json({ message: "Error fetching views" });
    }

    // If no data is returned, send an empty array
    if (!data) {
      return res.status(200).json([]);
    }

    // Return the fetched data in JSON format
    return res.status(200).json(data);
  } catch (e) {
    console.error("Error in API handler:", e);
    return res.status(500).json({ message: "error" });
  }
}
