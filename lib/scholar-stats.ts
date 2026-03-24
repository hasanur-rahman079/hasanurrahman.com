import { supabase } from "@/lib/supabase";

export type ScholarStats = {
  citations: number;
  h_index: number;
  i10_index: number;
  citations_graph: { year: number; citations: number }[];
  updated_at: string;
};

export async function getScholarStats(): Promise<ScholarStats> {
  const { data, error } = await supabase
    .from("scholar_stats")
    .select("*")
    .eq("id", 1)
    .single();

  if (error || !data) {
    return {
      citations: 0,
      h_index: 0,
      i10_index: 0,
      citations_graph: [],
      updated_at: new Date().toISOString(),
    };
  }

  return data as ScholarStats;
}
