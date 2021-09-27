import { render } from '@testing-library/react';

import { Social } from '.';

describe('<Social />', () => {
    it('should match snapshot', () => {
        const small = render(<Social size="small" />);
        const large = render(<Social size="large" />);

        expect(small).toMatchSnapshot('small');
        expect(large).toMatchSnapshot('large');
    });
});
