import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

import { locales } from './config';

const requestConfig = getRequestConfig(async ({ locale }) => {
    if (!locales.includes(locale as Locale)) notFound();

    return {
        messages: (await import(`./translations/${locale}.json`)).default
    };
});

export default requestConfig;
