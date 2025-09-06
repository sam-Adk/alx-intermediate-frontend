/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.{html,js}",       // catches 1-index.html and 2-index.html
    "./src/**/*.{html,js}" // catches anything in src/
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
