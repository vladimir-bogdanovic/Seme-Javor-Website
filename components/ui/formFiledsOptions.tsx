type FilterOptions = {
  value: string;
  label: string;
};

type FieldsProps = {
  title: string;
  filter: FilterOptions[];
  getOptionValue: (val: string) => void;
};

export default function FormFieldsComponent({
  title,
  filter,
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
        {filter.map((options: FilterOptions) => (
          <option key={options.label} value={options.value}>
            {options.value}
          </option>
        ))}
      </select>
    </div>
  );
}

// state u forme
