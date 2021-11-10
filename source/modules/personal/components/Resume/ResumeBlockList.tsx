import type { FC, HTMLAttributes, PropsWithChildren } from 'react';

import clsx from 'clsx';

interface ResumeBlockListProps extends HTMLAttributes<HTMLUListElement> {
    disc?: boolean;
}

const ResumeBlockList = (props: PropsWithChildren<ResumeBlockListProps>) => {
    const { className, children, disc, ...rest } = props;

    return (
        <ul {...rest} className={clsx({ 'list-disc list-inside': disc }, className)}>
            {children}
        </ul>
    );
};

interface ResumeBlockListItemProps extends HTMLAttributes<HTMLLIElement> {
    header?: string;
}

const ResumeBlockListItem: FC<ResumeBlockListItemProps> = props => {
    const { children, header, ...rest } = props;

    return (
        <li {...rest}>
            {header && <strong className="text-gray-500 capitalize">{header}: </strong>}
            <span className="text-gray-500">{children}</span>
        </li>
    );
};

ResumeBlockList.Item = ResumeBlockListItem;

export default ResumeBlockList;
