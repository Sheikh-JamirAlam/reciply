/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      '2xs': '427px',
      'xs': '536px',
    },
    extend: {
      colors: {
        dark: '#141414',
        light: '#F5F5F5',
        platinum: '#EAECEA',
        orange: '#FA9146',
        pumpkin: '#F1721A',
      },
      flex: {
        '100': '0 0 100%'
      },
      animation: {
        show: 'show 0.5s ease-in-out',
        hide: 'hide 1s ease-in-out',
      },
      keyframes: {
        show: {
          '0%': { scale: '1' },
          '50%': { scale: '0' },
          '100%': { scale: '1' },
        },
        hide: {
          '0%': { scale: '1' },
          '100%': { scale: '0' },
        }
      },
      boxShadow: {
        '3xl': '15px 0px 45px 0px rgba(0,0,0,0.3)',
        '4xl': '9px 6px 15px 10px rgba(0,0,0,0.4)',
      },
      backgroundImage: {
        'signup-page': "url('/signup_login/signupbg.jpg')",
        'login-page': "url('/signup_login/loginbg.jpg')",
      },
    },
  },
  plugins: [],
}
