import { createTheme } from '@mantine/core';

import { black, colors, primaryColor, primaryShade, white } from './colors';

const theme = createTheme({
    black,
    white,

    colors,

    primaryColor,
    primaryShade,

    headings: {
        fontWeight: '700'
    },

    defaultRadius: 'sm'
});

export { theme };
