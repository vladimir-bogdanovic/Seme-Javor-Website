"use client";

import { useState } from "react";

export default function DropdownFilterComponent() {
  const [dropdownActive, setDropdownActice] = useState<boolean>(false);

  function onDropdownClick() {
    setDropdownActice(!dropdownActive);
    console.log(dropdownActive);
  }

  return (
    <div
      onClick={() => onDropdownClick()}
      className="flex justify-between max-w-[250px] w-full mt-6 p-2 bg-[red]"
    >
      <p>testing</p>
      <p>strelica</p>
    </div>
  );
}
