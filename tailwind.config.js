/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage:{
        'bg-img-dark':"url('./assets/img/bgDark.jpg')"
      },

    },
  },
  plugins: [],
}
