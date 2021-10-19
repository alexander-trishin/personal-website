import { ButtonHTMLAttributes, FC } from 'react';

import { faCheck, faSpinner, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';

import { Button } from 'elements';

import type { SubmitStage } from './ContactFormTypes';

interface ContactFormSubmitButtonProps
    extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
    stage?: SubmitStage;
}

const ContactFormSubmitButton: FC<ContactFormSubmitButtonProps> = props => {
    const { className, disabled, stage = 'default', ...rest } = props;

    const content =
        stage === 'error' ? (
            <>
                <FontAwesomeIcon className="align-middle mr-2" icon={faTimes} size="lg" />
                <span>Error :(</span>
            </>
        ) : stage === 'submitting' ? (
            <>
                <FontAwesomeIcon
                    className="align-middle animate-spin mr-2"
                    icon={faSpinner}
                    size="lg"
                />
                <span>Submitting...</span>
            </>
        ) : stage === 'submitted' ? (
            <>
                <FontAwesomeIcon className="align-middle mr-2" icon={faCheck} size="lg" />
                <span>Done!</span>
            </>
        ) : (
            'Submit'
        );

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
            disabled={disabled || stage === 'submitting'}
        >
            {content}
        </Button>
    );
};

export default ContactFormSubmitButton;
