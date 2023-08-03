/** @type {import('tailwindcss').Config} */

// radix-ui.com/colors
/**
| Step | Use Case                                |
| ---- | --------------------------------------- |
| 100  | App background                          |
| 200  | Subtle background                       |
| 300  | UI element background                   |
| 400  | Hovered UI element background           |
| 500  | Active / Selected UI element background |
| 600  | Subtle borders and separators           |
| 700  | UI element border and focus rings       |
| 800  | Hovered UI element border               |
| 900  | Solid backgrounds                       |
| 1000 | Hovered solid backgrounds               |
| 1100 | Low-contrast text                       |
| 1200 | High-contrast text                      |
*/

module.exports = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        indigo: {
          100: '#131620',
          200: '#15192d',
          400: '#192140',
          400: '#1c274f',
          500: '#1f2c5c',
          600: '#22346e',
          700: '#273e89',
          800: '#2f4eb2',
          900: '#3e63dd',
          1000: '#5373e7',
          1100: '#849dff',
          1200: '#eef1fd',
        },
        orange: {
          100: '#1f1206',
          200: '#2b1400',
          300: '#391a03',
          400: '#441f04',
          500: '#4f2305',
          600: '#5f2a06',
          700: '#763205',
          800: '#943e00',
          900: '#f76808',
          1000: '#ff802b',
          1100: '#ff8b3e',
          1200: '#feeadd',
        },
        red: {
          100: '#1f1315',
          200: '#291415',
          300: '#3c181a',
          400: '#481a1d',
          500: '#541b1f',
          600: '#671e22',
          700: '#822025',
          800: '#aa2429',
          900: '#e5484d',
          1000: '#f2555a',
          1100: '#ff6369',
          1200: '#feecee',
        },
        gray: {
          100: '#151718',
          200: '#1a1d1e',
          300: '#202425',
          400: '#26292b',
          500: '#2b2f31',
          600: '#313538',
          700: '#3a3f42',
          800: '#4c5155',
          900: '#697177',
          1000: '#787f85',
          1100: '#9ba1a6',
          1200: '#ecedee',
        },
        green: {
          100: '#0d1912',
          200: '#0f1e13',
          300: '#132819',
          400: '#16301d',
          500: '#193921',
          600: '#1d4427',
          700: '#245530',
          800: '#2f6e3b',
          900: '#46a758',
          1000: '#55b467',
          1100: '#63c174',
          1200: '#e5fbeb',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
};
