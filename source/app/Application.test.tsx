import { render } from '@testing-library/react';

import { Application } from '.';

describe('<Application />', () => {
    it('should render simple text', () => {
        const wrapper = render(<Application />);

        const actual = wrapper.getByText(/\w+/);

        expect(actual).toBeDefined();
    });
});
