import { Krompir } from "@/data/potato_data";

export default function CalculatePages(potatoes: Krompir[]) {
  return Math.max(1, Math.ceil(potatoes.length / 6));
}
