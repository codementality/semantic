/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./source/**/*.{twig, js}"],
  theme: {
    extend: {},
  },
  plugins: [
    require("daisyui"),
    require('@tailwindcss/forms'),
  ],
}
