"use client";

import { useState } from "react";
import { FilterOption, FilterValue, Krompir } from "@/data/potato_data";
import { SorteKrompira } from "@/data/potato_data";
import FilterButton from "../../ui/sort_button";
import PotatoCardComponent from "../../ui/potato_card";

export default function BestSellingSortsComponent() {
  const [filteredPotatoes, setFilteredPotatoes] = useState<Krompir[]>(
    getFilteredPotatoes("beli"),
  );
  const [activeFilter, setActiveFilter] = useState<string | null>("beli");

  const filterOptions: FilterOption[] = [
    { value: "beli", label: "Beli" },
    { value: "crveni", label: "Crveni" },
    { value: "28-35", label: "28-35" },
    { value: "35-55", label: "35-55" },
  ];

  function getFilteredPotatoes(filter: string) {
    return SorteKrompira.filter((sorta: Krompir) => {
      if (JSON.stringify(sorta).includes(filter)) {
        return sorta;
      }
    });
  }

  function filterPotato(filter: string) {
    setActiveFilter(filter);
    const filtered = getFilteredPotatoes(filter);
    setFilteredPotatoes(filtered);
  }

  return (
    <div className="flex items-center justify-center flex-col bg-[#F7F7F7] w-full">
      <h2 className="text-4xl font-bold mt-10 mb-5">Najpopularnije sorte</h2>
      <div className="flex flex-row m-5 bg-[#EEEEEE] rounded-full">
        {filterOptions.map((option) => (
          <FilterButton
            key={option.value}
            label={option.label}
            filterFunction={() => filterPotato(option.value)}
            isActive={activeFilter === option.value}
          />
        ))}
      </div>
      <div className="flex flex-row">
        {filteredPotatoes
          .map((krompir: Krompir) => (
            <PotatoCardComponent key={krompir.id} {...krompir} />
          ))
          .slice(0, 4)}
      </div>
    </div>
  );
}
