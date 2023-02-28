/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
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
