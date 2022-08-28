/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./Components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        header: '#10454F',
        gris: '#506266'
      }
    },
    fontFamily:{
      Roboto: ['Roboto']
    }
  },
  plugins: [],
}