/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'azul-face': '#1877F2',
        'cinza-face': '#f0f2f5',
        'verde-face': '#36a420',
      },  
      spacing: {
        '580': '580px',
        '380': '380px'
      },
    },
  },
  plugins: [],
}

