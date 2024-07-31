import type { ComponentPropsWithoutRef } from 'react';
import { Text } from '@mantine/core';

interface ErrorShellTextProps extends Omit<ComponentPropsWithoutRef<typeof Text<'p'>>, 'component' | 'ta'> {}

const ErrorShellText = (props: ErrorShellTextProps) => {
    const { children, ...rest } = props;

    return (
        <Text {...rest} ta="center">
            {children}
        </Text>
    );
};

export { ErrorShellText };
