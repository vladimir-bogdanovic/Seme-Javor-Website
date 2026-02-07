type ButtonProps = {
  btn: string;
};

export default function Button({ btn }: ButtonProps) {
  return (
    <button
      type="button"
      className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-base text-sm px-4 py-2.5 text-center m-2 rounded-md cursor-pointer"
    >
      {btn}
    </button>
  );
}
