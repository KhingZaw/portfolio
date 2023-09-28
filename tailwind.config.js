/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      screens:{
        "sm":"480px"
      },
      colors:{
        primary:'#FF6363'
      },
      spacing:{
        "big":"48rem"
      },
      fontFamily:{
        nunito: ['Nunito','sans-serif']
      }
    },
  },
  plugins: [],
}

