/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'quicksand': ['quicksand', 'sans-serif'],
        'doted': ['Raleway Dots', 'cursive'],
        'playfair': ['Playfair Display', 'sans-serif'],
        'ropa': ['Ropa Sans', 'sans-serif'],
        'poltawski': ['Poltawski Nowy', 'serif'],
        'hande': ['Handlee', 'cursive']
      },
    },
  },
  plugins: [],
}