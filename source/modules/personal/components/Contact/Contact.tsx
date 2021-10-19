import { ComponentProps, HTMLAttributes, forwardRef } from 'react';

import clsx from 'clsx';

import { Typography } from 'elements';

import ContactForm from './ContactForm';

interface ContactProps extends Omit<HTMLAttributes<HTMLElement>, 'onSubmit'> {
    onSubmit?: ComponentProps<typeof ContactForm>['onSubmit'];
}

const Contact = forwardRef<HTMLElement, ContactProps>((props, ref) => {
    const { className, onSubmit, ...rest } = props;

    return (
        <section {...rest} ref={ref} className={clsx('relative pt-32 pb-16', className)}>
            <div className="text-center max-w-2xl mx-auto px-5 mb-8">
                <Typography className="text-primary uppercase" variant="h5">
                    Contact
                </Typography>
                <Typography className="text-white" variant="h1">
                    I&apos;d Love To Hear From You.
                </Typography>

                <Typography variant="subtitle">Feel free to get in touch.</Typography>
            </div>

            <div className="max-w-2xl mx-auto px-5">
                <ContactForm onSubmit={onSubmit} />
            </div>
        </section>
    );
});

Contact.displayName = 'Contact';

export default Contact;
