module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {}
  },
  variants: {
    container: [],
    extend: {}
  },
  corePlugins: {
    container: false
  },
  plugins: require('@hongbusi/tailwindcss-config')
};
