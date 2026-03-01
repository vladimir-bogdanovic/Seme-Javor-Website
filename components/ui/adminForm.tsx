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
  addOrUpdateFunction: (e: React.FormEvent) => void;
  svaPoljaForme: konfigCelogPolja[];
  formTitle: string;
  closeButton: () => void;
};

export default function AdminFormComponent({
  addOrUpdateFunction,
  svaPoljaForme,
  formTitle,
  closeButton,
}: AdminFormProps) {
  return (
    <div className="flex flex-col justify-center items-center w-full h-screen fixed inset-0  bg-black/90 z-50">
      <div
        onClick={closeButton}
        className="w-[44px] h-[44x]  flex items-center justify-center absolute top-4 right-4 cursor-pointer"
      >
        <img src="/images/close-button.png" alt="potato-image" />
      </div>
      <h2 className="text-white text-3xl bg-[gray] w-full max-w-[600px] text-center pt-7 underline">
        {formTitle}
      </h2>
      <div className="bg-[gray] p-5 w-full max-w-[600px]">
        <form
          onSubmit={addOrUpdateFunction}
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
          <button
            className="bg-[red] p-2 m-3 w-[200px] rounded-full border-4 bg-gray-400"
            type="submit"
          >
            submit
          </button>
        </form>
      </div>
    </div>
  );
}
