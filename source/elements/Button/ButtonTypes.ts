import type { ButtonHTMLAttributes, FC } from 'react';

import type { LinkProps } from 'react-router-dom';

type BaseProps = {
    variant?: 'text' | 'contained' | 'outlined';
};

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
    BaseProps & { [key in keyof Pick<LinkProps, 'replace' | 'to'>]?: undefined };

type AnchorProps = Omit<LinkProps, 'component' | 'innerRef'> & BaseProps;

export type PolymorphicButtonElement = HTMLButtonElement | HTMLAnchorElement;
export type PolymorphicButtonProps = ButtonProps | AnchorProps;

export interface PolymorphicButton extends FC<ButtonProps> {
    (props: AnchorProps): JSX.Element;
}

export const isAnchor = (props: PolymorphicButtonProps): props is AnchorProps => {
    const { replace, to } = props;

    return replace !== undefined || to !== undefined;
};
