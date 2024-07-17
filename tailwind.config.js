/* eslint-disable import/no-extraneous-dependencies */
/* Tailwind Configuration Docs: https://tailwindcss.com/docs/configuration */
const formsPlugin = require('@tailwindcss/forms');
const prosePlugin = require('@tailwindcss/typography');

module.exports = {
  content: [
    './**/*.{vue,js,liquid}',
  ],
  theme: {
    extend: {
      colors: {
        'lapisLazuli': '#2660A4',
        'azure': '#EDF7F6',
        'sandyBrown': '#F19953',
        'copper': '#C47335',
        'cafeNoir': '#56351E'
      }
    }
  },
  plugins: [
    formsPlugin,
    prosePlugin,
  ],
};