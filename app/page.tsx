import WhyUsSection from "@/components/home/why_us/page";
import HeroComponent from "../components/home/hero/hero";
import BestSellingSortsComponent from "@/components/home/sorte/page";

export default function Home() {
  return (
    <div>
      <HeroComponent />
      <WhyUsSection />
      <BestSellingSortsComponent />
    </div>
  );
}
