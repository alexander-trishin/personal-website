'use client';

import type { ComponentPropsWithoutRef } from 'react';
import { ActionIcon, Menu, MenuDropdown, MenuItem, MenuTarget, Tooltip } from '@mantine/core';
import { useLocale, useTranslations } from 'next-intl';

import { usePathname } from '@/router';

import { countryFlags } from './country-flags';
import { MenuLink } from './menu-link';

interface LocaleSelectProps
    extends Omit<ComponentPropsWithoutRef<typeof ActionIcon<'button'>>, 'title' | 'variant'>,
        Omit<ComponentPropsWithoutRef<'button'>, keyof ComponentPropsWithoutRef<typeof ActionIcon<'button'>>> {}

const LocaleSelect = (props: LocaleSelectProps) => {
    const t = useTranslations('components.locale-select');

    const locale = useLocale();
    const pathname = usePathname();

    const CurrentCountryFlag = countryFlags[locale as Locale];

    const options = Object.entries(countryFlags).map(([key, CountryFlag]) => (
        <MenuItem
            key={key}
            component={MenuLink}
            href={pathname}
            locale={key as Locale}
            aria-label={t(key as Locale)}
            px={4}
        >
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
