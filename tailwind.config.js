/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {},
    fontFamily: {
      normal: ['Poppins','sans-serif'],
      sans1: ['Helvetica', 'Arial', 'sans-serif'],
    },
    extend: {
      colors: {
        brand: '#47D05D',
        background: "#121212",
        header: "#050505",
        hover: "#313131",
        textLight: "#FFFFFF",
        textFaded: "#ABABAB",
        border: "#313131"
      },
      gridTemplateColumns: {
        player: "85px repeat(10, minmax(0, 1fr)) 85px"
      }
    },
  },
  plugins: [],
}