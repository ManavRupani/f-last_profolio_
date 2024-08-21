/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'loop-scroll': 'loop-scroll 10s linear infinite',
      },
      boxShadow: {
        'custom': '5px 5px 0px 0px rgba(0, 0, 0, 0.8)', // Lower right black shadow
      },
      keyframes: {
        'loop-scroll': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      }              
    },
  },
  plugins: [],
}

