/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gold': '#ffd82c',
        'semigold': '#ECD673',
        'white': '#ffffff',
        'black': '#303030',
        'secondary-black': '636363',
        'hover-gold': '#766930',
        'blue-primary': '#007bff',
        'button-secondary': 'rgba(41, 147, 245, 0.3)',
      },
      animation: {
        slidein: 'slidein .7s ease-in-out'
      },
      keyframes: {
        slidein: {
          from: {transform: 'translateX(120vw)'},
          to: {transform: 'translateX(0)'}
        }
      }
    },
  },
  plugins: [],
}