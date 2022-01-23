import { FC, ReactElement, useMemo, useState } from 'react';

import TruncateMarkup from 'react-truncate-markup';

import { Button } from 'elements';

const Truncate: FC = props => {
    const { children } = props;

    const [isExpanded, setIsExpanded] = useState(false);

    const handleExpand = () => setIsExpanded(true);

    const ellipsis = useMemo(
        () => (
            <span>
                ...{' '}
                <Button className="font-bold text-black" onClick={handleExpand}>
                    [show more]
                </Button>
            </span>
        ),
        []
    );

    if (isExpanded) {
        return children as ReactElement;
    }

    return (
        <TruncateMarkup lines={3} ellipsis={ellipsis}>
            <div>{children}</div>
        </TruncateMarkup>
    );
};

export default Truncate;
