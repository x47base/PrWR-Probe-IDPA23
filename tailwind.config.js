/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      xs: "240px",
      xs2: "320px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1500px",

      cardresp: "1175px",
      noresp: "1176px",
      navp: "1380px",

    },
    extend: {
      boxShadow: {
        shadow1: "0 4px 60px black",
      },
      screens: {
        'widescreen': { 'raw': '(min-aspect-ratio: 3/2)' },
        'tallscreen': { 'raw': '(min-aspect-ratio: 13/20)'}
      },
      spacing: {
        128: "32rem",
        192: "48rem",
        256: "64rem",
        260: "80rem",
      },
    },
  },
  plugins: [],
}