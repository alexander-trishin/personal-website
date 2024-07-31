import { Center, Group, Stack, Title } from '@mantine/core';
import { getTranslations } from 'next-intl/server';

import type { AppPageProps } from '@/app/types';
import { ColorSchemeToggle } from '@/components/color-scheme-toggle';
import { LocaleSelect } from '@/components/locale-select';

const HomePage = async (props: AppPageProps) => {
    const {
        params: { locale }
    } = props;

    const t = await getTranslations({ locale, namespace: 'pages.home' });

    return (
        <Center component="main" h="100vh">
            <Stack align="center">
                <Title order={1}>{t('welcome')}</Title>
                <Group gap={4}>
                    <LocaleSelect />
                    <ColorSchemeToggle />
                </Group>
            </Stack>
        </Center>
    );
};

export default HomePage;
