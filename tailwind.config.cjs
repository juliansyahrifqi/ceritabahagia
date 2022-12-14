/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'montserrat': ['Montserrat', 'sans-serif'],
      'lato': ['Lato', 'sans-serif']
    },
    extend: {
      colors: {
        'gold': '#ffd82c',
        'semigold': '#ECD673',
        'white': '#ffffff',
        'black': '#303030',
        'secondary-black': '#636363',
        'hover-gold': '#766930',
        'blue-primary': '#007bff',
        'button-secondary': 'rgba(41, 147, 245, 0.3)',
        'feature-card': 'rgba(41, 147, 245, 0.15)',
        'feature-hover': 'rgba(41, 147, 245, 0.5)',
        'footer': '#373737',
        'square': 'rgba(24, 24, 24, 0.1)',
        'square-hover': 'rgba(24, 24, 24, 0.5)'
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