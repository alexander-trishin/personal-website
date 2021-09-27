import { ElementType, ReactElement, forwardRef } from 'react';

import clsx from 'clsx';

import type { PolymorphicRef } from 'common/types';

import { variantMap } from './TypographyDefaults';
import type { TypographyComponent, TypographyProps } from './TypographyTypes';

const Typography: TypographyComponent = forwardRef(
    <T extends ElementType>(
        props: TypographyProps<T>,
        ref: PolymorphicRef<T>
    ): ReactElement | null => {
        const { as, children, className, variant = 'body', ...rest } = props;

        const Component = as || variantMap[variant];

        return (
            <Component ref={ref} className={clsx(className)} {...rest}>
                {children}
            </Component>
        );
    }
);

Typography.displayName = 'Typography';

export default Typography;
