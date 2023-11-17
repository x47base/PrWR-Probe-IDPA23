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
        // Brand Color
        brand: '#CAC198',
        "dark-brand": "#FF0000",
        // Background Color
        background: "#FFF5E6",
        "dark-background": "#0f141a",
        // Header Color
        header: "#CAC198",
        "dark-header": "#181f26",
        // Hover Color
        hover: "#313131",
        "dark-hover": "#FF0000",
        // Text Color
        textLight: "#FFFFFF",
        textDark: "#e9eef4",
        // Faded Color
        textFaded: "#ABABAB",
        "dark-textFaded": "#FF0000",
        // Border Color
        border: "#313131",
        "dark-border": "#FF0000"

      },
      gridTemplateColumns: {
        player: "85px repeat(10, minmax(0, 1fr)) 85px"
      }
    },
  },
  plugins: [],
}