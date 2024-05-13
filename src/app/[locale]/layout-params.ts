import type { AppParams } from '@/app/types';
import { locales } from '@/i18n/config';

const generateStaticParams = (): AppParams[] => {
    return locales.map(locale => ({ locale }));
};

export { generateStaticParams };
