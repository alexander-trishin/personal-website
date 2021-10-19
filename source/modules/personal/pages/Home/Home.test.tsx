import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';

import Home from './Home';

describe('<Home />', () => {
    it('should scroll to about section', async () => {
        const scrollIntoViewMock = jest.fn();

        window.HTMLElement.prototype.scrollIntoView = scrollIntoViewMock;

        const wrapper = render(<Home />, { wrapper: MemoryRouter });

        userEvent.click(wrapper.getByRole('button', { name: /more about me/i }));

        expect(scrollIntoViewMock).toBeCalledTimes(1);
    });
});
