/* eslint-disable */
/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */

const flattenColorPalette = require('tailwindcss/lib/util/flattenColorPalette').default;

const colors = require('tailwindcss/colors');
const plugin = require('tailwindcss/plugin');

const fontFluidMinViewport = 400;
const fontFluidMaxViewport = 1000;

const fontClamp = (
    minFontSizeInPx,
    maxFontSizeInPx,
    minViewportInPx = fontFluidMinViewport,
    maxViewportInPx = fontFluidMaxViewport
) => {
    const baseFontSizeInPx = 16;
    const minFontSizeInRem = minFontSizeInPx / baseFontSizeInPx;

    const fontDifferenceInPx = `${maxFontSizeInPx} - ${minFontSizeInPx}`;
    const viewportDifferenceInPx = `${maxViewportInPx} - ${minViewportInPx}`;

    const calc = `${minFontSizeInRem}rem + (${fontDifferenceInPx}) * ((100vw - ${minViewportInPx}px) / (${viewportDifferenceInPx}))`;

    return `clamp(${minFontSizeInPx}px, calc(${calc}), ${maxFontSizeInPx}px)`;
};

module.exports = {
    content: ['./source/**/*.tsx', './public/index.html'],
    theme: {
        container: {
            padding: {
                DEFAULT: '2rem',
                lg: '4rem',
                xl: '5rem',
                '2xl': '6rem'
            }
        },
        extend: {
            borderWidth: {
                3: '3px'
            },
            colors: {
                current: 'currentColor',
                transparent: 'transparent',
                primary: '#9C84EE',
                green: colors.emerald,
                yellow: colors.amber,
                purple: colors.violet
            },
            fontFamily: {
                poppins: ['Poppins', 'sans-serif']
            },
            fontSize: {
                button: ['0.75rem', { letterSpacing: '2px' }],
                'xl-fluid': [fontClamp(14, 16), { lineHeight: 1.845 }],
                '2xl-fluid': [fontClamp(16, 20), { lineHeight: 1.715 }],
                '3xl-fluid': [fontClamp(17, 24), { lineHeight: 1.765 }],
                '4xl-fluid': [fontClamp(18, 30), { lineHeight: 1.5 }],
                '5xl-fluid': [fontClamp(20, 36), { lineHeight: 1.25 }],
                '6xl-fluid': [fontClamp(24, 48), { lineHeight: 1.355 }],
                '9xl-fluid': [fontClamp(42, 84), { lineHeight: 1.075, letterSpacing: '-1px' }]
            },
            minHeight: {
                '0vw': '0vw' /* Safari resize fix */,
                lg: '720px'
            },
            scale: {
                80: '.8'
            },
            zIndex: Object.fromEntries([60, 70, 80, 90, 100].map(value => [value, value]))
        }
    },
    plugins: [
        plugin(function ({ addUtilities, theme, variants }) {
            let colors = flattenColorPalette(theme('borderColor'));
            delete colors['default'];

            if (this.theme?.extend?.colors !== undefined) {
                colors = Object.assign(colors, this.theme.extend.colors);
            }

            const colorMap = Object.keys(colors).map(color => ({
                [`.border-t-${color}`]: { borderTopColor: colors[color] },
                [`.border-r-${color}`]: { borderRightColor: colors[color] },
                [`.border-b-${color}`]: { borderBottomColor: colors[color] },
                [`.border-l-${color}`]: { borderLeftColor: colors[color] }
            }));
            const utilities = Object.assign({}, ...colorMap);

            addUtilities(utilities, variants('borderColor'));
        })
    ]
};
