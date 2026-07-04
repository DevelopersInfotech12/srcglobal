/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  '#fff3ee',
          100: '#ffe4d5',
          200: '#ffc4a3',
          300: '#ff9b6a',
          400: '#ff6b35',
          500: '#E8470A',
          600: '#c73a06',
          700: '#a12e07',
          800: '#84260c',
          900: '#6d220e',
        },
        navy: {
          50:  '#f0f4ff',
          100: '#dce6ff',
          200: '#b3c8ff',
          300: '#7fa3ff',
          400: '#4a72f5',
          500: '#2d52d6',
          600: '#1B2A4A',
          700: '#162240',
          800: '#0f1a30',
          900: '#090f1e',
        },
      },
      fontFamily: {
        display: ['var(--font-cormorant)', 'Georgia', 'serif'],
        body: ['var(--font-jost)', 'system-ui', 'sans-serif'],
        sans: ['sans', 'Outfit', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
