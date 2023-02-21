/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      cursive: ["Babylonica", "cursive"],
      raleway: ["Raleway", "sans-serif"],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: colors.white,
      gray: colors.neutral,
      primary: colors.violet,
      secondary: colors.red,
      text: {
        DEFAULT: "#3A3A3A"
      }
    },
  },
  plugins: [],
};
