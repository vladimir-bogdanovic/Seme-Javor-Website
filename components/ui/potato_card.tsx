import Link from "next/link";

interface PotatoCardProps {
  id: number;
  kalibraza: string;
  sorta: string;
  cena: number;
  boja: "crveni" | "beli";
}

export default function PotatoCardComponent({
  id,
  boja,
  kalibraza,
  sorta,
  cena,
}: PotatoCardProps) {
  return (
    <div className="flex items-center flex-col w-[268px] h-[492px] m-5 bg-white br-10 rounded-2xl">
      <Link className="py-2" href={`/proizvodi/${id}`}>
        Detalji
      </Link>
      <div className="w-[268px] h-[240px] bg-cardBackground flex items-center justify-center rounded-t-2xl">
        <img src="/images/kenebec.png" alt="potato-image" />
      </div>
      <div className="flex mt-4 mr-20 flex-col">
        <div>
          <p className="text-cardGreyText text-lg">{boja}</p>
          <p>{kalibraza}</p>
          <h2 className="text-2xl font-semibold">{sorta}</h2>
          <p>rating placeholder</p>
        </div>
        <div>
          <h2>{cena}</h2>
        </div>
      </div>
    </div>
  );
}
