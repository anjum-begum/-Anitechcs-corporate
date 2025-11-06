/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#007BFF",
        secondary: "#1A1A1A",
        accent: "#F5F5F5",
      },
    },
  },
  plugins: [],
};
