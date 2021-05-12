const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit', // Just-In-Time Compiler
  purge: ['./src/**/*.html'],
  darkMode: false, // or 'media' or 'class',
  corePlugins: {
     container: false,
  },
  theme: {
    extend: {
      colors: {
         blue: {
          light: '#338bc8',
          link: '#2581d0',
          DEFAULT: '#185599',
          dark: '#071f51',
        },
        indigo: {
          light: '#76769f',
          DEFAULT: '#121341',
        },
        gray: {
          light: '#ebebeb',
          dark: '#bcbcbc'
        }
      },
      borderWidth: {
        DEFAULT: '1px',
        '0': '0',
        '2': '2px',
        '3': '3px',
        '4': '4px',
        '5': '5px',
        '6': '6px',
        '8': '8px',
        '12': '12px',
      },
      boxShadow: {
        'cardshadow': '0 1px 45px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.2)',
      },
      fontFamily: {
        'proxima': 'ProximaNovaA-Regular, sans-serif',
        'proxima-bold': 'ProximaNovaA-Bold, sans-serif',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
