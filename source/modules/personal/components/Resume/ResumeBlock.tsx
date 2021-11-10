import type { FC, HTMLAttributes } from 'react';

import type { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';

import { Typography } from 'elements';

interface ResumeBlockProps extends HTMLAttributes<HTMLDivElement> {
    icon: IconProp;
    periodHeader: string;
    period: string;
    contentHeader: string;
}

const ResumeBlock: FC<ResumeBlockProps> = props => {
    const { children, contentHeader, icon, period, periodHeader } = props;

    return (
        <div className="relative flex flex-col md:flex-row pt-4 mt-8">
            <div
                className={clsx(
                    'flex justify-center items-center',
                    'text-white bg-gray-800',
                    'absolute top-3 rounded-full h-12 w-12 md:left-1/3 md:-ml-6 z-10'
                )}
            >
                <FontAwesomeIcon icon={icon} />
            </div>

            <div className="text-left pl-16 pr-4 md:text-right md:pl-0 md:pr-20 md:w-1/3">
                <Typography className="text-gray-800" variant="h4">
                    {periodHeader}
                </Typography>
                <p>{period}</p>
            </div>

            <div className="flex flex-col pl-16 pr-4 md:pl-20 md:pr-0 md:w-2/3">
                <div className="order-1 md:order-2 h-1 w-12 bg-black opacity-20 mt-2 mb-4" />
                <Typography className="text-gray-800 order-2 md:order-1" variant="h5">
                    {contentHeader}
                </Typography>
                <div className="order-3">{children}</div>
            </div>
        </div>
    );
};

export default ResumeBlock;
