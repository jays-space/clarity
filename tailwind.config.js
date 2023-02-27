/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      cursive: ["Abril Fatface", "cursive"],
      body: ["Open Sans", "sans-serif"],
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      primary: colors.rose,
      black: colors.black,
      white: colors.white,
      gray: colors.neutral,
      fuchsia: colors.fuchsia,
      purple: colors.purple,
      text: {
        DEFAULT: "#3A3A3A",
      },
    },
    extend: {
      keyframes: {
        wave: {
          to: {
            "margin-left": "-90.4%",
          },
        },
      },
      transitionProperty: {
        width: "width",
      },
      animation: {
        wave: "wave 20s linear infinite",
      },
    },
  },
  plugins: [],
};
