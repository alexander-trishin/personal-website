/* eslint-disable */
/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */

const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

delete colors.lightBlue;

module.exports = {
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
            minHeight: {
                lg: '700px'
            }
        },
        screens: {
            xs: '360px',
            ...defaultTheme.screens
        }
    },
    variants: {
        extend: {}
    },
    plugins: []
};
