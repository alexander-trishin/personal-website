import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { About } from '.';

describe('<About />', () => {
    it('should match snapshot', () => {
        const wrapper = render(<About />, { wrapper: MemoryRouter });

        expect(wrapper).toMatchSnapshot();
    });
});
