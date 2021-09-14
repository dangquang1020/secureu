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
        30: "7.5rem",
      },
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
      "light-blue": "#598EEB",
    },
    backgroundColor: (theme) => ({
      ...theme("colors"),
    }),
    fontSize: {
      sm: "0.625rem",
      xs: "0.75rem",
      "13/16": "0.8125rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
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
      100: "25rem",
      150: "37.5rem",
      240: "60rem",
      300: "75rem",
      ...breakpoints(theme("screens")),
    }),
    borderColor: (theme) => ({
      ...theme("colors"),
    }),
    placeholderOpacity: (theme) => ({
      ...theme("opacity"),
    }),
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
