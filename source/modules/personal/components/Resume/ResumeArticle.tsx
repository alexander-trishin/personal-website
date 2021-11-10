import type { FC, HTMLAttributes } from 'react';

import clsx from 'clsx';

import { Typography } from 'elements';

interface ResumeArticleProps extends HTMLAttributes<HTMLElement> {
    header?: string;
}

const ResumeArticle: FC<ResumeArticleProps> = props => {
    const { children, className, header, ...rest } = props;

    return (
        <article {...rest} className={clsx('max-w-5xl mx-auto', className)}>
            <div className="text-center px-5 mb-5">
                <Typography className="text-primary" variant="h2">
                    {header}
                </Typography>
            </div>

            <div className="relative px-5">
                <div className="bg-black opacity-10 absolute top-0 left-8 md:left-1/3 h-full w-px ml-3 md:ml-2" />
                {children}
            </div>
        </article>
    );
};

export default ResumeArticle;
