import React, { type ReactNode } from 'react';

import { MantineProvider } from '@mantine/core';

import { theme } from '../../../src/theme';

interface ThemeProviderProps {
    children?: ReactNode;
}

const ThemeProvider = (props: ThemeProviderProps) => {
    const { children } = props;

    return <MantineProvider theme={theme}>{children}</MantineProvider>;
};

export { ThemeProvider };
