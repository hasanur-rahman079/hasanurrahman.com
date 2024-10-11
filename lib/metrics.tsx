import "server-only";

import { supabase } from "./supabase";
import { cache } from "react";

export const getBlogViews = cache(async () => {
  try {
    const { data, error } = await supabase.from("views").select("count");

    if (error) {
      console.error("Error fetching blog views:", error.message);
      return 0;
    }

    // Sum all views from the data
    const totalViews =
      data?.reduce((acc, curr) => acc + Number(curr.count), 0) || 0;

    return totalViews;
  } catch (error) {
    console.error("Error in getBlogViews:", error);
    return 0;
  }
});
