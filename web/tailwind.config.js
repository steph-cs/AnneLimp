/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        calypso: {
          50: '#f0fafb',
          100: '#d8f0f5',
          200: '#b6e2eb',
          300: '#84cddc',
          400: '#4baec5',
          500: '#2f92ab',
          600: '#2a7690',
          DEFAULT: '#296379',
          800: '#285162',
          900: '#254454',
          950: '#142c38',
        },
        tradewind: {
          50: '#f2fbfa',
          100: '#d2f5f2',
          200: '#a4ebe6',
          300: '#6fd9d5',
          DEFAULT: '#3cb4b4',
          500: '#28a2a4',
          600: '#1d8084',
          700: '#1b676a',
          800: '#1a5255',
          900: '#1a4447',
          950: '#09272a',
        },
      },
    },
  },
  plugins: [],
}
