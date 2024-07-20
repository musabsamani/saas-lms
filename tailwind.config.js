/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.writing-mode-tb': {
          'writing-mode': 'tb',
        },
      }, ['responsive', 'hover']);
    },
  ],
}
