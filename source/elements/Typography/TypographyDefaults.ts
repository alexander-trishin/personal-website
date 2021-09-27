import type { AsComponent, Variant } from './TypographyTypes';

export const variantMap: Record<Variant, AsComponent> = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    h5: 'h5',
    h6: 'h6',
    subtitle: 'h6',
    body: 'p'
};
