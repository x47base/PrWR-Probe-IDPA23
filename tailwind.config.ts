import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {},
    fontFamily: {
      normal: ['Poppins','sans-serif'],
      sans1: ['Helvetica', 'Arial', 'sans-serif'],
    },
    extend: {
      colors: {
        brand: '#CAC198',
        background: "#FFF5E6",
        header: "#CAC198",
        hover: "#313131",
        textLight: "#CAC198",
        textHeader: "#FFFFFF",
        textFaded: "#ABABAB",
        border: "#313131",
        sticky: "#E5DBB7",
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
