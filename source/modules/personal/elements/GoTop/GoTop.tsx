import { FC, Fragment, MouseEventHandler, useEffect, useState } from 'react';

import { faLongArrowAltUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Transition } from '@headlessui/react';
import clsx from 'clsx';
import { throttle } from 'lodash';

import { Button } from 'elements';

interface GoTopProps {
    onGoTop?: MouseEventHandler<HTMLElement>;
    showAfterScrolling?: number;
}

const GoTop: FC<GoTopProps> = props => {
    const { onGoTop, showAfterScrolling = 300 } = props;

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const onScrollHandler = throttle(
            () => {
                const { scrollY } = window;

                setIsVisible(scrollY >= showAfterScrolling);
            },
            100,
            { leading: true }
        );

        window.addEventListener('scroll', onScrollHandler);

        return () => {
            window.removeEventListener('scroll', onScrollHandler);
        };
    }, [showAfterScrolling]);

    return (
        <Transition
            as={Fragment}
            show={isVisible}
            enter="transition-opacity duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
        >
            <Button
                onClick={onGoTop}
                className={clsx(
                    'flex justify-center items-center',
                    'text-white bg-primary focus:bg-neutral-800 hover:bg-neutral-800 h-14 w-14'
                )}
                title="Go to top"
            >
                <FontAwesomeIcon icon={faLongArrowAltUp} />
            </Button>
        </Transition>
    );
};

export default GoTop;
