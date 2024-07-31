import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import type { AppLayoutProps } from '@/app/types';

const generateOtherMetadata = (): Metadata['other'] => {
    const other: Metadata['other'] = {
        ['google-site-verification']: process.env.GOOGLE_SITE_VERIFICATION
    };

    Object.keys(other).forEach(key => (other[key] === undefined ? delete other[key] : {}));

    if (Object.keys(other).length === 0) return;

    return other;
};

const generateMetadata = async (props: AppLayoutProps): Promise<Metadata> => {
    const {
        params: { locale }
    } = props;

    const t = await getTranslations({ locale, namespace: 'metadata' });

    const other: Metadata['other'] = {
        ['google-site-verification']: process.env.GOOGLE_SITE_VERIFICATION
    };

    Object.keys(other).forEach(key => (other[key] === undefined ? delete other[key] : {}));

    return {
        title: t('author'),
        description: t('description'),
        icons: {
            icon: [
                { url: '/static/android-chrome-192x192.png', type: 'image/png', sizes: '192x192' },
                { url: '/static/android-chrome-512x512.png', type: 'image/png', sizes: '512x512' },
                { url: '/static/favicon-16x16.png', type: 'image/png', sizes: '16x16' },
                { url: '/static/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
                { url: '/favicon.ico', type: 'image/x-icon', sizes: '48x48' }
            ],
            apple: { url: '/static/apple-touch-icon.png', type: 'image/png', sizes: '180x180' }
        },
        other: generateOtherMetadata()
    };
};

export { generateMetadata };
