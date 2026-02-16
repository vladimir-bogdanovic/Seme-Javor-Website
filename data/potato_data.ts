export type Krompir = {
  id: number;
  sorta: string;
  kalibraza: "28-35" | "35-55";
  kategorija: "Prva reprodukcija" | "Original";
  boja: "crveni" | "beli";
  cena: number;
};

export const Filters = {
  kalibraza: ["28-35", "35-55"],
  kategorija: ["Prva reprodukcija", "Original"],
  boja: ["crveni", "beli"],
};

export type FilterValue = "28-35" | "35-55" | "crveni" | "beli";

export type FilterOption = {
  value: FilterValue;
  label: string;
};

export const SorteKrompira: Krompir[] = [
  {
    id: 1,
    sorta: "Rudolph",
    kalibraza: "35-55",
    kategorija: "Prva reprodukcija",
    boja: "crveni",
    cena: 60,
  },
  {
    id: 2,
    sorta: "Rivierea",
    kalibraza: "35-55",
    kategorija: "Prva reprodukcija",
    boja: "beli",
    cena: 60,
  },
  {
    id: 3,
    sorta: "Arizona",
    kalibraza: "35-55",
    kategorija: "Prva reprodukcija",
    boja: "beli",
    cena: 60,
  },
  {
    id: 4,
    sorta: "Kennebec",
    kalibraza: "35-55",
    kategorija: "Prva reprodukcija",
    boja: "beli",
    cena: 60,
  },
  {
    id: 5,
    sorta: "Esmee",
    kalibraza: "35-55",
    kategorija: "Prva reprodukcija",
    boja: "crveni",
    cena: 60,
  },
  {
    id: 6,
    sorta: "Desiree",
    kalibraza: "35-55",
    kategorija: "Prva reprodukcija",
    boja: "crveni",
    cena: 60,
  },
  {
    id: 7,
    sorta: "Bellarosa",
    kalibraza: "35-55",
    kategorija: "Prva reprodukcija",
    boja: "crveni",
    cena: 60,
  },
  {
    id: 8,
    sorta: "Marabel",
    kalibraza: "35-55",
    kategorija: "Prva reprodukcija",
    boja: "beli",
    cena: 60,
  },
  {
    id: 9,
    sorta: "Agria",
    kalibraza: "35-55",
    kategorija: "Original",
    boja: "beli",
    cena: 60,
  },
  {
    id: 10,
    sorta: "Riviera",
    kalibraza: "35-55",
    kategorija: "Original",
    boja: "beli",
    cena: 60,
  },
  {
    id: 11,
    sorta: "Kennebec",
    kalibraza: "35-55",
    kategorija: "Original",
    boja: "beli",
    cena: 60,
  },
  {
    id: 12,
    sorta: "Liseta",
    kalibraza: "35-55",
    kategorija: "Original",
    boja: "beli",
    cena: 60,
  },
  {
    id: 13,
    sorta: "Esmee",
    kalibraza: "35-55",
    kategorija: "Original",
    boja: "crveni",
    cena: 60,
  },
  {
    id: 14,
    sorta: "Arizona",
    kalibraza: "35-55",
    kategorija: "Original",
    boja: "beli",
    cena: 60,
  },
  {
    id: 15,
    sorta: "Bellarosa",
    kalibraza: "35-55",
    kategorija: "Original",
    boja: "crveni",
    cena: 60,
  },
  {
    id: 16,
    sorta: "Desiree",
    kalibraza: "35-55",
    kategorija: "Original",
    boja: "crveni",
    cena: 60,
  },
  {
    id: 17,
    sorta: "Rudolph",
    kalibraza: "35-55",
    kategorija: "Original",
    boja: "crveni",
    cena: 60,
  },
  {
    id: 18,
    sorta: "Liseta",
    kalibraza: "28-35",
    kategorija: "Original",
    boja: "beli",
    cena: 110,
  },
  {
    id: 19,
    sorta: "Kennebec",
    kalibraza: "28-35",
    kategorija: "Original",
    boja: "beli",
    cena: 110,
  },
  {
    id: 20,
    sorta: "Esmee",
    kalibraza: "28-35",
    kategorija: "Original",
    boja: "crveni",
    cena: 110,
  },
  {
    id: 21,
    sorta: "Desiree",
    kalibraza: "28-35",
    kategorija: "Original",
    boja: "crveni",
    cena: 110,
  },
  {
    id: 22,
    sorta: "Bellarosa",
    kalibraza: "28-35",
    kategorija: "Original",
    boja: "crveni",
    cena: 110,
  },
  {
    id: 23,
    sorta: "Arizona",
    kalibraza: "28-35",
    kategorija: "Original",
    boja: "beli",
    cena: 110,
  },
  {
    id: 24,
    sorta: "Agria",
    kalibraza: "28-35",
    kategorija: "Original",
    boja: "beli",
    cena: 110,
  },
];
