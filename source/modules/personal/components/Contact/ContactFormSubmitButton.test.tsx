import { render } from '@testing-library/react';

import ContactFormSubmitButton from './ContactFormSubmitButton';

describe('<ContactFormSubmitButton />', () => {
    it('should render submit button', () => {
        const wrapper = render(<ContactFormSubmitButton />);

        const actual = wrapper.getByText(/^submit$/i);

        expect(actual).toBeInTheDocument();
    });

    it('should render "submitting" message', () => {
        const wrapper = render(<ContactFormSubmitButton stage="submitting" />);

        const actual = wrapper.getByText(/submitting/i);

        expect(actual).toBeInTheDocument();
    });

    it('should render "done" message', () => {
        const wrapper = render(<ContactFormSubmitButton stage="submitted" />);

        const actual = wrapper.getByText(/done/i);

        expect(actual).toBeInTheDocument();
    });

    it('should render "error" message', () => {
        const wrapper = render(<ContactFormSubmitButton stage="error" />);

        const actual = wrapper.getByText(/error/i);

        expect(actual).toBeInTheDocument();
    });
});
