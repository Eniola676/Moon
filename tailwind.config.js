/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'hero-bg':"url('./images/bg2.jpg')"
      },
      fontFamily:{
        'Bellefair':"Bellefair",
        'Barlow': "Barlow Condensed"
        
      }
    },
    container:{
      
      padding:'5.7rem',
      
    },
  },
  plugins: [],
}
