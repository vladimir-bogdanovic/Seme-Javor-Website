/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // Gde Tailwind traži klase
    "./pages/**/*.{js,ts,jsx,tsx}", // Ako koristiš Next.js pages folder
    "./components/**/*.{js,ts,jsx,tsx}", // Ako imaš komponente
  ],
  theme: {
    extend: {
      colors: {
        primary: "#8E745C", // primer custom boje
        secondary: "#C0A892",
        sorteBackground: "#f7f7f7",
        cardBackground: "#fafafa",
        filterBackground: "#eeeeee",
        cardGreyText: "#8d8d8d",
      },
      spacing: {
        150: "37.5rem", // primer custom visine/širine
      },
    },
  },
  plugins: [], // ovde možeš dodati Tailwind plugin-ove
};
