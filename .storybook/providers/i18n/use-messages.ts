import { useEffect, useState } from 'react';
import type { AbstractIntlMessages } from 'next-intl';

const cache: Partial<Record<string, AbstractIntlMessages>> = {};

const getTranslations = async (locale: string) => {
    const translations = (await import(`../../../src/i18n/translations/${locale}.json`)).default;

    return (cache[locale] ??= translations) as AbstractIntlMessages;
};

const useMessages = (locale: string): AbstractIntlMessages | undefined => {
    const [messages, setMessages] = useState<AbstractIntlMessages>();

    useEffect(() => {
        let canceled = false;

        const fetchMessages = async () => {
            if (!locale) return;

            const newMessages = await getTranslations(locale);

            !canceled && setMessages(newMessages);
        };

        fetchMessages();

        return () => {
            canceled = true;
        };
    }, [locale]);

    return messages;
};

export { useMessages };
