import type { FC, InputHTMLAttributes, TextareaHTMLAttributes } from 'react';

type BaseProps = {
    error?: string;
    label?: string;
    variant?: 'standard';
};

type ExclusiveTextAreaProps = { multiline?: boolean };

type InputProps = InputHTMLAttributes<HTMLInputElement> &
    BaseProps & { [key in keyof ExclusiveTextAreaProps]?: undefined };

type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement> &
    BaseProps &
    ExclusiveTextAreaProps;

export type TextFieldElement = HTMLInputElement | HTMLTextAreaElement;
export type TextFieldProps = InputProps | TextAreaProps;

export interface TextFieldComponent extends FC<InputProps> {
    (props: TextAreaProps): JSX.Element;
}

export const isTextArea = (props: TextFieldProps): props is TextAreaProps => {
    const { cols, rows, dirName, multiline, wrap } = props as TextAreaProps;

    return [cols, rows, dirName, multiline, wrap].some(prop => prop !== undefined);
};
