/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class', // Enable class-based dark mode
  theme: {
    extend: {
      colors: {
        // Custom colors for light and dark themes
        primary: '#1D4ED8', // blue
        secondary: '#D97706', // amber
        backgroundLight: '#EDEFFC', // light gray
        backgroundDark: '#111827', // dark gray
        textLight: '#1F2937', // dark text in light mode
        textDark: '#030424', // light text in dark mode
        black: '#020414',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // You can customize this with a preferred font family
      },
      screens: {
        'xl': '1200px',
        'md': '850px'
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['dark'], // Enable dark mode for background colors
      textColor: ['dark'], // Enable dark mode for text colors
      borderColor: ['dark'], // Enable dark mode for border colors
      ringColor: ['dark'], // Enable dark mode for focus ring colors
    },
  },
  plugins: [],
}
