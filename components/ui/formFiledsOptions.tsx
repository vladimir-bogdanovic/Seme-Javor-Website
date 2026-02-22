type FilterOptions = {
  value: string;
  label: string;
};

type FieldsProps = {
  title: string;
  options: { value: string; label: string }[];
  getOptionValue: (val: string) => void;
};

export default function FormFieldsOptionComponent({
  title,
  options,
  getOptionValue,
}: FieldsProps) {
  return (
    <div className="flex justify-center w-full max-w-[400px] m-3">
      <label
        className="text-center w-full max-w-[100px] bg-gray-400 rounded-l-xl p-2 border-black border-2"
        htmlFor={title}
      >
        {title}
      </label>
      <select
        onChange={(e) => getOptionValue(e.target.value)}
        className="w-full text-center border-2 border-black"
        id={title}
      >
        <option value="">Izaberite opciju</option>
        {options.map((option: FilterOptions) => (
          <option key={option.label} value={option.value}>
            {option.value}
          </option>
        ))}
      </select>
    </div>
  );
}
