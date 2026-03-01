"use client";

import AdminFormComponent from "@/components/ui/adminForm";
import PotatoCardComponent from "@/components/ui/potato_card";
import { Krompir } from "@/data/potato_data";
import { useEffect, useState } from "react";

export default function TestiranjeComponent() {
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

  type VrednostiInputPolja = {
    kalibraza: string;
    kategorija: string;
    sorta: string;
    cena: string;
    boja: string;
  };

  const inicijalneVrednostiInputPolja: VrednostiInputPolja = {
    kalibraza: "",
    kategorija: "",
    sorta: "",
    boja: "",
    cena: "",
  };

  const konfiguracijaInputPolja = [
    {
      name: "sorta",
      type: "text",
      title: "Sorta",
      proslediDalje: (val: string) => promeniVrednostPolja("sorta", val),
    },
    {
      name: "cena",
      type: "text",
      title: "Cena",
      proslediDalje: (val: string) => promeniVrednostPolja("cena", val),
    },
    {
      name: "kategorija",
      type: "select",
      title: "Kategorijaa",
      options: krompirOptions.kategorija,
      proslediDalje: (val: string) => promeniVrednostPolja("kategorija", val),
    },
    {
      name: "kalibraza",
      type: "select",
      title: "Kalibrazaa",
      options: krompirOptions.kalibraza,
      proslediDalje: (val: string) => promeniVrednostPolja("kalibraza", val),
    },
    {
      name: "boja",
      type: "select",
      title: "Boja",
      options: krompirOptions.boja,
      proslediDalje: (val: string) => promeniVrednostPolja("boja", val),
    },
  ];

  const [vrednostiPolja, setVrednostPolja] = useState<VrednostiInputPolja>(
    inicijalneVrednostiInputPolja,
  );
  const [potaotes, setPotatoes] = useState<Krompir[]>([]);
  const [activeAdd, setActiveAdd] = useState<boolean>(false);
  const [activeUpdate, setActiveUpdate] = useState<boolean>(false);
  const [updateCurrnetPotato, setUpdateCurrnetPotato] =
    useState<Krompir | null>(null);

  const promeniVrednostPolja = (
    name: keyof VrednostiInputPolja,
    val: string,
  ) => {
    setVrednostPolja((prev) => ({ ...prev, [name]: val }));
    console.log(vrednostiPolja);
  };

  useEffect(() => {
    fetchPotatoes();
  }, [console.log("ADD", activeAdd), console.log("UPDATE", activeUpdate)]);

  const fetchPotatoes = async function fetchPotatoes() {
    const response = await fetch("/api/getPotato");
    const data = await response.json();
    setPotatoes(data);
  };

  const addPotato = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(vrednostiPolja);
    const response = await fetch("/api/addPotato", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ ...vrednostiPolja }),
    });
    const data = await response.json();
    if (!response.ok) {
      console.error("API error:", data);
    } else {
      alert("Uspesno dodat nov krompir");
      setActiveAdd(false);
      console.log("USPESNO:", data);
    }
  };

  const updatePotato = async (potato: Krompir) => {
    const response = await fetch("/api/updatePotato", {
      headers: { "content-type": "application/json" },
      method: "PATCH",
      body: JSON.stringify({ ...vrednostiPolja, id: potato.id }),
    });
    const data = await response.json();
    if (!response.ok) {
      console.error("API error", data);
    } else {
      alert("uspesan update");
      setActiveUpdate(false);
    }
    fetchPotatoes();
  };

  const deletePotato = async (potato: Krompir) => {
    const response = await fetch("/api/deletePotato", {
      method: "DELETE",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ id: potato.id }),
    });

    fetchPotatoes();
  };

  const displayCorrectForm = async (e: React.FormEvent) => {
    e.preventDefault();

    if (activeUpdate) {
      await updatePotato(updateCurrnetPotato!);
    } else {
      await addPotato(e);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex justify-center items-center max-w-[400px] w-full bg-black m-2">
        <button
          className="text-white text-3xl text-center py-6 underline"
          onClick={() => {
            setActiveAdd(true);
            setActiveUpdate(false);
          }}
        >
          Add new potato
        </button>
      </div>

      {activeAdd && (
        <div>
          <h2 className="z-50">add potato</h2>
          <AdminFormComponent
            formTitle="Add Potato"
            svaPoljaForme={konfiguracijaInputPolja}
            addOrUpdateFunction={displayCorrectForm}
            closeButton={() => setActiveAdd(false)}
          />
        </div>
      )}
      <div className="flex justify-center flex-wrap items-center w-full">
        {potaotes.map((krompir: Krompir) => (
          <div className="bg-[red] m-3" key={krompir.id}>
            <PotatoCardComponent
              boja={krompir.boja}
              cena={krompir.cena}
              id={krompir.id}
              kalibraza={krompir.kalibraza}
              sorta={krompir.sorta}
            />
            <div className="flex justify-center items-center w-full">
              <button
                className="bg-white m-3 p-2"
                onClick={() => {
                  setActiveUpdate(true);
                  setActiveAdd(false);
                  setUpdateCurrnetPotato(krompir);
                }}
              >
                Update
              </button>
              <button
                className="bg-white m-3 p-2"
                onClick={() => deletePotato(krompir)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
        {activeUpdate && (
          <div className="flex flex-col items-center justify-center">
            <AdminFormComponent
              formTitle="Update potato"
              addOrUpdateFunction={displayCorrectForm}
              svaPoljaForme={konfiguracijaInputPolja}
              closeButton={() => setActiveUpdate(false)}
            />
          </div>
        )}
      </div>
    </div>
  );
}

// Zameni sa react hook forms
