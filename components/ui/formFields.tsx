type RegularFieldsProps = {
  title: string;
  placeholder?: string;

  getInputValue: (val: string) => void;
};

export default function FormFieldsComponent({
  title,
  placeholder,
  getInputValue,
}: RegularFieldsProps) {
  return (
    <div className="flex justify-between w-full max-w-[400px] m-3">
      <label
        className="text-center w-full max-w-[100px] bg-gray-400 rounded-l-xl p-2 border-black border-2"
        htmlFor={title}
        id="ime"
      >
        {title}
      </label>

      <input
        name="ime"
        onChange={(e) => getInputValue(e.target.value)}
        className="border-black bg-white text-center w-full p-2 rounded-r-xl border-2"
        type="text"
        placeholder={placeholder}
      />
    </div>
  );
}
