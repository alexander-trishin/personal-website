import type { ElementType, NamedExoticComponent } from 'react';

import type { PolymorphicComponentPropsWithRef } from 'common/types';

type Heading = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export type AsComponent = Heading | 'p' | 'span';
export type Variant = Heading | 'subtitle' | 'body';

interface BaseProps {
    variant?: Variant;
}

export type TypographyProps<T extends ElementType> = PolymorphicComponentPropsWithRef<T, BaseProps>;

export type TypographyComponent<T extends ElementType = ElementType> = NamedExoticComponent<
    TypographyProps<T>
>;
