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
        neonBlue: '#2f68c4',
        lightPink: '#837dec',
        darkPurple: '#2f2a89',
        customPurple: '#4F46E5',
        customPurpleDark: '#2c2883',
        darkestPurple: '#0d0c27',

        schemeVoid: '#0E0B16',
        schemePurple: '#A239CA',
        schemeIndigo: '#4717F6',
        schemeWhite: '#eaeded',

        // lightestWhite: '#F3FDFF',
        // mediumWhite: '#BFC6C8',
        // darkestWhite: '#abb2b4',

        // Original Values
        // darkestCoolGray: '#070a0d',
        // semiDarkCoolGray: '#0a0e12',
        // darkCoolGray: '#0f141b',
        // coolGray: '#131922',

        darkestCoolGray: '#010101',
        semiDarkCoolGray: '#07090c',
        darkCoolGray: '#010101',
        semiLightCoolGray: '#0d1116',
        coolGray: '#131922',
        contrastBlue: '#2c2883',

        // Offical Color Scheme

        //131922 as primary
        darkModeDarkestGray: '#080b0f',
        darkModeDarkGray: '#131922',
        darkModeMediumGray: '#1D2633',
        darkModeLightGray: '#334359',

        //4F46E5 as primary
        mainPurple: '#4F46E5',
        // mainPurple: '#B061FF',
        mainDarkPurple: '#232066',
        mainBlue: '#3C8DE6',
        mainDarkBlue: '#0A1C45',
        mainBlueComp: '#185799',

        //lightModeWhite
        lightestWhite: '#fcfcfd',
        mediumWhite: '#ebeff4',
        darkestWhite: '#abbbce'
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
