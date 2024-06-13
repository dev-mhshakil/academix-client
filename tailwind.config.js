/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Inter"],
      },
      colors: {
        primary: "#4f46e5",
        secondary: "#dedcff",
        backgroundColor: "#fbfbfe",
        accent: "#433bff",
        success: "#84CC16",
      },
    },
  },
  plugins: [require("daisyui")],
};
