/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Lalezar']
      },
      colors: {
        'primary': '#262D71',
        'secondary': '#6939B2',
        'violet': '#E0CCFF'
      }
    },
  },
  plugins: [],
}

