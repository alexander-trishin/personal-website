import { getLocale, getTranslations, unstable_setRequestLocale } from 'next-intl/server';

import { NotFoundImage } from '@/assets/svg/images/not-found-image';
import { ErrorShell, ErrorShellImage, ErrorShellText, ErrorShellTitle } from '@/components/error-shell';
import { LinkButton } from '@/components/link-button';

const NotFoundPage = async () => {
    const locale = await getLocale();

    unstable_setRequestLocale(locale);

    const t = await getTranslations({ locale, namespace: 'pages.not-found' });

    return (
        <ErrorShell>
            <ErrorShellImage>
                <NotFoundImage />
            </ErrorShellImage>
            <ErrorShellTitle>{t('heading')}</ErrorShellTitle>
            <ErrorShellText>{t('description')}</ErrorShellText>
            <LinkButton href="/" size="md">
                {t('go-home')}
            </LinkButton>
        </ErrorShell>
    );
};

export default NotFoundPage;
