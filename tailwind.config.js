module.exports = {
  mode: "jit",
  purge: [
    "./index.html"
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'bg-persona': "#0F31AF" 
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
