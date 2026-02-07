type FilterButtonProps = {
  label: string;
  value: string;
  filterFunction: (value: string) => void;
  activeFilter: string | null;
};

export default function filterFunction({
  label,
  value,
  filterFunction,
  activeFilter,
}: FilterButtonProps) {
  const isActive = activeFilter === value;

  return (
    <p
      className={`text-center cursor-pointer p-1.5 rounded-full m-1.5 w-[100px] ${isActive ? "bg-white" : "bg-[#EEEEEE]"}`}
      onClick={() => filterFunction(value)}
    >
      {label}
    </p>
  );
}
