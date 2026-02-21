"use client";

import { useState } from "react";
import FormFieldsComponent from "./formFields";
import FormFieldOptionsComponent from "./formFiledsOptions";
import { Krompir } from "@/data/potato_data";

type AdminFormProps = {
  addUpdateFunction: () => void;
};

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

export default function AdminFormComponent({
  addUpdateFunction,
}: AdminFormProps) {
  const [kalibraza, setKalibraza] = useState<string>("");
  const [boja, setBoja] = useState<string>("");
  const [kategorija, setKategorija] = useState<string>("");
  const [cena, setCena] = useState<number>();
  const [sorta, setSorta] = useState<string>("");

  return (
    <form
      onSubmit={addUpdateFunction}
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
  );
}

//  const [kalibraza, setKalibraza] = useState<string>("");
//   const [boja, setBoja] = useState<string>("");
//   const [kategorija, setKategorija] = useState<string>("");
//   const [cena, setCena] = useState<number>();
//   const [sorta, setSorta] = useState<string>("");

//   return (
//     <form
//       onSubmit={addUpdateFunction}
//       className="flex flex-col justify-center items-center "
//     >
//       <FormFieldsComponent
//         title="sorta"
//         placeholder="ime sorte"
//         getInputValue={(val: string) => setSorta(val)}
//       />
//       <FormFieldOptionsComponent
//         getOptionValue={(val: string) => setKalibraza(val)}
//         title="Kalibraza"
//         filter={krompirOptions.kalibraza}
//       />
//       <FormFieldOptionsComponent
//         getOptionValue={(val: string) => setKategorija(val)}
//         title="Kategorija"
//         filter={krompirOptions.kategorija}
//       />
//       <FormFieldOptionsComponent
//         getOptionValue={(val: string) => setBoja(val)}
//         title="Boja"
//         filter={krompirOptions.boja}
//       />
//       <FormFieldsComponent
//         title="cena"
//         placeholder="unesite cenu"
//         getInputValue={(val: string) => setCena(Number(val))}
//       />
//       <button type="submit">submit</button>
//     </form>
//   );
