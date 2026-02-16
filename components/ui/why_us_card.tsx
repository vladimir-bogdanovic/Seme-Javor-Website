type WhyCard = {
  title: string;
  text: string;
};

export default function WhyUsCard({ title, text }: WhyCard) {
  return (
    <div className="flex items-center justify-center flex-col p-3 mt-20 mb-20 w-80">
      <h4 className="text-center font-large font-medium tracking-wide text-gray-800 p-2 w-70">
        {title}
      </h4>
      <p className="text-center leading-relaxed text-gray-700">{text}</p>
      {/* more info */}
      <a
        href="#"
        className="group inline-flex items-center gap-2 font-medium text-orange-500 hover:text-orange-600 transition-all duration-300"
      >
        vise informacija
        <svg
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2.5"
          stroke="currentColor"
          className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
          />
        </svg>
      </a>
    </div>
  );
}
