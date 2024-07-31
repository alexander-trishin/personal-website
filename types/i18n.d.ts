declare namespace I18n {
    type DefaultLocale = typeof import('@/i18n/config').defaultLocale;
    type Locales = typeof import('@/i18n/config').locales;
    type Messages = typeof import('@/i18n/locales/ru.json');
}

interface IntlMessages extends I18n.Messages {}

type DefaultLocale = I18n.DefaultLocale;
type Locales = I18n.Locales;
type Locale = Locales[number];
