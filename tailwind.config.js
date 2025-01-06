/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'quicksand': [
          'Quicksand',
          'sans-serif'
        ],
      },
      colors: {
        'blue': '#3b82f6',
        'blue-soft': '#60A5FA',
        'black': '#1f2937',
        'green': '#22c55e'
      },
    },
  },
  plugins: [],
}

