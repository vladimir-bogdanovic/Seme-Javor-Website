"use client";

import { useEffect, useState } from "react";
import { Krompir } from "@/app/data/potato_data";
import { SorteKrompira } from "@/app/data/potato_data";
import FilterButton from "../../ui/sort_button";
import PotatoCardComponent from "../../ui/potato_card";

export default function BestSellingSortsComponent() {
  const [filteredPotatoes, setFilteredPotatoes] = useState<Krompir[]>([]);
  const [activeFilter, setActiveFilter] = useState<string | null>("beli");
  const [startingIndex, setStartingIndex] = useState<number>(0);
  const [endingIndex, setEndingIndex] = useState<number>(startingIndex + 4);
  const [leftArrowDisabled, setLeftArrowDisabled] = useState<boolean>(false);
  const [rightArrowDisabled, setRightArrowDisabled] = useState<boolean>(true);

  function filterPotato(filter: string) {
    setActiveFilter(filter);
    const filtered = SorteKrompira.filter((sorta: Krompir) => {
      if (sorta.kalibraza == filter) {
        return sorta;
      } else if (sorta.boja == filter) {
        return sorta;
      }
    });
    setFilteredPotatoes(filtered);
  }

  function rightArrowClick() {
    if (startingIndex >= filteredPotatoes.length - 4) {
      setRightArrowDisabled(false);
      console.log("test - nema vise krompira bajo");
      console.log(rightArrowDisabled);
    } else {
      setStartingIndex(startingIndex + 1);
      setEndingIndex(endingIndex + 1);
    }
    console.log("test napred");
  }

  function leftArrowClick() {
    if (startingIndex === 0) {
      console.log("nema vise nazad bajo");
    } else {
      setStartingIndex(startingIndex - 1);
      setEndingIndex(endingIndex - 1);
      setLeftArrowDisabled(false);
    }
  }

  useEffect(() => {
    filterPotato("beli");
  }, []);

  return (
    <div className="flex items-center justify-center flex-col bg-[#F7F7F7] w-full">
      <h2 className="text-4xl font-bold mt-10 mb-5">Najprodavanije sorte</h2>
      <div className="flex flex-row m-5 bg-[#EEEEEE] rounded-full">
        <FilterButton
          value="beli"
          label="Beli"
          filterFunction={filterPotato}
          activeFilter={activeFilter}
        />
        <FilterButton
          value="crveni"
          label="Crveni"
          filterFunction={filterPotato}
          activeFilter={activeFilter}
        />
        <FilterButton
          value="28-35"
          label="Semenski"
          filterFunction={filterPotato}
          activeFilter={activeFilter}
        />
        <FilterButton
          value="35-55"
          label="Konzumni"
          filterFunction={filterPotato}
          activeFilter={activeFilter}
        />
      </div>
      <div className="flex flex-row">
        <button onClick={() => leftArrowClick()}>nazad</button>

        {filteredPotatoes
          .map((krompir: Krompir) => (
            <PotatoCardComponent
              key={krompir.id}
              kalibraza={krompir.kalibraza}
              name={krompir.sorta}
              price={krompir.cena}
              color={krompir.boja}
            />
          ))
          .slice(startingIndex, endingIndex)}
        <button onClick={() => rightArrowClick()}>napred</button>
      </div>

      {/* <div className="flex items-center justify-center  w-full ">
        <SortsCardComponent
          color="beli"
          kalibraza="55"
          name="Agria"
          price={55}
        />
        <SortsCardComponent
          color="crveni"
          kalibraza="35"
          name="Bellarosa"
          price={60}
        />
        <SortsCardComponent
          color="crveni"
          kalibraza="28"
          name="Rudolph"
          price={70}
        />
        <SortsCardComponent
          color="beli"
          kalibraza="28"
          name="kenebec"
          price={89}
        />
      </div> */}
    </div>
  );
}
