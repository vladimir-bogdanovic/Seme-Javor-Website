import "../../globals.css";

export default function HeroComponent() {
  return (
    <div className="bg- w-full h-150 bg-gradient-to-b from-[#8E745C] to-[#c0a892]">
      <div className="flex items-center justify-items-center flex-col mt-20">
        <h2 className="text-white text-3xl mb-6">
          Seme Javor - kvalitetan domaci krompir sa nasih njiva
        </h2>
        <p className="text-white text-xl">
          Proizvodimo i prodajemo domaci krompir, uzgojen sa paznjom i iskustvom
        </p>
        <div>
          <img src="/images/hero_potatoes.jpg" alt="hero-image" />
        </div>
      </div>
    </div>
  );
}
