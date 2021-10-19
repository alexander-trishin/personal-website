import { ElementType, ReactElement, forwardRef, useMemo } from 'react';

import clsx from 'clsx';

import type { PolymorphicRef } from 'common/types';

import { variantMap } from './TypographyDefaults';
import type { TypographyComponent, TypographyProps } from './TypographyTypes';

const Typography: TypographyComponent = forwardRef(
    <T extends ElementType>(
        props: TypographyProps<T>,
        ref: PolymorphicRef<T>
    ): ReactElement | null => {
        const { as, children, className, classNameOverride, variant = 'body', ...rest } = props;

        const Component = as || variantMap[variant];

        const rootClassName = useMemo(
            () =>
                clsx(
                    'min-h-0vw',
                    !classNameOverride && {
                        'text-6xl-fluid': variant === 'h1',
                        'text-5xl-fluid': variant === 'h2',
                        'text-4xl-fluid': variant === 'h3',
                        'text-3xl-fluid': variant === 'h4',
                        'text-2xl-fluid': variant === 'h5' || variant === 'subtitle',
                        'text-1xl-fluid': variant === 'h6',
                        'font-poppins font-bold': /h[1-6]/.test(variant),
                        'normal-case': /h[1-4]/.test(variant),
                        uppercase: /h[5-6]/.test(variant)
                    },
                    className
                ),
            [className, classNameOverride, variant]
        );

        return (
            <Component ref={ref} className={rootClassName} {...rest}>
                {children}
            </Component>
        );
    }
);

Typography.displayName = 'Typography';

export default Typography;
