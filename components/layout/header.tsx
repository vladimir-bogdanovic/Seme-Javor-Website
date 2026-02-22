import HeaderNavList from "../ui/headerList";

export default function Header() {
  return (
    <header className="relative w-full z-50 flex opacity-70 items-center justify-between px-10 py-6 bg-black">
      <div className="text-white font-semibold text-xl tracking-wide cursor-pointer ">
        LOGO
      </div>
      <ul className="flex gap-6 text-white">
        <HeaderNavList url="/" label="Pocetna" />
        <HeaderNavList url="/proizvodi" label="Proizvodi" />
        <HeaderNavList url="/kontakt" label="Kontakt" />
        <HeaderNavList url="/admin" label="Admin" />
        <HeaderNavList url="/testiranje" label="Tesiranje" />
      </ul>
    </header>
  );
}
