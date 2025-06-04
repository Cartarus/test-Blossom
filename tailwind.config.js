/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100:'#EEE3FF',
          600:'#8054C7',
          700:'#5A3696',
        },
        secondary: {
          100: '#63D838',
        },
      },
      fontFamily: {
        greycliff: ['Greycliff', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
