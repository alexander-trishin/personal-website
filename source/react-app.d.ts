declare namespace NodeJS {
    import { EnvironmentMode } from 'common/constants';

    interface ProcessEnv {
        readonly NODE_ENV: EnvironmentMode;
        readonly PUBLIC_URL: string;
        readonly REACT_APP_ANALYTICS_ID: string;
        readonly REACT_APP_ANALYTICS_URI: string;
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
    // eslint-disable-next-line import/order
    import type { FC, SVGProps } from 'react';

    export const ReactComponent: FC<SVGProps<SVGSVGElement> & { title?: string }>;

    const value: string;
    export default value;
}
