import { fontFamily as _fontFamily } from 'tailwindcss/defaultTheme'
import generateColors from './utils/generateTailwindColors'

/** @type {import('tailwindcss').Config} */
export const darkMode = 'class'
export const content = [
  './src/**/*.{ts,tsx}',
]
export const theme = {
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
      mont: ['var(--font-montserrat)', ..._fontFamily.sans],
    },
  },
}
export const plugins = []
