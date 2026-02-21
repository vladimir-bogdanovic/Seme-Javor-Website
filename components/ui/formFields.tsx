type FieldsProps = {
  title: string;
  placeholder: string;
  getInputValue: (val: string) => void;
};

export default function FormFieldsComponent({
  title,
  placeholder,
  getInputValue,
}: FieldsProps) {
  return (
    <div className="flex justify-between w-full max-w-[400px] m-3">
      <label
        className="text-center w-full max-w-[100px] bg-gray-400 rounded-l-xl p-2 border-black border-2"
        htmlFor={title}
      >
        {title}
      </label>
      <input
        onChange={(e) => getInputValue(e.target.value)}
        id={title}
        className="border-black bg-white text-center w-full bg-gray-400 p-2 rounded-r-xl border-2"
        type="text"
        placeholder={placeholder}
      />
    </div>
  );
}
