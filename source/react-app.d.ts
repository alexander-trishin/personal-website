declare namespace NodeJS {
    interface ProcessEnv {
        readonly PUBLIC_URL: string;
    }
}

declare module '*.bmp' {
    const value: string;
    export default value;
}

declare module '*.gif' {
    const value: string;
    export default value;
}

declare module '*.jpg' {
    const value: string;
    export default value;
}

declare module '*.jpeg' {
    const value: string;
    export default value;
}

declare module '*.png' {
    const value: string;
    export default value;
}

declare module '*.webp' {
    const value: string;
    export default value;
}

declare module '*.svg' {
    import type { FC, SVGProps } from 'react';

    export const ReactComponent: FC<SVGProps<SVGSVGElement> & { title?: string }>;

    const value: string;
    export default value;
}
