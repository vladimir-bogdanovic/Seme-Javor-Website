"use client";

import { FilterOption } from "@/data/potato_data";
import PotatoCardComponent from "../ui/potato_card";

export default function BestSellingSortsComponent() {
  const filterOptions: FilterOption[] = [
    { value: "beli", label: "Beli" },
    { value: "crveni", label: "Crveni" },
    { value: "28-35", label: "28-35" },
    { value: "35-55", label: "35-55" },
  ];

  return (
    <div className="flex items-center justify-center flex-col bg-[#F7F7F7] w-full">
      <h2 className="text-4xl font-bold mt-10 mb-5">Najpopularnije sorte</h2>
      <div className="flex flex-row">
        <PotatoCardComponent
          id={7}
          kalibraza="35-55"
          sorta="Bellarosa"
          boja="crveni"
          cena={60}
        />
      </div>
    </div>
  );
}
