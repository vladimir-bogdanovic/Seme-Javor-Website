"use client";

import { Filters, Krompir, SorteKrompira } from "@/data/potato_data";
import PotatoCardComponent from "../ui/potato_card";
import { useState, useEffect } from "react";
import CalculatePages from "@/utils/calculatePagesFunction";
import PaginationComponent from "../ui/pagination";

const allPotaotoes = SorteKrompira;

export default function ProizvodiComponent() {
  const [potatoes, setPotatoes] = useState<Krompir[]>(allPotaotoes);
  const [activePage, setActivePage] = useState<number>(1);
  const [openDropdowns, setOpenDropdowns] = useState<Set<string>>(new Set());
  const [selectedValues, setSelectedValues] = useState<string[]>([]);

  type FilterKey = keyof typeof Filters;
  function getSelectedByFilter(filterKey: FilterKey) {
    return selectedValues.filter((v) => Filters[filterKey].includes(v));
  }

  const filtered = SorteKrompira.filter((sorta) => {
    const selectedBoje = getSelectedByFilter("boja");
    const selectedKalibraze = getSelectedByFilter("kalibraza");
    const selectedKategorije = getSelectedByFilter("kategorija");

    const matchBoja =
      selectedBoje.length === 0 || selectedBoje.includes(sorta.boja);

    const matchKalibraza =
      selectedKalibraze.length === 0 ||
      selectedKalibraze.includes(sorta.kalibraza);

    const matchKategorija =
      selectedKategorije.length === 0 ||
      selectedKategorije.includes(sorta.kategorija);

    return matchBoja && matchKalibraza && matchKategorija;
  });
  console.log(filtered);

  function handleCheckboxClick(value: string, checked: boolean) {
    setSelectedValues((prev) => {
      let newValues;
      if (checked) {
        newValues = [...prev, value];
      } else {
        newValues = prev.filter((v) => v !== value);
      }
      return newValues;
    });
  }

  useEffect(() => {
    setPotatoes(filtered);
    setActivePage(1);
  }, [selectedValues]);

  function toggleDropdown(key: string) {
    setOpenDropdowns((prev) => {
      const dd = new Set(prev);

      if (dd.has(key)) {
        dd.delete(key);
      } else {
        dd.add(key);
      }
      return dd;
    });
  }

  function onArrowClick(arrowType: "left" | "right") {
    if (arrowType === "left") {
      setActivePage((prev) => prev - 1);
    } else {
      setActivePage((prev) => prev + 1);
    }
  }

  return (
    <div className="flex items-justify w-full bc-primary">
      {/* ovde ide filter i opcije */}
      <div className="flex items-center w-full max-w-xs flex-col">
        {Object.entries(Filters).map(([filterKey, values]) => (
          <div
            className="flex justify-between max-w-[250px] w-full mt-6 p-2 bg-[red]"
            key={filterKey}
          >
            <div
              className="flex justify-between cursor-pointer"
              onClick={() => toggleDropdown(filterKey)}
            >
              <p>{filterKey}</p>
            </div>
            {openDropdowns.has(filterKey) && (
              <div>
                {values.map((value) => (
                  <label key={value}>
                    <input
                      type="checkbox"
                      checked={selectedValues.includes(value)}
                      onChange={(e) =>
                        handleCheckboxClick(value, e.target.checked)
                      }
                    />
                    {value}
                  </label>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      {/* ovde idu kartice i paginacija */}
      <div className="flex justify-center items-center flex-col w-full">
        <div className="flex justify-center items-center flex-wrap bg-black w-full">
          {potatoes
            .slice((activePage - 1) * 6, activePage * 6)
            .map((krompir: Krompir) => (
              <PotatoCardComponent key={krompir.id} {...krompir} />
            ))}
        </div>
        {/* paginacija buttoni */}
        <PaginationComponent
          activePage={activePage}
          totalPages={CalculatePages(potatoes)}
          arrowLeft={() => onArrowClick("left")}
          arrowRight={() => onArrowClick("right")}
        />
      </div>
    </div>
  );
}
