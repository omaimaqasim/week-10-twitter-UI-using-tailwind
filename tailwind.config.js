/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
       screens: {
        'max-440': { 'max': '440px' },
      }
    },
  },
  plugins: [],
}

