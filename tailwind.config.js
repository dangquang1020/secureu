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
        12: "3rem",
        5.5: "1.375rem",
        17: "4.375rem",
        18: "4.5rem",
        19: "4.625rem",
        26: "6.5rem",
        30: "7.5rem",
        30.5: "7.625rem",
        44: "11rem",
        "14/100": "14%",
        "3/4": "75%",
        "3/5": "60%",
      },
      height: {
        2.5: "0.625rem",
        11.5: "2.875rem",
        12: "3rem",
        12.5: "3.125rem",
        15: "3.75rem",
        21: "5.25rem",
        25: "6.25rem",
        30.5: "7.625rem",
        44: "11rem",
        50: "12.5rem",
        54: "13.5rem",
        58: "14.5rem",
        100: "25rem",
        124: "31rem",
        152: "38rem",
        168: "42rem",
      },
      width: {
        2.5: "0.625rem",
        11.5: "2.875rem",
        12.5: "3.125rem",
        15: "3.75rem",
        21: "5.25rem",
        25: "6.25rem",
        38.5: "9.625rem",
        50: "12.5rem",
        58: "14.5rem",
        100: "25rem",
        300: "75rem",
      },
      flex: {
        87: "0 0 87px",
        100: "0 0 100px",
      },
      boxShadow: {
        grey: "0 1px 3px rgba(119,119,119,0.5)",
      },
      gap: {
        92: "23rem",
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
        graphite: "#100F24",
      },
      lineHeight: {
        'extra-loose': '2.375rem',
       }
    },
    screens: {
      xxs: "320px",
      xs: "414px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    backgroundColor: (theme) => ({
      ...theme("colors"),
    }),
    fontSize: {
      xxs: "0.5rem",
      sm: "0.625rem",
      "11/16": "0.6875rem",
      xs: "0.75rem",
      "13/16": "0.8125rem",
      md: "0.875rem",
      "14/16": "0.875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "21/16": "1.3125rem",
      "2xl": "1.5rem",
      "26/16": "1.625rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "37/16": "2.3125rem",
      "44/16": "2.75rem",
      "45/16": "2.8125rem",
      "5xl": "3rem",
      "6xl": "4rem",
    },
    fontFamily: {
      lato: ["Lato", "sans-serif"],
      "roboto-light": ["Roboto-Light", "sans-serif"],
      "roboto-medium": ["Roboto-Medium", "sans-serif"],
      "roboto-black": ["Roboto-Black", "sans-serif"],
      "montserrat": ["Montserrat", "sans-serif"]
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
      33.5: "8.375rem",
      38.5: "9.625rem",
      43: "10.75rem",
      52: "13rem",
      64: "16rem",
      72: "18rem",
      xs: "20rem",
      92: "23rem",
      96: "24rem",
      sm: "24rem",
      100: "25rem",
      124: "31rem",
      150: "37.5rem",
      240: "60rem",
      300: "75rem",
      "1/4": "25%",
      "1/3": "33.3333%",
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
      auto: "auto",
      "14/16": "0.875rem",
      31: "7.75rem",
    }),
    positions: {
      bottom: "bottom",
      center: "center",
      left: "left",
      "left-bottom": "left bottom",
      "left-top": "left top",
      "left-center": "left center",
      right: "right",
      "right-bottom": "right bottom",
      "right-top": "right top",
      top: "top",
      "75-top": "75% top",
    },
    objectPosition: (theme) => theme("positions"),
    letterSpacing: {
      widest: '.125rem'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
