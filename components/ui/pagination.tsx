type PaginationProps = {
  activePage: number;
  totalPages: number;
  arrowLeft: () => void;
  arrowRight: () => void;
};

export default function PaginationComponent({
  activePage,
  totalPages,
  arrowLeft,
  arrowRight,
}: PaginationProps) {
  return (
    <div className="flex justify-center items-center">
      <button
        //   pravi buttone (slika i background)
        className="text-xl font-bold bg-primary px-3 py-1 m-2 rounded-xl"
        disabled={activePage === 1}
        style={{ display: activePage == 1 ? "none" : "block" }}
        onClick={arrowLeft}
      >
        prev
      </button>
      <p>{activePage}</p>
      <button
        disabled={activePage === totalPages}
        style={{
          display: activePage == totalPages ? "none" : "block",
        }}
        onClick={() => arrowRight()}
      >
        ___next
      </button>
    </div>
  );
}
