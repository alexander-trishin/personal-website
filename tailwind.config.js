/* eslint-disable */
/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */

const colors = require('tailwindcss/colors');

delete colors.lightBlue;

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
    mode: 'jit',
    purge: ['./source/**/*.tsx', './public/index.html'],
    darkMode: false,
    theme: {
        extend: {
            borderWidth: {
                3: '3px'
            },
            colors: {
                ...colors,
                current: 'currentColor',
                transparent: 'transparent',
                primary: '#9C84EE'
            },
            fontFamily: {
                lora: ['Lora', 'serif'],
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
            }
        }
    },
    plugins: []
};
