module.exports = {
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layout/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      zIndex: {
        1: "1",
        "-1": "-1",
        "-10": "-10",
        "-100": "-100",
      },
      spacing: {
        17: "4.375rem",
        18: "4.5rem",
        19: "4.625rem",
        26: "6.5rem",
        30: "7.5rem",
        "3/4": "75%",
        "3/5": "60%",
      },
      height: {
        "2.5": "0.625rem",
        15: "3.75rem",
        50: "12.5rem",
        54: "13.5rem",
        58: "14.5rem",
        100: "25rem",
        124: "31rem",
        152: "38rem",
        168: "42rem"
      },
      width: {
        "2.5": "0.625rem",
        15: "3.75rem",
        50: "12.5rem",
        58: "14.5rem",
        100: "25rem",
      },
      boxShadow: {
        grey: "0 1px 3px rgba(119,119,119,0.5)",
      }
    },
    screens: {
      xs: "414px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    colors: {
      transparent: "transparent",
      white: "#fff",
      dark: "#1D1E20",
      mercury: "#E5E5E5",
      salmon: "#ED796F",
      "dark-blue": "#1D1D3F",
      "light-blue": "#658DE4",
      "dark-light-blue": "#598EEB",
      "dark-liver": "#4F4F4F",
      "dark-grey": "#777777",
      "midnight-blue": "#1D1E3C",
      "spun-pearl": "#9F9FAB",
    },
    backgroundColor: (theme) => ({
      ...theme("colors"),
    }),
    fontSize: {
      "xxs": "0.5rem",
      sm: "0.625rem",
      xs: "0.75rem",
      "13/16": "0.8125rem",
      md: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "21/16": "1.3125rem",
      "2xl": "1.5rem",
      "26/16": "1.625rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
    },
    fontFamily: {
      lato: ["Lato", "sans-serif"],
      roboto: ["Roboto", "sans-serif"],
    },
    textColor: (theme) => theme("colors"),
    opacity: {
      0: "0",
      25: "0.25",
      35: "0.35",
      50: "0.5",
      60: "0.6",
      75: "0.75",
      80: "0.8",
      100: "1",
    },
    maxWidth: (theme, { breakpoints }) => ({
      64: "16rem",
      72: "18rem",
      92: "23rem",
      96: "24rem",
      100: "25rem",
      124: "31rem",
      150: "37.5rem",
      240: "60rem",
      300: "75rem",
      "2/5": "24%",
      "29/100": "29%",
      ...breakpoints(theme("screens")),
    }),
    borderColor: (theme) => ({
      ...theme("colors"),
    }),
    placeholderOpacity: (theme) => ({
      ...theme("opacity"),
    }),
    placeholderColor: (theme) => ({
      ...theme("colors"),
    }),
    padding: (theme) => ({
      ...theme("spacing"),
      31: "7.75rem",
    }),
    positions: {
      bottom: 'bottom',
      center: 'center',
      left: 'left',
      'left-bottom': 'left bottom',
      'left-top': 'left top',
      'left-center': 'left center',
      right: 'right',
      'right-bottom': 'right bottom',
      'right-top': 'right top',
      top: 'top',
      '75-top': '75% top'
    },
    objectPosition: theme => theme('positions'),
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
