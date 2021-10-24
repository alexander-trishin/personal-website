import { render } from '@testing-library/react';

import LoadingOverlay from './LoadingOverlay';

describe('<LoadingOverlay />', () => {
    it('should match snapshot', () => {
        const wrapper = render(<LoadingOverlay />);

        expect(wrapper).toMatchSnapshot();
    });
});
