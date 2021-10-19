import { FC, useState } from 'react';

import { SubmitHandler, useForm } from 'react-hook-form';

import { TextField } from 'elements';
import { sleep } from 'utils';
import { useUpdateEffect } from 'utils/hooks';

import ContactFormSubmitButton from './ContactFormSubmitButton';
import type { IContactForm, SubmitStage } from './ContactFormTypes';

interface ContactFormProps {
    onSubmit?: (data: IContactForm) => void | Promise<void>;
}

const DefaultState: IContactForm = {
    name: '',
    email: '',
    subject: '',
    message: '',
    xmessage: ''
};

const ContactForm: FC<ContactFormProps> = props => {
    const { onSubmit: onSubmitFromProps } = props;

    const {
        formState: { errors, isSubmitting },
        handleSubmit,
        register,
        reset,
        watch
    } = useForm<IContactForm>({ defaultValues: DefaultState });

    const [stage, setStage] = useState<SubmitStage>('default');

    useUpdateEffect(() => {
        let cancel = false;

        const delaySubmitStatus = async () => {
            await sleep(5000);

            if (!cancel) {
                setStage('default');
            }
        };

        if (stage === 'error' || stage === 'submitted') {
            delaySubmitStatus();
        }

        return () => {
            cancel = true;
        };
    }, [stage]);

    const onSubmit: SubmitHandler<IContactForm> = async (data, event) => {
        event?.preventDefault();

        setStage('submitting');

        try {
            await onSubmitFromProps?.(data);

            reset(DefaultState);
            setStage('submitted');
        } catch (error) {
            setStage('error');
        }
    };

    const required = 'This field is required.';
    const values = watch();

    return (
        <form className="relative" onSubmit={handleSubmit(onSubmit)}>
            <fieldset className="inline-block text-white min-w-0 w-full">
                <TextField
                    {...register('name', { minLength: 2, required })}
                    value={values.name}
                    error={errors.name?.message}
                    disabled={isSubmitting}
                    label="Name"
                />
                <TextField
                    {...register('email', { required })}
                    value={values.email}
                    error={errors.email?.message}
                    disabled={isSubmitting}
                    type="email"
                    label="Email"
                />
                <TextField
                    {...register('subject', { required })}
                    value={values.subject}
                    error={errors.subject?.message}
                    disabled={isSubmitting}
                    label="Subject"
                />
                <TextField
                    {...register('message', { required })}
                    value={values.message}
                    error={errors.message?.message}
                    disabled={isSubmitting}
                    label="Message"
                    rows={10}
                    cols={50}
                />
                <input
                    {...register('xmessage')}
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="false"
                />
                <ContactFormSubmitButton stage={stage} />
            </fieldset>
        </form>
    );
};

export default ContactForm;
