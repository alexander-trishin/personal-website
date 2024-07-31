import type { ComponentPropsWithoutRef } from 'react';
import { Box } from '@mantine/core';
import cx from 'clsx';

import classes from './error-shell-image.module.css';

interface ErrorShellImageProps extends ComponentPropsWithoutRef<typeof Box<'div'>> {}

const ErrorShellImage = (props: ErrorShellImageProps) => {
    const { children, className, ...rest } = props;

    return (
        <Box {...rest} className={cx(classes.root, className)}>
            {children}
        </Box>
    );
};

export { ErrorShellImage };
