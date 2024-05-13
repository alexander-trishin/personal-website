import createNextIntlMiddleware from 'next-intl/middleware';

import { nextIntlConfig } from '@/i18n/next-intl-config';
import { compose } from '@/middleware/compose';

const withNextIntl = createNextIntlMiddleware(nextIntlConfig);

const middleware = compose(withNextIntl);

export const config = {
    matcher: '/((?!api|_next/static|_next/image|static|favicon.ico|robots.txt|sitemap.xml).*)'
};

export default middleware;
