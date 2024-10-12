/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      container: {
        screens: {
          'lg': '1350px',
          'xl': '1350px',
          '2xl': '1350px',
        },
      },
      fontFamily: {
        urbanist: ['Urbanist', 'serif'],
        playfair: ['Playfair Display', 'serif'],
      },
      boxShadow: {
        'bottom': '0px 4px 20px 2px rgba(16, 30, 87, 0.07)',
      },
      colors: {
        beige: {
          200: '#CEAF83',
        },
        cream: {
          100: '#EEE5D8',
          200:'#FFF9F6',
        },
        grayCustom:{
          100: '#4D4D4D',
        }
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(177deg, rgba(217, 217, 217, 0.00) 2.94%, rgba(0, 0, 0, 0.80) 97.37%)',
        'split-lg': 'linear-gradient(to right, #1C1B1F 0%, #1C1B1F 50%, #FFF9F6 50%, #FFF9F6 100%)',
        'split-sm': 'linear-gradient(to bottom, #1C1B1F 0%, #1C1B1F 50%, #FFF9F6 50%, #FFF9F6 100%)',
      }
    },
  },
  plugins: [],
}