/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          red: '#ee1e23',
          'red-dark': '#c41e1e',
          'red-darker': '#a31818',
          tan: '#d4a574',
        },
      },
    },
  },
  plugins: [],
};
