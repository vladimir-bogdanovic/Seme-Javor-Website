"use client";

import { FilterOption, FilterValue, Krompir } from "@/data/potato_data";
import PotatoCardComponent from "@/components/ui/potato_card";
import { useParams } from "next/navigation";
import { SorteKrompira } from "@/data/potato_data";

export default function BestSellingSortsComponent() {
  const filterOptions: FilterOption[] = [
    { value: "beli", label: "Beli" },
    { value: "crveni", label: "Crveni" },
    { value: "28-35", label: "28-35" },
    { value: "35-55", label: "35-55" },
  ];

  const { id } = useParams();
  const odabraniKrompir = id
    ? SorteKrompira.find((krompir: Krompir) => krompir.id === +id)
    : null;

  return (
    <div className="flex items-center justify-center flex-col bg-[#F7F7F7] w-full">
      <h2 className="text-4xl font-bold mt-10 mb-5">Najpopularnije sorte</h2>
      <div className="flex flex-row">
        {odabraniKrompir ? (
          <PotatoCardComponent {...odabraniKrompir} />
        ) : (
          "nema odabrane sorte"
        )}
      </div>
    </div>
  );
}
