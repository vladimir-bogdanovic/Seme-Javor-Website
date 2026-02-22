"use client";

import FormFieldsComponent from "./formFields";
import FormFieldsOptionComponent from "./formFiledsOptions";

type konfigCelogPolja = {
  name: string;
  title: string;
  placeholder?: string;
  type: string;
  options?: { value: string; label: string }[];
  proslediDalje: (val: string) => void;
};

type AdminFormProps = {
  addUpdateFunction: (e: React.FormEvent) => void;
  svaPoljaForme: konfigCelogPolja[];
};

export default function AdminFormComponent({
  addUpdateFunction,
  svaPoljaForme,
}: AdminFormProps) {
  return (
    <form
      onSubmit={addUpdateFunction}
      className="flex flex-col justify-center items-center "
    >
      {svaPoljaForme.map((polje: konfigCelogPolja) => {
        if (polje.type === "text") {
          return (
            <FormFieldsComponent
              key={polje.name}
              title={polje.title}
              placeholder={polje.placeholder}
              getInputValue={polje.proslediDalje}
            />
          );
        } else {
          return (
            <FormFieldsOptionComponent
              key={polje.name}
              title={polje.title}
              getOptionValue={polje.proslediDalje}
              options={polje.options || []}
            />
          );
        }
      })}
      <button type="submit">submit</button>
    </form>
  );
}
