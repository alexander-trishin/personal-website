import type { MetadataRoute } from 'next';

import { nextIntlConfig } from '@/i18n/next-intl-config';

const createUrl = (relativePath: string, locale?: Locale) => {
    const baseUrl = process.env.BASE_URL;

    if (!locale) return `${baseUrl}${relativePath}`;

    const { defaultLocale, localePrefix } = nextIntlConfig;

    const localePath =
        localePrefix === 'never' || (localePrefix === 'as-needed' && locale === defaultLocale) ? '' : `/${locale}`;

    return `${baseUrl}${localePath}${relativePath}`;
};

const createLocalizedUrl = (relativePath: string): Pick<MetadataRoute.Sitemap[number], 'url' | 'alternates'> => {
    return {
        url: createUrl(relativePath),
        alternates: {
            languages: (nextIntlConfig.locales as Locales).reduce(
                (result, current) => {
                    result[current] = createUrl(relativePath, current);

                    return result;
                },
                {} as Record<Locale, string>
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
