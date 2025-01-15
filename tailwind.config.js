/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "red": "#C73B0F",
        "dark-red": "#952C0B",
        
        "rose-900": "#260F08",
        "rose-500": "#87635A",
        "rose-400": "#AD8A85",
        "rose-300": "#CAAFA7",
        "rose-100": "#F5EEEC",
        "rose-50": "#FCF8F6",

        "green": "#1EA575",
      },
      fontFamily: {
        sans: ["Red Hat Text", 'sans-serif']
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
}

