/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/components/**/*.{js,jsx,ts,tsx}",  "./src/screens/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      primary: '#6854EF',
    },
    extend: {},
  },
  plugins: [],
}
