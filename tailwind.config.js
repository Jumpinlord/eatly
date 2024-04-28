/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    './src/**/*.{html,js}',
    './index.html',
  ],
  darkMode: 'class',
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      keyframes: {
        animatedgradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        tickerText: {
          '0%': { transform: 'translate3d(0, 0, 0)' },
          '100%': { transform: 'translate3d(-100%, 0, 0)' },
        },
        pointer: {
          '0%': { transform: 'translateX(0)' },
          '10%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-8px)' },
          '40%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        gradient: 'animatedgradient 9s ease infinite alternate',
        tickerText: 'tickerText 40s linear infinite',
        pointer: 'pointer 5s cubic-bezier(.25,1.58,.6,-0.46) infinite',
      },
      backgroundSize: {
        '300%': '300%',
      },
    },
    screens: {
      'xs': '375px',
      '2xs': '525px',
      ...defaultTheme.screens,
    },
  },
  plugins: [],
};