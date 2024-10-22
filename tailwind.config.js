/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        staat: ['"Staatliches"', 'sans-serif', 400],
        quantico: ['"Quantico"', 'sans-serif'],
        ubuntu: ['"Ubuntu"', 'sans - serif'],
        lato: ['"Lato"', 'sans - serif'],
        inter: ['"Inter"','sans-serif']
      },
      colors: {

      },
    },
  }
}