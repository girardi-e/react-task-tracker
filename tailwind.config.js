module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      padding: '2rem',
    },
    borderWidth: {
      '5': '5px',
    },
    extend: {
      fontFamily: {
        'Rampart': ["Rampart One", "Regular"],
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
