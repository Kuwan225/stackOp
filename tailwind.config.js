/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#71492E",
      },
    },
    fontFamily: {
      laila: ["Laila", "sans-serif"],
    },
  },
  plugins: [],
};
