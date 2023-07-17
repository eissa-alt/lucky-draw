const plugin = require('tailwindcss/plugin');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
   mode: 'jit',
   corePlugins: {
      container: false, //! I am using tailwind-bootstrap-grid
   },
   // darkMode: 'class',
   future: {
      removeDeprecatedGapUtilities: true,
      purgeLayersByDefault: true,
   },
   experimental: {
      applyComplexClasses: true,
   },

   content: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
   theme: {
      // customForms: theme => ({
      //    default: {
      //       'input, textarea': {
      //          '&::placeholder': {
      //             color: theme('colors.primary'),
      //          },
      //       },
      //    },
      // }),
      extend: {
         // typography: theme => ({
         //    DEFAULT: {
         //       css: {
         //          color: theme('white'),
         //       },
         //    },
         // }),
         fontFamily: {
            headline: ['Spotnik', ...defaultTheme.fontFamily.sans],
            main: ['Tajawal', ...defaultTheme.fontFamily.sans],
            fancy: ['LilitaOne', ...defaultTheme.fontFamily.sans]
            // system: ['Segoe UI', ...defaultTheme.fontFamily],
         },
         colors: {
            // primary colors
            'dark-blue': {
               DEFAULT: '#001F6A',
               50: '#2363FF',
               100: '#0E55FF',
               200: '#0043E4',
               300: '#0037BC',
               400: '#002B93',
               500: '#001F6A',
               600: '#000F32',
               700: '#000000',
               800: '#000000',
               900: '#000000',
               950: '#000000',
            },
            'light-blue': {
               DEFAULT: '#4680BE',
               50: '#CEDDEE',
               100: '#BFD3E8',
               200: '#A1BEDE',
               300: '#82A9D3',
               400: '#6495C9',
               500: '#4680BE',
               600: '#356497',
               700: '#26496D',
               800: '#182D44',
               900: '#09121A',
               950: '#020406',
            },
            'light-green': {
               DEFAULT: '#56C0B0',
               50: '#DCF2EF',
               100: '#CDECE8',
               200: '#AFE1DA',
               300: '#91D6CC',
               400: '#74CBBE',
               500: '#56C0B0',
               600: '#3CA292',
               700: '#2D796D',
               800: '#1E5048',
               900: '#0F2723',
               950: '#071311',
            },
            // secondary colors
            'dark-green': {
               DEFAULT: '#427A77',
               50: '#A5CECC',
               100: '#98C7C5',
               200: '#7DB9B6',
               300: '#63ABA7',
               400: '#509491',
               500: '#427A77',
               600: '#2E5653',
               700: '#1B3130',
               800: '#070D0C',
               900: '#000000',
               950: '#000000',
            },

            'dark-pink': {
               DEFAULT: '#936896',
               50: '#E1D4E1',
               100: '#D8C8D9',
               200: '#C7B0C8',
               300: '#B698B8',
               400: '#A480A7',
               500: '#936896',
               600: '#735175',
               700: '#523A54',
               800: '#322333',
               900: '#110C11',
               950: '#010101',
            },
            // old
            // accent: {
            //    DEFAULT: '#8BC400',
            //    50: '#D9FF7D',
            //    100: '#D3FF68',
            //    200: '#C7FF3F',
            //    300: '#BBFF17',
            //    400: '#A8ED00',
            //    500: '#8BC400',
            //    600: '#638C00',
            //    700: '#3B5400',
            //    800: '#141C00',
            //    900: '#000000',
            //    950: '#000000',
            // },
         },
         backgroundImage: {
            bubble: "url('/images/bubble.svg')",
            sunburst: "url('/images/sunburst.svg')",
            'lines-top': "url('/images/top_left.png')",
            'lines-bottom': "url('/images/bottom_right.png')",
         },
      },
   },
   variants: {
      float: ['responsive', 'direction'],
      margin: ['responsive', 'direction'],
      padding: ['responsive', 'direction'],
      inset: ['responsive', 'direction'],
      fontFamily: ['direction'],
      backgroundColor: ['responsive', 'direction', 'hover', 'focus', 'disabled', 'dark'],
      display: ['responsive', 'dark'],
      textColor: ['responsive', 'direction', 'hover', 'focus', 'disabled', 'dark'],
      placeholderColor: ['focus', 'dark'],
      borderColor: ['responsive', 'direction', 'hover', 'focus', 'disabled', 'dark'],
      textAlign: ['responsive', 'direction'],
      justifyContent: ['responsive', 'direction'],
      opacity: ['responsive', 'hover', 'focus', 'disabled'],
      cursor: ['responsive', 'disabled'],
      rotate: ['responsive', 'hover', 'focus', 'direction'],
      space: ['responsive', 'direction'],
      borderWidth: ['responsive', 'direction'],
      borderRadius: ['responsive', 'direction'],
      backgroundPosition: ['responsive', 'direction'],
      letterSpacing: ['responsive', 'direction'],
      boxShadow: ['focus'],
      order: ['direction'],
      divideColor: ['dark'],
   },
   plugins: [
      require('@tailwindcss/forms'),
      require('@tailwindcss/typography'),
      require('tailwind-bootstrap-grid')({
         rtl: true,
         // containerMaxWidths: { sm: '540px', md: '720px', lg: '960px', xl: '1140px' },
      }),

      plugin(function ({ addUtilities, variants }) {
         const newUtilities = {
            '.flip-x': {
               '--transform-scale-x': '-1',
            },
            '.flip-y': {
               '--transform-scale-y': '-1',
            },
         };
         addUtilities(newUtilities, variants('flip'));
      }),

      plugin(function ({ addVariant }) {
         addVariant('hocus', ['&:hover', '&:focus']);
      }),
   ],
};
