import { render } from '@testing-library/react';

import Routes from './Routes';

jest.mock('./Home', () => () => <div data-testid="home" />);

describe('<Routes />', () => {
    it('should render home page', () => {
        const wrapper = render(<Routes />);

        const actual = wrapper.getByTestId('home');

        expect(actual).toBeDefined();
    });
});
