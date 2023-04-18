const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  safelist: ["bg-blue-400", "bg-green-400", "bg-red-400"],
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      "primary-color": "#233ba3",
      "darker-color": " #0c233e",
      "grey-color": "#8d9aa8",
      "red-color": "#e62565",
      "purple-color": "#8e70c7",
      "blue-color": "#2c98f0",
      "green-color": "#50af56",
      "orange-color": "#fc5b33",
      "hover-color": "#f5f7fa",
    },
  },
  plugins: [],
};
