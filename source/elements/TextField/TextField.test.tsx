import { ChangeEvent } from 'react';

import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import TextField from './TextField';

describe('<TextField />', () => {
    const props = {
        onChange: (event: ChangeEvent<HTMLInputElement> & ChangeEvent<HTMLTextAreaElement>) => {
            props.value += event.target.value;
        },
        value: ''
    };

    beforeEach(() => {
        props.value = '';
    });

    it('should render <input /> element', () => {
        const wrapper = render(<TextField {...props} />);

        userEvent.type(wrapper.getByRole('textbox'), 'one line{enter}next line{enter}end');

        expect(props.value).toBe('one linenext lineend');
    });

    it('should render <textarea /> element', () => {
        const wrapper = render(<TextField {...props} multiline />);

        userEvent.type(wrapper.getByRole('textbox'), 'one line{enter}next line{enter}end');

        expect(props.value).toBe('one line\nnext line\nend');
    });
});
