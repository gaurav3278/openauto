/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'off-white': '#F0F2F4',
        'light-gray': '#EDEDED',
        'light-black': '#414548',
        'white-smoke': '#F5F5F5',

        'light-border': '#414548',
        'light-black2': '#161B25',
      },
    },
    fontFamily: {
      'inter': ['Inter'],
      'public': ['Public Sans','sans-serif'],
    },
    screens: {
      sm: { max: '640px' },
      md: { max: '768px' },
      lg: { max: '1024px' },
    },
  },
  plugins: [],
}
