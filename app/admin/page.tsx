"use client";

import FormFieldsComponent from "@/components/ui/formFields";
import { useEffect, useState } from "react";
import { Krompir, SorteKrompira } from "@/data/potato_data";
import FormFieldOptionsComponent from "@/components/ui/formFiledsOptions";

export default function AdminComponent() {
  const krompirOptions = {
    boja: [
      { value: "crveni", label: "Crveni" },
      { value: "beli", label: "Beli" },
    ],
    kalibraza: [
      { value: "28-35", label: "28-35 mm" },
      { value: "35-55", label: "35-55 mm" },
    ],
    kategorija: [
      { value: "Prva reprodukcija", label: "Prva reprodukcija" },
      { value: "Original", label: "Original" },
    ],
  };

  const [potatoes, setPotatoes] = useState<Krompir[]>([]);
  const [kalibraza, setKalibraza] = useState<string>("");
  const [boja, setBoja] = useState<string>("");
  const [kategorija, setKategorija] = useState<string>("");
  const [cena, setCena] = useState<number>();
  const [sorta, setSorta] = useState<string>("");

  useEffect(() => {
    fetchPotatoes();
  }, []);

  const [vrednost, setVrednost] = useState("");
  function uzmiVrednostIzDeteta(vrednostIzDeteta: string) {
    return vrednostIzDeteta;
  }

  const fetchPotatoes = async function fetchPotatoes() {
    const response = await fetch("/api/getPotato");
    const data = await response.json();
    setPotatoes(data);
  };

  const addPotato = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await fetch("/api/addPotato", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ kalibraza, boja, kategorija, cena, sorta }),
    });
    const data = await response.json();
    if (!response.ok) {
      console.error("API error:", data);
    } else {
      console.log("USPESNO:", data);
    }

    const updatePotato = async (potato: Krompir) => {
      const response = await fetch("/api/updatePotato", {
        headers: { "content-type": "application/json" },
        method: "PATCH",
        body: JSON.stringify({
          kalibraza,
          kategorija,
          cena,
          sorta,
          boja,
          id: potato.id,
        }),
      });
    };
  };

  return (
    <div>
      <div>
        {potatoes.map((krompir: Krompir) => (
          <div key={krompir.id}>
            <button>add</button>
            <p>{krompir.sorta}</p>
            <button>update</button>
            <button>delete</button>
          </div>
        ))}
      </div>
      <h2></h2>

      <form
        onSubmit={addPotato}
        className="flex flex-col justify-center items-center "
      >
        <FormFieldsComponent
          title="sorta"
          placeholder="ime sorte"
          getInputValue={(val: string) => setSorta(val)}
        />
        <FormFieldOptionsComponent
          getOptionValue={(val: string) => setKalibraza(val)}
          title="Kalibraza"
          filter={krompirOptions.kalibraza}
        />
        <FormFieldOptionsComponent
          getOptionValue={(val: string) => setKategorija(val)}
          title="Kategorija"
          filter={krompirOptions.kategorija}
        />
        <FormFieldOptionsComponent
          getOptionValue={(val: string) => setBoja(val)}
          title="Boja"
          filter={krompirOptions.boja}
        />
        <FormFieldsComponent
          title="cena"
          placeholder="unesite cenu"
          getInputValue={(val: string) => setCena(Number(val))}
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
}
