/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {},
  },
  variants: {},  
  plugins: [],
  postcss : {
  plugins: [require('tailwindcss'), require('autoprefixer')],
}
}


