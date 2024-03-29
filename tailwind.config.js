/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'logo-shop': "url('/src/assets/image/logo.png')",
        'lg-background-promotion': "url('/src/assets/image/smarwatchpromotion.PNG')",
        'background-profile': "url('/src/assets/image/backgroundprofile.jpg')",
      },
      colors: {
        'primary-white': '#fff',
        'primary-yelow': '#eba81d',
        'primary-gray': '#333333',
        'icon-triangle': 'transparent transparent #fff transparent',
        'icon-sale': 'transparent #eba81d transparent #eba81d',
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        '1-4-1': 'repeat(1, 1fr 4fr 1fr)',
        '2-8': 'repeat(1,2fr 10fr)',
        '4-8': 'repeat(1,4fr 8fr)',

        // Complex site-specific column configuratio
      },
    },
  },
  plugins: [],
};
