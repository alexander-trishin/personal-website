/* eslint-disable */
/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */

const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');
const plugin = require('tailwindcss/plugin');

delete colors.lightBlue;

module.exports = {
    purge: ['./source/**/*.tsx', './public/index.html'],
    darkMode: false,
    theme: {
        extend: {
            colors: {
                ...colors,
                current: 'currentColor',
                transparent: 'transparent'
            },
            fontFamily: {
                lora: ['Lora', 'serif'],
                poppins: ['Poppins', 'sans-serif']
            }
        },
        screens: {
            xs: '300px',
            ...defaultTheme.screens
        }
    },
    variants: {
        extend: {}
    },
    plugins: []
};
