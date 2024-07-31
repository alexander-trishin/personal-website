import type { MantineThemeOverride } from '@mantine/core';

const colors = {
    violet: [
        '#f6eeff',
        '#e7daf7',
        '#cab1ea',
        '#ad86dd',
        '#9562d2',
        '#854bcb',
        '#7d3ec9',
        '#6b31b2',
        '#5f2aa0',
        '#52228d'
    ]
} satisfies MantineThemeOverride['colors'];

const primaryColor = 'violet' satisfies keyof typeof colors;

const primaryShade = {
    light: 6,
    dark: 5
} satisfies MantineThemeOverride['primaryShade'];

const black = '#2e2e2e';
const white = '#ffffff';

export { black, colors, primaryColor, primaryShade, white };
