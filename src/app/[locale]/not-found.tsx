import { getLocale, getTranslations } from 'next-intl/server';

import { NotFoundImage } from '@/assets/svg/images/not-found-image';
import { LinkButton } from '@/components/link-button';

import { ErrorShell, ErrorShellImage, ErrorShellText, ErrorShellTitle } from './_components/error-shell';

const NotFoundPage = async () => {
    const locale = await getLocale();

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
