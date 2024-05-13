const locales = ['ru', 'en'] as const;
const defaultLocale = 'ru' as const satisfies (typeof locales)[number];

export { defaultLocale, locales };
