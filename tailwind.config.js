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
        'primary-yelow': '#e7d422',
      },
    },
  },
  plugins: [],
};
