/* eslint-disable import/no-extraneous-dependencies */
/* Tailwind Configuration Docs: https://tailwindcss.com/docs/configuration */
const formsPlugin = require('@tailwindcss/forms');
const prosePlugin = require('@tailwindcss/typography');
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    './templates/**/*.liquid',
    './layout/**/*.liquid',
    './sections/**/*.liquid',
    './snippets/**/*.liquid',
    './scripts/**/*.{vue,js}',
  ],
  safelist: [
    {
      pattern: /icon-(facebook|twitter|instagram|youtube|pinterest)/,
    },
  ],
  theme: {
    fontFamily: {
      sans: ['Basetica Pro', 'sans-serif'],
      serif: ['Acta', 'serif'],
    },
    screens: {
      xs: '480px',
      sm: '768px',
      md: '960px',
      lg: '1200px',
      xl: '1440px',
      '2xl': '1680px',
      hd: '1920px',
      'max-hd': { max: '1919px' },
      'max-2xl': { max: '1679px' },
      'max-xl': { max: '1439px' },
      'max-lg': { max: '1199px' },
      'max-md': { max: '959px' },
      'max-sm': { max: '767px' },
      'max-xs': { max: '479px' },
    },
    extend: {
      animation: {
        shimmer: 'shimmer 3s infinite',
        'loop-text': 'loop-text infinite linear',
      },
      aria: {
        popup: 'haspopup="true"',
        expands: 'expanded',
      },
      keyframes: {
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        'loop-text': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      colors: {
        transparent: 'transparent',
        inherit: 'inherit',
        'current-color': 'currentColor',

        /**
         * Backgrounds
         *
         * For all main page backgrounds and sections.
         * Should not be used for elements.
         */
        background: {
          DEFAULT: 'var(--color-background-default)',
          primary: 'var(--color-background-primary)',
          secondary: 'var(--color-background-secondary)',
          'dark-primary': 'var(--color-background-dark-primary)',
          'dark-secondary': 'var(--color-background-dark-secondary)',
          accent: 'var(--color-background-accent)',
        },

        /**
         * Text
         *
         * For text and icons, makes this easier to change
         * by separating from background.
         */
        text: {
          DEFAULT: 'var(--color-text-default)',
          primary: 'var(--color-text-primary)',
          secondary: 'var(--color-text-secondary)',
          tertiary: 'var(--color-text-tertiary)',
          'inverse-primary': 'var(--color-text-inverse-primary)',
          'inverse-tertiary': 'var(--color-text-inverse-tertiary)',
        },

        /**
         * Surfaces
         *
         * For elements like buttons and cards, flexible
         * token to use for non-text or main background
         * elements to make changes quickly.
         */
        surface: {
          DEFAULT: 'var(--color-surface-default)',
          primary: 'var(--color-surface-primary)',
          secondary: 'var(--color-surface-secondary)',
          inverse: 'var(--color-surface-inverse)',
          hover: 'var(--color-surface-hover)',
          disabled: 'var(--color-surface-disabled)',
        },

        /**
         * Scrims
         *
         * Overlay backgrounds.
         */
        scrim: {
          DEFAULT: 'var(--color-scrim-default)',
          'dark-xlight': 'var(--color-scrim-dark-xlight)',
          'dark-light': 'var(--color-scrim-dark-light)',
          'dark-strong': 'var(--color-scrim-dark-strong)',
          'light-medium': 'var(--color-scrim-light-medium)',
          'light-strong': 'var(--color-scrim-light-strong)',
        },

        /**
         * Strokes
         *
         * For stroked elements
         */
        stroke: {
          DEFAULT: 'var(--color-stroke-default)',
          primary: 'var(--color-stroke-primary)',
          'primary-subtle': 'var(--color-stroke-primary-subtle)',
          inverse: 'var(--color-stroke-inverse)',
          'inverse-subtle': 'var(--color-stroke-inverse-subtle)',
          accent: 'var(--color-stroke-accent)',
        },

        /**
         * Accents
         *
         * Meaningful colors to add interest to a part of a page.
         */
        accent: {
          DEFAULT: 'var(--color-accent-default)',
          primary: 'var(--color-accent-primary)',
          medium: 'var(--color-accent-medium)',
          light: 'var(--color-accent-light)',
          xlight: 'var(--color-accent-xlight)',
          '2xlight': 'var(--color-accent-2xlight)',
        },

        /**
         * Functional
         */
        functional: {
          sale: 'var(--color-functional-sale)',
          error: 'var(--color-functional-error)',
          success: 'var(--color-functional-success)',
        },
      },
      fontSize: {
        display: 'var(--font-size-display-md)',
        'display-xl': 'var(--font-size-display-xl)',
        'display-lg': 'var(--font-size-display-lg)',
        'display-md': 'var(--font-size-display-md)',
        'display-sm': 'var(--font-size-display-sm)',

        heading: 'var(--font-size-heading-md)',
        'heading-lg': 'var(--font-size-heading-lg)',
        'heading-md': 'var(--font-size-heading-md)',
        'heading-sm': 'var(--font-size-heading-sm)',

        body: 'var(--font-size-body-md)',
        'body-lg': 'var(--font-size-body-lg)',
        'body-md': 'var(--font-size-body-md)',
        'body-sm': 'var(--font-size-body-sm)',
        'body-xs': 'var(--font-size-body-xs)',

        responsive: 'clamp(var(--font-size-display-md), 10vw, var(--font-size-display-xl))',
        'responsive-sm': 'clamp(var(--font-size-body-lg), 2.5vw, var(--font-size-heading-lg))',
      },
      spacing: {
        0: '0px',
        '2xs': 'var(--spacing-2xs)',
        xs: 'var(--spacing-xs)',
        sm: 'var(--spacing-sm)',
        md: 'var(--spacing-md)',
        lg: 'var(--spacing-lg)',
        xl: 'var(--spacing-xl)',
        '2xl': 'var(--spacing-2xl)',
        '3xl': 'var(--spacing-3xl)',
        '4xl': 'var(--spacing-4xl)',
      },
      width: {
        icon: 'var(--icon-size)',
      },
      maxWidth: {
        content: '610px',
      },
      height: {
        icon: 'var(--icon-size)',
      },
      backgroundImage: {
        menu: 'var(--menu)',
        cart: 'var(--cart)',
        account: 'var(--account)',
        search: 'var(--search)',
        'primary-wordmark-logo': 'var(--primary-wordmark-logo)',
        plus: 'var(--plus)',
        minus: 'var(--minus)',
        filters: 'var(--filters)',
        'right-arrow': 'var(--right-arrow)',
        facebook: 'var(--facebook)',
        twitter: 'var(--twitter)',
        instagram: 'var(--instagram)',
        youtube: 'var(--youtube)',
        pinterest: 'var(--pinterest)',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.text.primary'),
            fontSize: theme('fontSize.body'),
            fontFamily: theme('fontFamily.sans').join(', '),
            lineHeight: 1.3,
            h1: {
              fontSize: theme('fontSize.heading-lg'),
            },
            h2: {
              fontSize: theme('fontSize.heading-md'),
            },
            h3: {
              fontSize: theme('fontSize.heading-sm'),
            },
            h4: {
              fontSize: theme('fontSize.body-lg'),
            },
            a: {
              color: theme('colors.text.secondary'),
              textUnderlineOffset: '0.25em',
              textDecorationColor: theme('colors.stroke.primary-subtle'),
              transition: 'color 0.3s ease-in-out, text-decoration-color 0.2s ease-in-out',
              '&:hover': {
                color: theme('colors.text'),
                textDecorationColor: theme('colors.stroke.primary'),
              },
            },
          },
        },
      }),
      aspectRatio: {
        '16/9': '16 / 9',
        '4/3': '4 / 3',
        '3/4': '3 / 4',
      },
    },
  },
  plugins: [
    formsPlugin,
    prosePlugin,
    plugin(({ addVariant }) => {
      addVariant('hocus', ['&:hover', '&:focus']);
      addVariant('group-hocus', [':merge(.group):hover &', ':merge(.group):focus &']);
      addVariant('peer-hocus', [':merge(.peer):hover ~ &', ':merge(.peer):focus ~ &']);
      addVariant('nojs', 'html.js-noscript &');
    }),
    plugin(({ addUtilities, theme, e }) => {
      const values = theme('backgroundImage');
      const utilities = Object.entries(values).map(([key, value]) => ({
        [`.${e(`icon-${key}`)}`]: {
          'mask-image': `${value}`,
          'mask-position': 'center',
          'mask-repeat': 'no-repeat',
          'mask-size': 'contain',
        },
      }));
      addUtilities(utilities);
    }),
  ],
};