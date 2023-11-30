/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        'lm': '0px 4px 17px rgba(0, 0, 0, 0.25)',
        'bs': '0px 4px 4px rgba(0, 0, 0, 0.25)' 
      },
      boxShadow: {
        'lm': '0px 3px 28px rgba(0, 0, 0, 0.25)'
      }
    },
    screens: {
      'md' : '900px',
      'sm': '640px',
    },
    fontFamily: {
      Poppins: ["Poppins"]
    },
    animation: {
      'fadeIn': 'fadeIn 2s ease-in-out',
      'fadeOut': 'fadeOut 1s ease-in-out',
    },
    keyframes: {
      'fadeIn': {
        '0%': { opacity: '0' },
        '100%': { opacity: '1' },
      },
      'fadeOut': {
        '0%': { opacity: '1' },
        '100%': { opacity: '0' },
      },
    }
  },
  plugins: [],
}