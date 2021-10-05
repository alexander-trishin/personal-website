import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { Footer } from '.';

jest.mock('modules/personal/elements', () => ({
    Social: () => <div data-testid="social" />
}));

describe('<Footer />', () => {
    it('should match snapshot', () => {
        const wrapper = render(<Footer />, { wrapper: MemoryRouter });

        expect(wrapper).toMatchSnapshot();
    });
});
