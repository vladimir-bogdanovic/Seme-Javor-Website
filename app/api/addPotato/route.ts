import { supabase } from "@/lib/supabase";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { kalibraza, boja, kategorija, cena, sorta } = await req.json();

  if (!sorta?.trim() || !kalibraza || !kategorija || !boja || !cena.trim())
    return NextResponse.json(
      { error: "sva polja su obavezna" },
      { status: 400 },
    );

  const { data, error } = await supabase
    .from("Krompir")
    .insert({ kalibraza, boja, kategorija, cena, sorta });

  if (error) {
    return NextResponse.json({ error: "puklo je nesto" }, { status: 500 });
  }

  return NextResponse.json(data);
}
