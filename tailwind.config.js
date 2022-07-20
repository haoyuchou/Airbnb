/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      zIndex:{
        '1001': '1001',
      }
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
