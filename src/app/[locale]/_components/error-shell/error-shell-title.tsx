import type { ComponentPropsWithoutRef } from 'react';
import { Title } from '@mantine/core';

interface ErrorShellTitleProps extends Omit<ComponentPropsWithoutRef<typeof Title>, 'component' | 'order' | 'ta'> {}

const ErrorShellTitle = (props: ErrorShellTitleProps) => {
    const { children, ...rest } = props;

    return (
        <Title {...rest} order={1} ta="center">
            {children}
        </Title>
    );
};

export { ErrorShellTitle };
