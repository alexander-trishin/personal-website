'use client';

import type { ComponentPropsWithoutRef, MouseEventHandler } from 'react';
import {
    ActionIcon,
    type ActionIconProps,
    Tooltip,
    useComputedColorScheme,
    useMantineColorScheme
} from '@mantine/core';
import { IconMoon, IconSun } from '@tabler/icons-react';
import { useTranslations } from 'next-intl';

import classes from './index.module.css';

interface ColorSchemeToggleProps
    extends Omit<ActionIconProps, 'variant'>,
        Omit<ComponentPropsWithoutRef<'button'>, keyof ActionIconProps> {}

const ColorSchemeToggle = (props: ColorSchemeToggleProps) => {
    const { onClick, ...rest } = props;

    const t = useTranslations('components.color-scheme-toggle');

    const colorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true });
    const { setColorScheme } = useMantineColorScheme();

    const handleClick: MouseEventHandler<HTMLButtonElement> = event => {
        setColorScheme(colorScheme === 'light' ? 'dark' : 'light');

        onClick?.(event);
    };

    const label = colorScheme === 'light' ? t('dark') : t('light');

    return (
        <Tooltip label={label} withArrow openDelay={200} events={{ hover: true, focus: true, touch: false }}>
            <ActionIcon {...rest} variant="default" onClick={handleClick}>
                <IconSun className={classes.light} stroke={1.5} size="75%" />
                <IconMoon className={classes.dark} stroke={1.5} size="75%" />
            </ActionIcon>
        </Tooltip>
    );
};

export { ColorSchemeToggle };
