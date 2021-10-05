import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { Intro } from '.';

jest.mock('modules/personal/elements', () => ({
    Social: () => <div data-testid="social" />
}));

describe('<Intro />', () => {
    it('should match snapshot', () => {
        const wrapper = render(<Intro />, { wrapper: MemoryRouter });

        expect(wrapper).toMatchSnapshot();
    });
});
