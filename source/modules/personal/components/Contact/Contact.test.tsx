import { render } from '@testing-library/react';

import { Contact } from '.';

describe('<Contact />', () => {
    it('should match snapshot', () => {
        const wrapper = render(<Contact />);

        expect(wrapper).toMatchSnapshot();
    });
});
