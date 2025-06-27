/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        header: "#00fbe3",
        body: "#e3f800",
        footer: "#003832",
      },
    },
  },
  plugins: [],
};

