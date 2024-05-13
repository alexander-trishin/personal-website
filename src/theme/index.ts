import { createTheme } from '@mantine/core';

import { black, colors, white } from './colors';

const theme = createTheme({
    colors,

    primaryColor: 'violet',
    primaryShade: {
        light: 6,
        dark: 5
    },

    headings: {
        fontWeight: '700'
    },

    defaultRadius: 'sm',

    black,
    white
});

export { theme };
