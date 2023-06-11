/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,ts}',
  ],
  theme: {
    screens: {
      sm: '280px',
      lg: '1024px'
    },
    extend: {
      colors: {
        primary: '#e9b92b',
        secondary: '#ff8400',
        main_gray: '#575756'
      }
    },
  },
  plugins: [],
}

