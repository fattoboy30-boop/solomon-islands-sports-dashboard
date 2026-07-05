/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'solomon': {
          'blue': '#003580',
          'yellow': '#FFD700',
          'green': '#228B22',
          'red': '#CE1126',
        }
      }
    },
  },
  plugins: [],
}
