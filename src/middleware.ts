import createNextIntlMiddleware from 'next-intl/middleware';

import { routing } from '@/i18n/routing';
import { compose } from '@/middleware/compose';

const withNextIntl = createNextIntlMiddleware(routing);

const middleware = compose(withNextIntl);

export const config = {
    matcher: '/((?!api|_next/static|_next/image|static|favicon.ico|robots.txt|sitemap.xml).*)'
};

export default middleware;
