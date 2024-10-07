import { supabase } from "lib/supabase";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const slug = req.query?.slug as string;
    if (!slug) {
      return res.status(400).json({ message: "Slug is required." });
    }

    // Fetch the view count from the 'views' table in Supabase
    const { data, error } = await supabase
      .from("views")
      .select("count")
      .eq("slug", slug)
      .single();

    if (error && error.code !== "PGRST116") {
      return res.status(500).json({ message: error.message });
    }

    const views = data ? data.count : 0;

    if (req.method === "POST") {
      const { error: insertError } = await supabase
        .from("views")
        .upsert({ slug, count: views + 1 }, { onConflict: "slug" });

      if (insertError) {
        return res.status(500).json({ message: insertError.message });
      }

      return res.status(200).json({
        total: views + 1,
      });
    }

    if (req.method === "GET") {
      return res.status(200).json({ total: views });
    }
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: e.message });
  }
}
