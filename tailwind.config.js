/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enable dark mode using a CSS class
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        night: {
          light: '#374151',  // Custom light night color
          DEFAULT: '#1f2937', // Custom default night color
          dark: '#111827',    // Custom dark night color
        },
      },
    },
  },
  plugins: [],
}
