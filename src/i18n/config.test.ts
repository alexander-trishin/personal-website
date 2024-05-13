import { defaultLocale, locales } from './config';

describe('i18n > config', () => {
    it('should define locales', () => {
        expect(locales.length).toBeGreaterThan(0);
    });

    it('should define default locale', () => {
        expect(defaultLocale).toBeDefined();
    });

    it('should have default locale in locales', () => {
        expect(locales).toContain(defaultLocale);
    });
});
