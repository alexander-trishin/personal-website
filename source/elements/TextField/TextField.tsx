import { ComponentProps, FocusEvent, ForwardedRef, forwardRef, useState } from 'react';

import clsx from 'clsx';

import { TextFieldComponent, TextFieldElement, TextFieldProps, isTextArea } from './TextFieldTypes';
import TextFieldWrapper from './TextFieldWrapper';

const TextField = forwardRef<TextFieldElement, TextFieldProps>((props, ref) => {
    const { className, disabled, error, id, name, onBlur, onFocus, value } = props;

    const [hasFocus, setHasFocus] = useState(false);

    const handleBlur = (event: FocusEvent<HTMLInputElement> & FocusEvent<HTMLTextAreaElement>) => {
        setHasFocus(false);
        onBlur?.(event);
    };

    const handleFocus = (event: FocusEvent<HTMLInputElement> & FocusEvent<HTMLTextAreaElement>) => {
        setHasFocus(true);
        onFocus?.(event);
    };

    const sharedClassName = clsx(
        'text-base leading-none',
        'border-0 outline-none shadow-none',
        'transition duration-200',
        {
            'cursor-not-allowed opacity-40': disabled
        }
    );

    const htmlFor = name || id;

    const a11yProps = error
        ? {
              'aria-invalid': true,
              'aria-describedby': `${htmlFor}Hint`
          }
        : {};

    const wrapperProps: ComponentProps<typeof TextFieldWrapper> = {
        error,
        errorId: a11yProps['aria-describedby'],
        hasFocus,
        hasValue: !!value,
        htmlFor
    };

    const sharedProps = {
        id: htmlFor,
        name,
        onBlur: handleBlur,
        onFocus: handleFocus
    };

    if (isTextArea(props)) {
        const { label, variant = 'standard', ...restTextAreaProps } = props;

        delete restTextAreaProps.error;

        return (
            <TextFieldWrapper {...wrapperProps} label={label}>
                <textarea
                    {...restTextAreaProps}
                    {...sharedProps}
                    {...a11yProps}
                    ref={ref as ForwardedRef<HTMLTextAreaElement>}
                    className={clsx(
                        sharedClassName,
                        'h-48 px-4 pt-9 pb-1',
                        { 'bg-transparent': variant === 'standard' },
                        className
                    )}
                />
            </TextFieldWrapper>
        );
    }

    const { label, type = 'text', variant = 'standard', ...restInputProps } = props;

    delete restInputProps.error;

    return (
        <TextFieldWrapper {...wrapperProps} label={label}>
            <input
                {...restInputProps}
                {...sharedProps}
                {...a11yProps}
                ref={ref as ForwardedRef<HTMLInputElement>}
                className={clsx(
                    sharedClassName,
                    'h-16 px-4 pt-6 pb-1',
                    { 'bg-transparent': variant === 'standard' },
                    className
                )}
                type={type}
            />
        </TextFieldWrapper>
    );
}) as TextFieldComponent;

TextField.displayName = 'TextField';

export default TextField;
