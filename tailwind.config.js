/** @type {import('tailwindcss').Config} */
export default {
  important:true,
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      '5xl': '2560px',
      '4xl': '1921px',
      '3xl': "1536px",
      '2xl': '1440px',
      'xl':'1280px',
      'lg': '992px',
      'md':'768px',
      'sm': '576px',
      's': '480px',
      'xs': '400px',
      'xxs': '360px',
      'xxxs': "320px"
    },
  },
  plugins: [],
}