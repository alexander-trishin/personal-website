import { defineRouting } from 'next-intl/routing';

import { defaultLocale, locales } from './config';

const routing = defineRouting({
    locales,
    defaultLocale,
    localeDetection: true,
    localePrefix: 'as-needed'
});

export { routing };
