/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'logo-shop': "url('/src/assets/image/logo.png')",
      },
      colors: {
        'primary-white': '#fff',
        'primary-yelow': '#eba81d',
        'primary-gray': '#333333',
      },
    },
  },
  plugins: [],
};
