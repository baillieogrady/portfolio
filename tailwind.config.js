module.exports = {
  content: ['./index.html', './src/**/*.{html,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Open Sans"', 'system-ui', 'sans-serif'],
        heading: ['"Bebas Neue"', 'ui-sans-serif', 'sans-serif'],
      },
      colors: {
        black: '#141414',
        grey: '#ededed',
      },
    },
  },
  plugins: [],
};
