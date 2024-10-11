import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

// GET and POST methods
export async function GET(
  req: Request,
  { params }: { params: { slug: string } }
) {
  const slug = params.slug;

  if (!slug) {
    return NextResponse.json({ message: "Slug is required." }, { status: 400 });
  }

  const { data, error } = await supabase
    .from("views")
    .select("count")
    .eq("slug", slug)
    .single();

  if (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }

  const views = data ? data.count : 0;

  return NextResponse.json({ total: views });
}

export async function POST(
  req: Request,
  { params }: { params: { slug: string } }
) {
  const slug = params.slug;

  const { data, error } = await supabase
    .from("views")
    .select("count")
    .eq("slug", slug)
    .single();

  if (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }

  const views = data ? data.count : 0;

  const { error: updateError } = await supabase
    .from("views")
    .upsert({ slug, count: views + 1 }, { onConflict: "slug" });

  if (updateError) {
    return NextResponse.json({ message: updateError.message }, { status: 500 });
  }

  return NextResponse.json({ total: views + 1 });
}
