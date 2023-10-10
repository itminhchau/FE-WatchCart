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
      gridTemplateColumns: {
        // Simple 16 column grid
        '4-8': 'repeat(1, 4fr 8fr)',

        // Complex site-specific column configuratio
      },
    },
  },
  plugins: [],
};
