import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

import type { AppLayoutProps } from '@/app/types';
import { locales } from '@/i18n/config';
import { theme } from '@/theme';

import '@mantine/core/styles.css';

export { generateMetadata, generateStaticParams, viewport } from './_components/layout';

const RootLayout = async (props: AppLayoutProps) => {
    const {
        children,
        params: { locale }
    } = props;

    if (!locales.includes(locale)) {
        notFound();
    }

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
