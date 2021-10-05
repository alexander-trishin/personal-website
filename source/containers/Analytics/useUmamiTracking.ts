import { useEffect } from 'react';

const useUmamiTracking = (isEnabled: boolean) => {
    useEffect(() => {
        const onClickHandler = (event: MouseEvent) => {
            const { target } = event;

            if (target instanceof Element) {
                const eventType = 'click';

                const a = target.closest('a');
                const button = target.closest('button');

                if (a) {
                    window.umami?.trackEvent(
                        `[element] a [title] ${a.title} [link] ${a.href}`,
                        eventType
                    );
                } else if (button) {
                    window.umami?.trackEvent(
                        `[element] button [content] ${button.value || button.title}`,
                        eventType
                    );
                }
            }
        };

        if (isEnabled) {
            window.addEventListener('click', onClickHandler);
        }

        return () => {
            if (isEnabled) {
                window.removeEventListener('click', onClickHandler);
            }
        };
    }, [isEnabled]);
};

export default useUmamiTracking;
