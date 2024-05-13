import type { ComponentPropsWithoutRef } from 'react';

export interface IconProps extends Omit<ComponentPropsWithoutRef<'svg'>, 'xmlns' | 'viewBox'> {
    size?: number | string;
}
