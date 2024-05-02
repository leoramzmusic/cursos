/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js}",
  ],
  
  theme: {
    extend: {
      colors: {
        dark: '#333', // Define el color de fondo oscuro
        'dark-text': '#fff', // Define el color de texto para el modo oscuro
      },
    },
  },
  plugins: [],
}