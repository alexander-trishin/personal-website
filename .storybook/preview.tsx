import '@mantine/core/styles.css';

import React from 'react';
import type { Preview, Decorator } from '@storybook/react';

import { ColorSchemeProvider } from './providers/color-scheme';
import { I18nProvider } from './providers/i18n';
import { ThemeProvider } from './providers/theme';

import { defaultLocale, locales } from '../src/i18n/config';

const preview: Preview = {
    globals: {
        locale: defaultLocale,
        locales: locales.reduce((result, current) => {
            result[current] = current;

            return result;
        }, {})
    },
    parameters: {
        controls: { expanded: true },
        nextjs: {
            appDirectory: true
        }
    }
};

export default preview;

export const decorators: Decorator[] = [
    (renderStory, context) => <I18nProvider defaultLocale={context.globals.locale}>{renderStory()}</I18nProvider>,
    renderStory => <ColorSchemeProvider>{renderStory()}</ColorSchemeProvider>,
    renderStory => <ThemeProvider>{renderStory()}</ThemeProvider>
];
