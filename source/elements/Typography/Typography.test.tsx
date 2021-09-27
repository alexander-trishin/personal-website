import { render } from '@testing-library/react';

import { Typography } from '.';
import { variantMap } from './TypographyDefaults';
import type { Variant } from './TypographyTypes';

describe('<Typography />', () => {
    const variants = Object.keys(variantMap) as Variant[];

    it('should use given component', () => {
        const wrapper = render(<Typography as="h3" variant="h1" />);

        const actual = wrapper.getByRole('heading');

        expect(actual.localName).toBe('h3');
    });

    test.each(variants)('should use style of %s', variant => {
        const props = {
            children: variant,
            variant
        };

        expect(<Typography {...props} />).toMatchSnapshot();
    });
});
