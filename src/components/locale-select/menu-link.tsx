import { forwardRef } from 'react';
import { ActionIcon, ActionIconProps } from '@mantine/core';

import { Link } from '@/router';

interface CountryLinkProps extends Omit<ActionIconProps, 'component' | 'variant'> {
    href: string;
    locale: Locale;
}

const MenuLink = forwardRef<HTMLAnchorElement, CountryLinkProps>((props, ref) => {
    const { children, ...rest } = props;

    return (
        <ActionIcon {...rest} ref={ref} component={Link} variant="subtle" replace scroll={false}>
            {children}
        </ActionIcon>
    );
});

MenuLink.displayName = 'MenuLink';

export { MenuLink };
