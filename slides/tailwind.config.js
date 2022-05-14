module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'background': "url('/src/assets/background.jpg')"
      },
      colors: {
        'kzn-blue': '#00c7ff',
        'kzn-cyan': '#29ccd9',
        'kzn-teal': '#52d4b3',
        'kzn-green': '#7ad98c',
        'kzn-apple': '#a3de66',
      }, 
      spacing: {
        '25/2': '8%',
        '1/6': '16.666667%',
        '1/2': '50%',
        '3/4': '75%',
        '5/6': '83.333333%',
      }
    },
  },
  plugins: [],
}