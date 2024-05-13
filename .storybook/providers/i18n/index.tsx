import React, { useEffect, useState, type ReactNode } from 'react';

import { addons } from '@storybook/preview-api';
import { NextIntlClientProvider } from 'next-intl';

import { useMessages } from './use-messages';

const LOCALE_CHANGE_EVENT_NAME = 'LOCALE_CHANGED';

const channel = addons.getChannel();

interface I18nProviderProps {
    children?: ReactNode;
    defaultLocale: string;
}

const I18nProvider = (props: I18nProviderProps) => {
    const { children, defaultLocale } = props;

    const [locale, setLocale] = useState(defaultLocale);
    const messages = useMessages(locale);

    useEffect(() => {
        channel.on(LOCALE_CHANGE_EVENT_NAME, setLocale);

        return () => {
            channel.off(LOCALE_CHANGE_EVENT_NAME, setLocale);
        };
    }, [channel]);

    if (!messages) {
        return null;
    }

    return (
        <NextIntlClientProvider locale={locale} messages={messages}>
            {children}
        </NextIntlClientProvider>
    );
};

export { I18nProvider };
