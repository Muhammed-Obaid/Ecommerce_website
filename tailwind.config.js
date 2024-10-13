/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue': '#7e5bef ',
        'purple': '#7e5bef',
      },
      padding: {
        'top': '20px 2px'
      },
      fontSize: {
        'size': '32px'

      },
    },
  },
  plugins: [],
}

