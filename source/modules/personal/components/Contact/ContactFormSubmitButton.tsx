import { ButtonHTMLAttributes, FC, ReactNode, useState } from 'react';

import { faCheck, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';

import { Button } from 'elements';
import { useUpdateEffect } from 'utils/hooks';

interface ContactFormSubmitButtonProps
    extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
    isSubmitting?: boolean;
}

const ContactFormSubmitButton: FC<ContactFormSubmitButtonProps> = props => {
    const { className, disabled, isSubmitting, ...rest } = props;

    const [content, setContent] = useState<ReactNode>('Submit');

    useUpdateEffect(() => {
        if (isSubmitting) {
            setContent(
                <>
                    <FontAwesomeIcon
                        className="align-middle animate-spin mr-2"
                        icon={faSpinner}
                        size="lg"
                    />
                    <span>Submitting...</span>
                </>
            );
        } else {
            setContent(
                <>
                    <FontAwesomeIcon className="align-middle mr-2" icon={faCheck} size="lg" />
                    <span>Done!</span>
                </>
            );

            setTimeout(() => {
                setContent('Submit');
            }, 5000);
        }
    }, [isSubmitting]);

    return (
        <Button
            {...rest}
            type="submit"
            variant="contained"
            className={clsx(
                'bg-primary focus:opacity-80 hover:opacity-80 outline-none',
                'disabled:cursor-not-allowed disabled:opacity-40',
                'w-full mt-8',
                className
            )}
            disabled={disabled || isSubmitting}
        >
            {content}
        </Button>
    );
};

export default ContactFormSubmitButton;
