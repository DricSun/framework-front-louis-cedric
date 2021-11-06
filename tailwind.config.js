module.exports = {
  mode: "jit",
  purge: [
    "./index.html"
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'red':'#f1f1f1'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
