/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,pug,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

