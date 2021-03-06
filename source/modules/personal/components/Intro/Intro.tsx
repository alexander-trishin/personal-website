import { HTMLAttributes, MouseEventHandler, forwardRef, useEffect, useRef, useState } from 'react';

import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';

import { Button, LoadingOverlay, Typography } from 'elements';
import { Social } from 'modules/personal/elements';
import mergeRefs from 'utils/mergeRefs';

import './Intro.pcss';
interface IntroProps extends HTMLAttributes<HTMLElement> {
    onShowMore?: MouseEventHandler<HTMLElement>;
}

const Intro = forwardRef<HTMLElement, IntroProps>((props, ref) => {
    const { className, onShowMore, ...rest } = props;

    const sectionRef = useRef<HTMLElement>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const { backgroundImage } = getComputedStyle(sectionRef.current as HTMLElement);
        const [src] = /http.+?(?='|")/.exec(backgroundImage) || [];

        if (src) {
            const image = new Image();

            image.src = src;
            image.onload = () => setIsLoading(false);
        }
    }, []);

    return (
        <section
            {...rest}
            ref={mergeRefs(ref, sectionRef)}
            className={clsx(
                'relative flex justify-center items-center min-h-lg h-full w-full',
                className
            )}
        >
            {isLoading && <LoadingOverlay />}
            <div className="absolute left-0 top-0 h-full w-full bg-neutral-900 opacity-80"></div>

            <div className="text-center z-10">
                <div className="mx-auto max-w-6xl">
                    <div className="text-white px-4">
                        <Typography className="font-bold text-primary uppercase" variant="h5">
                            Hello, World.
                        </Typography>

                        <Typography
                            className="text-9xl-fluid font-semibold max-w-5xl mb-2 mx-auto"
                            variant="h1"
                        >
                            I&apos;m Alexander Trishin.
                        </Typography>

                        <Typography className="position uppercase mb-8">
                            Full-Stack Developer
                        </Typography>

                        <Button variant="outlined" onClick={onShowMore}>
                            More about me
                            <FontAwesomeIcon className="ml-2" icon={faChevronDown} size="sm" />
                        </Button>
                    </div>
                </div>
            </div>

            <Social
                className="social block absolute left-0 bottom-16 list-disc text-center text-white w-full"
                size="large"
            />
        </section>
    );
});

Intro.displayName = 'Intro';

export default Intro;
