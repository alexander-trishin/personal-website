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
                    const { href, textContent, title } = a;

                    window.umami?.trackEvent(
                        textContent || title ? `Link to ${textContent || title}` : href,
                        eventType
                    );
                } else if (button) {
                    const { id, name, textContent, title } = button;

                    window.umami?.trackEvent(textContent || title || name || id, eventType);
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
