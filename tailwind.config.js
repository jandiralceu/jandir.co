/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    fontFamily: {
      sans: ["Reddit Sans Condensed", "sans-serif"],
      serif: ["Kally Dreams", "serif"],
    },
    extend: {},
  },
  plugins: [],
};
