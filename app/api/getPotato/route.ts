import { supabase } from "@/lib/supabase";
import { NextResponse } from "next/server";

export async function GET() {
  const { data, error } = await supabase.from("Krompir").select("*");

  if (error) return NextResponse.json({ error: error }, { status: 500 });
  console.log(data);
  return NextResponse.json(data);
}
