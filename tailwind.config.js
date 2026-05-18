/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
       screens: {
          xs: '420px',  
          xxs : '375px'
      }
    },
  },
  plugins: [],
}

