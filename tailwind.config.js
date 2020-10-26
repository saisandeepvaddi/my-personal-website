module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
  },
  purge: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      display: ["Roboto", "sans-serif"],
      body: ["Roboto", "sans-serif"],
    },
    container: {
      center: true,
    },
    extend: {
      colors: {
        typescript: "#235a97",
        react: "#61dafb",
        javascript: "#f7df1e",
        electron: "#2f3241",
        nodejs: "#026e00",
      },
    },
  },
  variants: {},
  plugins: [],
};
