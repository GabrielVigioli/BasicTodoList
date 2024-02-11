/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: 'tw-',
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {colors: {
      'header': '#0D0D0D',
      'body': '#191919',
      'task': '#262626',
    }},
  },
  plugins: [],
}

