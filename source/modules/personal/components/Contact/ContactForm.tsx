import { FC, useEffect } from 'react';

import { SubmitHandler, useForm } from 'react-hook-form';

import { TextField } from 'elements';

import ContactFormSubmitButton from './ContactFormSubmitButton';

export interface IContactForm {
    name: string;
    email: string;
    subject: string;
    message: string;
    xmessage?: string;
}

interface ContactFormProps {
    onSubmit?: (data: IContactForm) => void | Promise<void>;
}

const ContactForm: FC<ContactFormProps> = props => {
    const { onSubmit: onSubmitFromProps } = props;
    const {
        formState: { errors, isSubmitting, isSubmitSuccessful },
        handleSubmit,
        register,
        reset
    } = useForm<IContactForm>();

    useEffect(() => {
        if (isSubmitSuccessful) {
            reset({
                name: '',
                email: '',
                subject: '',
                message: ''
            });
        }
    }, [isSubmitSuccessful, reset]);

    const onSubmit: SubmitHandler<IContactForm> = async (data, event) => {
        event?.preventDefault();

        await onSubmitFromProps?.(data);
    };

    const required = 'This field is required.';

    return (
        <form className="relative" onSubmit={handleSubmit(onSubmit)}>
            <fieldset className="inline-block text-white min-w-0 w-full">
                <TextField
                    {...register('name', { minLength: 2, required })}
                    error={errors.name?.message}
                    disabled={isSubmitting}
                    label="Name"
                />
                <TextField
                    {...register('email', { required })}
                    error={errors.email?.message}
                    disabled={isSubmitting}
                    type="email"
                    label="Email"
                />
                <TextField
                    {...register('subject', { required })}
                    error={errors.subject?.message}
                    disabled={isSubmitting}
                    label="Subject"
                />
                <TextField
                    {...register('message', { required })}
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
                <ContactFormSubmitButton isSubmitting={isSubmitting} />
            </fieldset>
        </form>
    );
};

export default ContactForm;
