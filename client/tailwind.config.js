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
        neonBlue: '#3B82F6',
        lightPink: '#837dec',
        darkPurple: '#2f2a89',
        customPurple: '#4F46E5',
        customPurpleDark: '#2c2883',

        lightestWhite: '#F4FDFF',
        mediumWhite: '#BFC6C8',
        darkestWhite: '#abb2b4',

        darkestCoolGray: '#070a0d',
        darkCoolGray: '#0f141b',
        coolGray: '#131922',

      },
      fontFamily: {
        crusadersFont: 'Wallpoet'
      },
      boxShadow: {
        notificationShadowBlue: '0 10px 10px -12px rgba(26, 222, 205, 0.6)',
        notificationShadowPink: '0 10px 10px -10px rgba(131, 125, 236, 0.5)'
      }
    },
  },
  plugins: [],
}
