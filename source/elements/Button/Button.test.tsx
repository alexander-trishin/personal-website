import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { Button } from '.';

describe('<Button />', () => {
    it('should render anchor node with relative link', () => {
        const wrapper = render(<Button to="/test" />, { wrapper: MemoryRouter });

        const actual = wrapper.getByRole('link');

        expect(actual).toBeInTheDocument();
        expect(actual.getAttribute('href')).toBe('/test');
    });

    it('should render anchor node with external link', () => {
        const wrapper = render(<Button to="https://google.com" />);

        const actual = wrapper.getByRole('link');

        expect(actual).toBeInTheDocument();
        expect(actual.getAttribute('href')).toBe('https://google.com');
    });

    it('should render button node', () => {
        const wrapper = render(<Button />);

        const actual = wrapper.getByRole('button');

        expect(actual).toBeInTheDocument();
    });
});
