'use client';

import { rem } from '@mantine/core';

import { IconProps } from './types';

const FlagRu = (props: IconProps) => {
    const { size, style, ...rest } = props;

    return (
        <svg
            {...rest}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 480"
            style={{ width: rem(size), height: rem(size), ...style }}
        >
            <g fillRule="evenodd" strokeWidth="1pt">
                <path fill="#fff" d="M0 0h640v480H0z" />
                <path fill="#0039a6" d="M0 160h640v320H0z" />
                <path fill="#d52b1e" d="M0 320h640v160H0z" />
            </g>
        </svg>
    );
};

export { FlagRu };
