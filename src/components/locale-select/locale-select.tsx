'use client';

import type { ComponentPropsWithoutRef } from 'react';
import { ActionIcon, Menu, MenuDropdown, MenuItem, MenuTarget, Tooltip } from '@mantine/core';
import { useLocale, useTranslations } from 'next-intl';

import { usePathname } from '@/router';

import { flags } from './flags';
import { LocaleLink } from './locale-link';

type LocaleSelectProps = Omit<ComponentPropsWithoutRef<typeof ActionIcon<'button'>>, 'title' | 'variant'> &
    Omit<ComponentPropsWithoutRef<'button'>, keyof ComponentPropsWithoutRef<typeof ActionIcon<'button'>>>;

const LocaleSelect = (props: LocaleSelectProps) => {
    const t = useTranslations('components.locale-select');

    const locale = useLocale();
    const pathname = usePathname();

    const CurrentCountryFlag = flags[locale];

    const options = (Object.entries(flags) as Entries<typeof flags>).map(([key, CountryFlag]) => (
        <MenuItem key={key} component={LocaleLink} href={pathname} locale={key} aria-label={t(key)} px={4}>
            <CountryFlag size={20} />
        </MenuItem>
    ));

    return (
        <Menu withArrow closeOnItemClick>
            <MenuTarget>
                <Tooltip label={t('change-locale')} withArrow openDelay={200}>
                    <ActionIcon {...props} variant="default">
                        <CurrentCountryFlag size={18} />
                    </ActionIcon>
                </Tooltip>
            </MenuTarget>
            <MenuDropdown>{options}</MenuDropdown>
        </Menu>
    );
};

export { LocaleSelect };
