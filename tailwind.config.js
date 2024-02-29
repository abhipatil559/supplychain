/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    // screens: {
    //   'mobile': '720px',
    //   'smallScreen' : '330px'
    // },
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}