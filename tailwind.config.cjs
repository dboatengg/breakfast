/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      smMax: { max: "640px" },
      md: "768px",
      mdMax: { max: "768px" },
      lg: "1024px",
      lgMax: { max: "1024px" },
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      fontFamily: {
        kaushan: ["Kaushan Script", "cursive"],
        playfair: ["Playfair Display", "serif"],
      },
      colors: {
        "brand-yellow": "#dfa32f",
        "brand-white": "#ffffff",
        "brand-gray": "#cdcdcd",
        "brand-black": "#141414",
      },
    },
  },
  plugins: [],
};
