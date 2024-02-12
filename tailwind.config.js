/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': {'max': '599px'},    // Small devices (less than 580px)
        'md': {'min': '600px', 'max': '849px'},    // Medium devices (580px - 850px)
        'lg': {'min': '850px', 'max': '1023px'},   // Large devices (850px - 1024px)
        'xl': {'min': '1024px'},   // Extra-large devices (1024px and above)
      },
    },
  },
  plugins: [],
}

