import { supabase } from "@/lib/supabase";
import { NextResponse } from "next/server";

export async function DELETE(req: Request) {
  const { id } = await req.json();

  if (!id)
    return NextResponse.json({ error: "ne postoji id" }, { status: 400 });

  const { data, error } = await supabase.from("Krompir").delete().eq("id", id);

  if (error) return NextResponse.json({ error: "nesto je puklo", status: 500 });
  return NextResponse.json(data);
}
