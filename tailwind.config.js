/* eslint-disable import/no-extraneous-dependencies */
/* Tailwind Configuration Docs: https://tailwindcss.com/docs/configuration */
const formsPlugin = require('@tailwindcss/forms');
const prosePlugin = require('@tailwindcss/typography');

module.exports = {
  content: [
    './**/*.{vue,js,liquid}',
  ],
  theme: {
  },
  plugins: [
    formsPlugin,
    prosePlugin,
  ],
};