/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}",

  ],
  theme: {
    extend: {
      colors: {
        'dark-blue': '#2d314d',
        'lime-green': '#31d35c',
        'cyan': '#2bb7da',
        'gray-blue': '#9698a6',
        'gray-blue-light': '#f3f4f6',
        'gray-light': '#fafafa',
        'white': '#ffffff',
      },
      fontFamily: {
        public: ['Public Sans', 'sans-serif']
      },
      fontSize: {
        bodyCopy: '18px',
      },
      maxWidth: {
        'mobile': '375px',
        'desktop': '1440px',
      }
    },
  },
  plugins: [],
}
