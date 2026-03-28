type FilterButtonProps = {
  label: string;
  isActive: boolean;
  filterFunction: () => void;
};

export default function FilterButton({
  label,
  filterFunction,
  isActive,
}: FilterButtonProps) {
  return (
    <p
      className={`text-center cursor-pointer p-1.5 rounded-full m-1.5 w-[100px] ${isActive ? "bg-white" : "bg-filterBackground"}`}
      onClick={filterFunction}
    >
      {label}
    </p>
  );
}
