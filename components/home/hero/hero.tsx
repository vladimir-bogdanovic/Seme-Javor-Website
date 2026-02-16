import Button from "../../ui/hero_button";

export default function HeroComponent() {
  return (
    <div className="absolute top-0 left-0 min-h-screen bg-[url('/images/hero.jpg')] bg-cover bg-left-top w-full">
      {/* tamni overlay */}
      <div className="absolute inset-0 bg-black/40"></div>
      {/* overlay na dnu img */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 w-full h-40 
                  bg-gradient-to-b from-transparent to-white"
      ></div>

      {/* naslov, podnaslov i button */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center text-white min-h-[calc(100vh-96px)] px-4">
        <h1 className="text-5xl font-bold mb-4">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </h1>
        <p className="text-xl max-w-2xl">Lorem ipsum dolor sit.</p>
        <Button label="Pogledaj ponudu" />
      </div>
    </div>
  );
}
