/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        maincolor: '#f97316'
      }
    },
  },
    screens:{
      sm:'576px',
      md:'768px',
      lg:'992px',
      xl:'1200px',
      '2x1': '1400px',
      
    },
  plugins: [],
}

