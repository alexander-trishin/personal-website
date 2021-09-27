import { render } from '@testing-library/react';

import { Intro } from '.';

jest.mock('modules/personal/elements', () => ({
    Social: () => <div data-testid="social" />
}));

describe('<Intro />', () => {
    it('should match snapshot', () => {
        const wrapper = render(<Intro />);

        expect(wrapper).toMatchSnapshot();
    });
});
