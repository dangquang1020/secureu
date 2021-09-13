module.exports = {
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './layout/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      zIndex: {
        "1": "1",
        "-1": "-1",
        "-10": "-10",
        "-100": "-100",
      },
      spacing: {
        "30": "7.5rem"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
