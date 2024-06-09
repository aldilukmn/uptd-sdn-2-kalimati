/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'patrick-hand': [
          'Patrick Hand',
          'sans-serif'
        ],
      },
      colors: {
        'blue': '#3b82f6',
        'black': '#1f2937',
      },
    },
  },
  plugins: [],
}

