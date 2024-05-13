import type createNextIntlMiddleware from 'next-intl/middleware';

import { defaultLocale, locales } from './config';

const nextIntlConfig: Parameters<typeof createNextIntlMiddleware>[0] = {
    locales,
    defaultLocale,
    localeDetection: true,
    localePrefix: 'as-needed'
};

export { nextIntlConfig };
