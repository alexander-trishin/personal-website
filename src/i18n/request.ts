import { getRequestConfig } from 'next-intl/server';

import { defaultLocale, locales } from './config';

const requestConfig = getRequestConfig(async ({ requestLocale }) => {
    let locale = (await requestLocale) as Locale;

    if (!locale || !locales.includes(locale)) {
        locale = defaultLocale;
    }

    return {
        locale,
        messages: (await import(`./locales/${locale}.json`)).default
    };
});

export default requestConfig;
