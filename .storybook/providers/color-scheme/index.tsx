import React, { type ReactNode, useEffect } from 'react';

import { addons } from '@storybook/preview-api';
import { DARK_MODE_EVENT_NAME } from 'storybook-dark-mode';
import { useMantineColorScheme } from '@mantine/core';

const channel = addons.getChannel();

interface ColorSchemeProviderProps {
    children?: ReactNode;
}

const ColorSchemeProvider = (props: ColorSchemeProviderProps) => {
    const { children } = props;

    const { setColorScheme } = useMantineColorScheme();
    const toggleColorScheme = (isDarkMode: boolean) => setColorScheme(isDarkMode ? 'dark' : 'light');

    useEffect(() => {
        channel.on(DARK_MODE_EVENT_NAME, toggleColorScheme);

        return () => {
            channel.off(DARK_MODE_EVENT_NAME, toggleColorScheme);
        };
    }, [channel]);

    return <>{children}</>;
};

export { ColorSchemeProvider };
