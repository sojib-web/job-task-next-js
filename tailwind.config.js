/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // 'class' strategy required for toggle
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
};
