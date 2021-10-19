import { act, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { sleep } from 'utils';

import ContactForm from './ContactForm';

describe('<ContactForm />', () => {
    it('should submit form', async () => {
        const onSubmitMock = jest.fn();

        const wrapper = render(<ContactForm onSubmit={onSubmitMock} />);

        userEvent.type(wrapper.getByRole('textbox', { name: /name/i }), 'Dart Vader');
        userEvent.type(wrapper.getByRole('textbox', { name: /email/i }), 'dvader@starwars.com');
        userEvent.type(wrapper.getByRole('textbox', { name: /subject/i }), 'Paternity Test');
        userEvent.type(wrapper.getByRole('textbox', { name: /message/i }), 'Luke.....');

        userEvent.click(wrapper.getByRole('button'));

        await act(async () => {
            await sleep(0);
        });

        expect(onSubmitMock).toBeCalledWith({
            name: 'Dart Vader',
            email: 'dvader@starwars.com',
            subject: 'Paternity Test',
            message: 'Luke.....',
            xmessage: ''
        });
    });
});
