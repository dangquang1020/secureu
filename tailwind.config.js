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
      white: "#fff",
      dark: "#1D1E20",
      mercury: "#E5E5E5",
    },
    backgroundColor: (theme) => ({
      ...theme("colors"),
    }),
    fontSize: {
      sm: "0.625rem",
      xs: "0.75rem",
      "13/16": "0.8125rem",
    },
    textColor: (theme) => theme("colors"),
    opacity: {
      35: "0.35",
    },
    maxWidth: (theme, { breakpoints }) => ({
      16: "16rem",
      25: "25rem",
      240: "60rem",
      300: "75rem",
      ...breakpoints(theme("screens")),
    }),
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
