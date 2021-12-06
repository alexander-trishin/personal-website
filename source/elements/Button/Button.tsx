import { ForwardedRef, forwardRef } from 'react';

import clsx from 'clsx';
import { Link } from 'react-router-dom';

import {
    PolymorphicButton,
    PolymorphicButtonElement,
    PolymorphicButtonProps,
    isAnchor
} from './ButtonTypes';

const Button = forwardRef<PolymorphicButtonElement, PolymorphicButtonProps>((props, ref) => {
    const { className, variant = 'text' } = props;

    const mergedClassName = clsx(
        'inline-block transition-all duration-300 text-center',
        'disabled:cursor-not-allowed disabled:opacity-40',
        {
            'font-poppins font-bold text-button uppercase':
                variant === 'contained' || variant === 'outlined',
            'focus:opacity-80 hover:opacity-80 outline-none px-8 py-4': variant === 'contained',
            'text-current border-solid border-2 border-current focus:border-primary hover:border-primary px-8 py-4':
                variant === 'outlined',
            'focus:text-primary hover:text-primary': variant === 'text'
        },
        className
    );

    if (isAnchor(props)) {
        const { children, ...rest } = props;
        const { to, ...restAnchorProps } = rest;

        if (typeof to === 'string' && (/^https?:\/\//.test(to) || props.download)) {
            return (
                <a
                    {...restAnchorProps}
                    ref={ref as ForwardedRef<HTMLAnchorElement>}
                    className={mergedClassName}
                    target="_blank"
                    rel="noopener noreferrer"
                    href={to}
                >
                    {children}
                </a>
            );
        }

        return (
            <Link
                {...rest}
                ref={ref as ForwardedRef<HTMLAnchorElement>}
                className={mergedClassName}
            >
                {children}
            </Link>
        );
    }

    const { children, ...rest } = props;

    return (
        <button {...rest} ref={ref as ForwardedRef<HTMLButtonElement>} className={mergedClassName}>
            {children}
        </button>
    );
}) as PolymorphicButton;

Button.displayName = 'Button';

export default Button;
