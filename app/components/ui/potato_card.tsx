interface PotatoCardProps {
  kalibraza: string;
  name: string;
  price: number;
  color: "crveni" | "beli";
}

export default function PotatoCardComponent({
  color,
  kalibraza,
  name,
  price,
}: PotatoCardProps) {
  return (
    <div className="flex items-center flex-col w-[268px] h-[492px] m-5 bg-[#FFFFFF] br-10 rounded-2xl">
      <div className="w-[268px] h-[240px] bg-[#FAFAFA]  flex items-center justify-center rounded-t-2xl">
        <img
          className="mb-10 w-[218px] h-[256px]"
          src="/images/kenebec.png"
          alt="potato-image"
        />
      </div>
      <div className="flex mt-4 mr-20 flex-col">
        <div>
          <p className="text-[#8D8D8D] text-lg">{color}</p>
          <p>{kalibraza}</p>
          <h2 className="text-2xl font-semibold">{name}</h2>
          <p>rating placeholder</p>
        </div>
        <div>
          <h2>{price}</h2>
        </div>
      </div>
    </div>
  );
}
