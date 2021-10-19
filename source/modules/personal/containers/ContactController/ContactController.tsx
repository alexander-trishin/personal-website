import { ComponentProps, HTMLAttributes, forwardRef } from 'react';

import axios from 'axios';

import { Environment } from 'common/constants';
import { Contact } from 'modules/personal/components';

const ContactController = forwardRef<HTMLElement, HTMLAttributes<HTMLElement>>((props, ref) => {
    const handleSubmit: ComponentProps<typeof Contact>['onSubmit'] = async data => {
        const { email, xmessage, ...restData } = data;

        if (xmessage) {
            throw new Error('Hi bot, how are you?');
        }

        await new Promise(resolve => setTimeout(resolve, 1500));

        await axios.post(`${Environment.BaseUrl.WebApi}/contact-me`, { ...restData, from: email });
    };

    return (
        <>
            <Contact {...props} ref={ref} onSubmit={handleSubmit} />
        </>
    );
});

export default ContactController;
