'use client';

import type { ComponentPropsWithoutRef } from 'react';
import { Button } from '@mantine/core';

import { Link, LinkProps } from '@/router';

type LinkButtonProps = Omit<ComponentPropsWithoutRef<typeof Button<'a'>>, 'component' | keyof LinkProps> & LinkProps;

const LinkButton = (props: LinkButtonProps) => {
    const { children, ...rest } = props;

    return (
        <Button {...rest} component={Link}>
            {children}
        </Button>
    );
};

export { LinkButton };
