/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'inter': ['Inter', 'sans-serif']
      },
      container:{
        center: true,
      },
      fontSize:{
        'text-vs' : '10px'

      },
      height :{

        'h-banner': '450px'
      }
    },
  },
  plugins: [],
}
