/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./templates/**/*.html",
    "./templates/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        background_dados: "#222D32",
        texto_dados: "#B8C7CE"
      }
    },
  },
  plugins: [],
}

