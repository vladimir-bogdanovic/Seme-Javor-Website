export default function Header() {
  return (
    <nav className="relative  flex items-center justify-between px-10 py-6">
      <div className="text-white font-semibold text-xl tracking-wide cursor-pointer">
        LOGO
      </div>
      <ul className="flex gap-6 text-white">
        <li className="cursor-pointer transition-opacity duration-200 hover:opacity-80">
          Pocetna
        </li>
        <li className="cursor-pointer transition-opacity duration-200 hover:opacity-80">
          Proizvodi
        </li>
        <li className="cursor-pointer transition-opacity duration-200 hover:opacity-80">
          Kontakt
        </li>
      </ul>
    </nav>
  );
}
