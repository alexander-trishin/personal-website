import { ForwardedRef, forwardRef } from 'react';

import clsx from 'clsx';
import { Link } from 'react-router-dom';

import {
    PolymorphicButton,
    PolymorphicButtonElement,
    PolymorphicButtonProps,
    isAnchor
} from './ButtonTypes';

import './Button.pcss';

const Button = forwardRef<PolymorphicButtonElement, PolymorphicButtonProps>((props, ref) => {
    const { className, variant = 'text' } = props;

    const mergedClassName = clsx(
        'button',
        {
            'button-contained': variant === 'contained',
            'button-outlined': variant === 'outlined',
            'button-text': variant === 'text'
        },
        className
    );

    if (isAnchor(props)) {
        const { children, ...rest } = props;
        const { to, ...restAnchorProps } = rest;

        if (typeof to === 'string' && /^https?:\/\//.test(to)) {
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
                innerRef={ref as ForwardedRef<HTMLAnchorElement>}
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
