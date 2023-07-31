/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        neonBlue: '#1ADECD',
        lightPink: '#C595FC',
        darkPurple: '#241F2C',
        customPurple: '#4F46E5',

        darkestCoolGray: '#030506',
        darkCoolGray: '#0b0f14',
        coolGray: '#131922',

      },
      fontFamily: {
        crusadersFont: ''
      }
    },
  },
  plugins: [],
}
