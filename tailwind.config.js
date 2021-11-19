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
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const scrollBehaviors = {
        '.scroll-smooth': {
          'scroll-behavior': 'smooth'
        },
        '.scroll-auto': {
          'scroll-behavior': 'auto'
        }
      };

      addUtilities(scrollBehaviors);
    })
  ]
};
