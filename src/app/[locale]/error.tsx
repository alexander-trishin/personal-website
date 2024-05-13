'use client';

import { Button } from '@mantine/core';
import { useTranslations } from 'next-intl';

import type { AppPageProps } from '@/app/types';
import { InternalServerErrorImage } from '@/assets/svg/images/internal-server-error-image';
import { ErrorShell, ErrorShellImage, ErrorShellText, ErrorShellTitle } from '@/components/error-shell';

interface ErrorPageProps extends AppPageProps {
    error: Error & { digest?: string };
    reset: () => void;
}

const ErrorPage = (props: ErrorPageProps) => {
    const { reset } = props;

    const t = useTranslations('pages.error');

    return (
        <ErrorShell>
            <ErrorShellImage>
                <InternalServerErrorImage />
            </ErrorShellImage>
            <ErrorShellTitle>{t('heading')}</ErrorShellTitle>
            <ErrorShellText>{t('description')}</ErrorShellText>
            <Button onClick={() => reset()} size="md">
                {t('refresh')}
            </Button>
        </ErrorShell>
    );
};

export default ErrorPage;
