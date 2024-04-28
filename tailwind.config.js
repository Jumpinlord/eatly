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
        animatedHeading: {
          "0%": {
            transform: "translateY(0%)",
            opacity: '0'
          },
          "25%": {
            opacity: '0.25'
          },
          "50%": {
            transform: "translateY(-50%) scale(1.05)",
            opacity: '0.5'
          },
          "75%": {
            transform: "translateY(-25%) scale(1.15)",
            opacity: '0.75'
          },
          "85%": {
            opacity: '1'
          },
          "100%": {
            transform: "translateY(0%) scale(1)",
          },
        },
      },
      backgroundSize: {
        '300%': '300%',
      },
      animation: {
        gradient: 'animatedgradient 9s ease infinite alternate',
        animatedHeading: "animatedHeading linear forwards",
      },
      supports: {
        "no-scroll-driven-animations": "not(animation-timeline: scroll())",
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