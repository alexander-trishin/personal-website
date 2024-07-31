import { useEffect, useState } from 'react';
import type { AbstractIntlMessages } from 'next-intl';

const cache: Partial<Record<string, AbstractIntlMessages>> = {};

const getMessages = async (locale: string) => {
    const messages = (await import(`../../../src/i18n/locales/${locale}.json`)).default;

    return (cache[locale] ??= messages) as AbstractIntlMessages;
};

const useMessages = (locale: string): AbstractIntlMessages | undefined => {
    const [messages, setMessages] = useState<AbstractIntlMessages>();

    useEffect(() => {
        let canceled = false;

        const fetchMessages = async () => {
            if (!locale) return;

            const newMessages = await getMessages(locale);

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
