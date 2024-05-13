import type { ComponentType } from 'react';

import { FlagRu } from '@/assets/svg/icons/flag-ru';
import { FlagUs } from '@/assets/svg/icons/flag-us';

const countryFlags = {
    en: FlagUs,
    ru: FlagRu
} satisfies Record<Locale, ComponentType>;

export { countryFlags };
