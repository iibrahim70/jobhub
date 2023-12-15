/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#333333",
        blueviolet: "#33334f",
      },
    },
  },
  plugins: [],
};
