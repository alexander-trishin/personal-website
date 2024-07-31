import { forwardRef } from 'react';
import { ActionIcon, ActionIconProps } from '@mantine/core';

import { Link } from '@/router';

type LocaleLinkProps = Omit<ActionIconProps, 'component' | 'variant'> & {
    href: string;
    locale: Locale;
};

const LocaleLink = forwardRef<HTMLAnchorElement, LocaleLinkProps>((props, ref) => {
    const { children, ...rest } = props;

    return (
        <ActionIcon {...rest} ref={ref} component={Link} variant="subtle" replace scroll={false}>
            {children}
        </ActionIcon>
    );
});

LocaleLink.displayName = 'LocaleLink';

export { LocaleLink };
