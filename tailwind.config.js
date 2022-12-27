/** @type {import('tailwindcss').Config} */
const { pink } = require('tailwindcss/colors');
const colors = require('tailwindcss/colors')
const purge = process.env.NODE_ENV === 'production';
module.exports = {
  purge: {
    enable: purge,
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./build/**/*.html"],
  },

  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      primary : '#7F95D1',
      peach : '#FFC0BE',
    },
    extend: {

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
