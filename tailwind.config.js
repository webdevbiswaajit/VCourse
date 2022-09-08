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
      ash: "#F2EFE8",
      lean: "#EAE2B7",
      black_lighten: "rgba(0, 48, 73, .25)",
      light_white: "#F2EFE8",
    },
    extend: {
      spacing: {
        700: "44rem",
        245: "18rem",
        430: "400px",
      },
      fontFamily: {
        rly: ["Raleway", "sans-serif"],
        slab: ["Hepta Slab", "serif"],
      },
      fontSize: {
        heading: "2.81rem",
      },
    },
  },
  plugins: [],
};
