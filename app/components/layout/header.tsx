export default function Header() {
  return (
    <div className="flex items-center justify-between flex-row bg-gray-400 p-2 w-full">
      <div className="ml-20">
        <p>logo</p>
      </div>
      <div className="flex items-center flex-row mr-10">
        <ul className="flex items-center flex-row p-2">
          <li className="p-2">o nama</li>
          <li className="p-2">sorte</li>
          <li className="p-2">cenovnik</li>
          <li className="p-2">porudzbine</li>
        </ul>
      </div>
    </div>
  );
}
