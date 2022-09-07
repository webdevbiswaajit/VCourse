/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      khaki: "#FCBF49",
      black: "#003049",
    },
    fontFamily: {
      rly: ["Raleway", "sans-serif"],
      slab: ["Hepta Slab", "serif"],
    },
    extend: {
      spacing: {
        700: "44rem",
      },
      fontSize: {
        heading: "2.81rem",
      },
    },
  },
  plugins: [],
};
