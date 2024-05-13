import type { ComponentPropsWithoutRef } from 'react';
import { Center, Container, Stack } from '@mantine/core';
import cx from 'clsx';

import classes from './error-shell.module.css';

interface ErrorShellProps extends ComponentPropsWithoutRef<typeof Center<'div'>> {}

const ErrorShell = (props: ErrorShellProps) => {
    const { children, className, ...rest } = props;

    return (
        <Center {...rest} className={cx(classes.root, className)}>
            <Container size="sm">
                <Stack align="center" gap="xl">
                    {children}
                </Stack>
            </Container>
        </Center>
    );
};

export { ErrorShell };
