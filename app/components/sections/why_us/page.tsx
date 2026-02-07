import WhyUsCard from "../../ui/why_us_card";

export default function WhyUsSection() {
  return (
    <div className="flex justify-center items-center flex-wrap">
      <p className="text-3xl uppercase tracking-widest text-[#8E745C] font-medium p-3 mb-2 mt-2 w-80">
        Zasto bas nas krompir?
      </p>
      <WhyUsCard
        title="Domaca proizvodnja"
        text="Krompir iz sopstvene proizvodnje, bez uvoza."
      />
      <WhyUsCard
        title="Dugogodisnje iskustvo"
        text="Vise od 15 godina u proizvodnji krompira.."
      />
      <WhyUsCard
        title="Proverene sorte"
        text="Biramo sorte koje daju najbolji ukus i kvalitet"
      />
    </div>
  );
}
