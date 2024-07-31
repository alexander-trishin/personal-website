import type { MetadataRoute } from 'next';

import { routing } from '@/i18n/routing';

const createLocalizedUrl = (relativePath: string): Pick<MetadataRoute.Sitemap[number], 'url' | 'alternates'> => {
    const createUrl = (locale?: Locale) => {
        const baseUrl = process.env.BASE_URL;

        if (!locale) return `${baseUrl}${relativePath}`;

        const { defaultLocale, localePrefix } = routing;
        const localePath = localePrefix === 'as-needed' && locale === defaultLocale ? '' : `/${locale}`;

        return `${baseUrl}${localePath}${relativePath}`;
    };

    return {
        url: createUrl(),
        alternates: {
            languages: routing.locales.reduce<Partial<Record<Locale, string>>>(
                (result, locale) => ({ ...result, [locale]: createUrl(locale) }),
                {}
            )
        }
    };
};

const sitemap = (): MetadataRoute.Sitemap => {
    return [
        {
            ...createLocalizedUrl(''),
            lastModified: new Date()
        }
    ];
};

export default sitemap;
