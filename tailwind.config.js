/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class', // Enable class-based dark mode
  theme: {
    extend: {
      colors: {
        primary: '#1D4ED8',
        secondary: '#D97706', 
        backgroundLight: '#EDEFFC',
        backgroundDark: '#111827', 
        textLight: '#1F2937', 
        textDark: '#030424', 
        black: '#020414',
      },
      fontFamily: {
        sans: ['Nunito', 'sans-serif'],
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
      backgroundImage: {
        'basic-gradient': 'linear-gradient(to bottom, #7e22ce, #4f46e5) ',
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['dark'], 
      textColor: ['dark'], 
      borderColor: ['dark'], 
      ringColor: ['dark'], 
    },
  },
  plugins: [],
}
