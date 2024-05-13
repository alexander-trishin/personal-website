import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, unstable_setRequestLocale } from 'next-intl/server';

import type { AppLayoutProps } from '@/app/types';
import { theme } from '@/theme';

import '@mantine/core/styles.css';

export { generateMetadata } from './layout-metadata';
export { generateStaticParams } from './layout-params';
export { viewport } from './layout-viewport';

const RootLayout = async (props: AppLayoutProps) => {
    const {
        children,
        params: { locale }
    } = props;

    unstable_setRequestLocale(locale);

    const messages = await getMessages();

    return (
        <html lang={locale} dir="ltr" data-mantine-color-scheme="light">
            <head>
                <ColorSchemeScript defaultColorScheme="auto" />
            </head>
            <body>
                <NextIntlClientProvider messages={messages}>
                    <MantineProvider theme={theme} defaultColorScheme="auto">
                        {children}
                    </MantineProvider>
                </NextIntlClientProvider>
            </body>
        </html>
    );
};

export default RootLayout;
