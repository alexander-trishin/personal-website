import type { FC } from 'react';

import clsx from 'clsx';

interface TextFieldWrapperProps {
    error?: string;
    errorId?: string;
    hasFocus?: boolean;
    hasValue?: boolean;
    htmlFor?: string;
    label?: string;
}

const TextFieldWrapper: FC<TextFieldWrapperProps> = props => {
    const { children, error, errorId, hasFocus, hasValue, htmlFor, label } = props;

    return (
        <div
            className={clsx('relative flex flex-col border-b', {
                'border-primary': hasFocus,
                'border-gray-500': !hasFocus
            })}
        >
            {children}
            {label && (
                <label
                    htmlFor={htmlFor}
                    className={clsx(
                        'absolute left-4 pointer-events-none',
                        'text-base leading-none text-gray-700',
                        'transform origin-top-left',
                        'transition duration-200',
                        {
                            'translate-y-6 scale-100': !hasValue && !hasFocus,
                            'translate-y-3 scale-80': !!hasValue || hasFocus
                        }
                    )}
                >
                    {label}
                </label>
            )}
            {error && (
                <p
                    id={errorId}
                    className={clsx(
                        'absolute -bottom-3 right-1.5 px-8',
                        'font-poppins font-bold text-xs leading-6 uppercase text-white bg-primary',
                        'after:absolute after:top-1/2 after:-left-1.5 after:-mt-2',
                        'after:border-t-8 after:border-t-transparent',
                        'after:border-b-8 after:border-b-transparent',
                        'after:border-r-8 after:border-r-primary'
                    )}
                >
                    {error}
                </p>
            )}
        </div>
    );
};

export default TextFieldWrapper;
