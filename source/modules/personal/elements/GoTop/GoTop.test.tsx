import { fireEvent, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { GoTop } from '.';

describe('<GoTop />', () => {
    it('should be invisible by default', () => {
        const wrapper = render(<GoTop />, { wrapper: MemoryRouter });

        const actual = wrapper.queryByRole('link');

        expect(actual).toBeNull();
    });

    it('should be visible after scrolling to specified limit', () => {
        const wrapper = render(<GoTop showAfterScrolling={100} />, { wrapper: MemoryRouter });

        fireEvent.scroll(window, { target: { scrollY: 150 } });

        const actual = wrapper.getByRole('link');

        expect(actual).toBeInTheDocument();
    });
});
