/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: '#141414',
        light: '#FDFDFD',
        platinum: '#DDDFDD',
        orange: '#FA9146',
        pumpkin: '#F1721A',
      },
    },
  },
  plugins: [],
}
