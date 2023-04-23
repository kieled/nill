const defaultTheme = require('tailwindcss/defaultTheme')
const generateColors = require('./utils/generateTailwindColors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        c: {
          red: generateColors(231, 111, 81),
          orange: generateColors(244, 162, 97),
          yellow: generateColors(233, 196, 106),
          blue: generateColors(38, 70, 83),
          black: generateColors(1, 22, 30),
        },
        bg: '#edede9',
      },
      fontFamily: {
        mont: ['var(--font-montserrat)', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
