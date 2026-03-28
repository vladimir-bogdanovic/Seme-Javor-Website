import { supabase } from "@/lib/supabase";
import { NextResponse } from "next/server";

export async function PATCH(req: Request) {
  const { id, kalibraza, boja, kategorija, cena, sorta } = await req.json();

  if (!id)
    return NextResponse.json({ error: "ne postoji id" }, { status: 400 });

  const { data, error } = await supabase
    .from("Krompir")
    .update({ kalibraza, boja, kategorija, cena, sorta })
    .eq("id", id);

  if (error) return NextResponse.json({ error: "nesto je puklo", status: 500 });
  return NextResponse.json(data);
}
