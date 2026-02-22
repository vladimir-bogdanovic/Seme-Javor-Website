"use client";

import AdminFormComponent from "@/components/ui/adminForm";
import { useState } from "react";

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

  const [vrednostPolja, setVrednostPolja] = useState<VrednostiInputPolja>(
    inicijalneVrednostiInputPolja,
  );

  const promeniVrednostPolja = (
    name: keyof VrednostiInputPolja,
    val: string,
  ) => {
    setVrednostPolja((prev) => ({ ...prev, [name]: val }));
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

  const addPotato = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(vrednostPolja);
    const response = await fetch("/api/addPotato", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(vrednostPolja),
    });
    const data = await response.json();
    console.log("data", data);
    if (!response.ok) {
      console.error("API error:", data);
    } else {
      console.log("USPESNO:", data);
    }
  };

  return (
    <div>
      <AdminFormComponent
        svaPoljaForme={konfiguracijaInputPolja}
        addUpdateFunction={addPotato}
      />
    </div>
  );
}
