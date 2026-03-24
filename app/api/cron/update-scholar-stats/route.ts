import https from "node:https";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

const SCHOLAR_AUTHOR_ID = "l2q048wAAAAJ";
const SERPAPI_TIMEOUT_MS = 10_000;

function httpsGet(url: string): Promise<string> {
  return new Promise((resolve, reject) => {
    const req = https.get(url, (res) => {
      const chunks: Buffer[] = [];
      res.on("data", (chunk: Buffer) => chunks.push(chunk));
      res.on("end", () => resolve(Buffer.concat(chunks).toString()));
      res.on("error", reject);
    });
    req.setTimeout(SERPAPI_TIMEOUT_MS, () => {
      req.destroy(new Error("SerpApi request timed out"));
    });
    req.on("error", reject);
  });
}

export async function GET(req: Request) {
  const authHeader = req.headers.get("authorization");
  const cronSecret = process.env.CRON_SECRET?.trim();
  if (authHeader !== `Bearer ${cronSecret}`) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const apiKey = process.env.SERPAPI_KEY?.trim();
  if (!apiKey) {
    return NextResponse.json(
      { message: "SERPAPI_KEY not configured" },
      { status: 500 }
    );
  }

  const url = `https://serpapi.com/search.json?engine=google_scholar_author&author_id=${SCHOLAR_AUTHOR_ID}&api_key=${apiKey}`;

  let rawJson: string;
  try {
    rawJson = await httpsGet(url);
  } catch (err) {
    return NextResponse.json(
      { message: `SerpApi fetch failed: ${(err as Error).message}` },
      { status: 500 }
    );
  }

  let data: Record<string, unknown>;
  try {
    data = JSON.parse(rawJson);
  } catch {
    return NextResponse.json(
      { message: "Invalid JSON from SerpApi" },
      { status: 500 }
    );
  }

  type TableEntry = Record<string, { all: number }>;
  type CitedBy = {
    table: TableEntry[];
    graph: { year: number; citations: number }[];
  };
  const citedBy = data?.cited_by as CitedBy | undefined;
  const table = citedBy?.table ?? [];
  const graph = citedBy?.graph ?? [];

  const citations = table[0]?.citations?.all ?? 0;
  const h_index = table[1]?.h_index?.all ?? 0;
  const i10_index = table[2]?.i10_index?.all ?? 0;

  const { error } = await supabase.from("scholar_stats").upsert(
    {
      id: 1,
      citations,
      h_index,
      i10_index,
      citations_graph: graph,
      updated_at: new Date().toISOString(),
    },
    { onConflict: "id" }
  );

  if (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }

  revalidatePath("/");
  revalidatePath("/research");

  return NextResponse.json({ success: true, citations, h_index, i10_index });
}
