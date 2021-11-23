module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      padding: {
        'DEFAULT': '1rem',
        'sm': '2rem',
        'lg': '4rem',
        'xl': '5rem',
        '2xl': '6rem'
      }
    },
    extend: {
      backgroundImage: {
        'banner-1': "url('/src/assets/1.jpeg')",
        'banner-2': "url('/src/assets/2.jpeg')",
        'banner-3': "url('/src/assets/3.jpeg')",
        'banner-4': "url('/src/assets/4.jpeg')",
        'banner-5': "url('/src/assets/5.jpeg')"
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: require('@hongbusi/tailwindcss-config')
};
