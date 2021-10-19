import { CSSProperties, HTMLAttributes, MouseEventHandler, forwardRef } from 'react';

import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';

import { Button, Typography } from 'elements';
import { Social } from 'modules/personal/elements';

import BackgroundUrl from '../../assets/images/intro-bg.jpg';

import './Intro.pcss';

interface IntroProps extends HTMLAttributes<HTMLElement> {
    onShowMore?: MouseEventHandler<HTMLElement>;
}

const styles: Record<string, CSSProperties> = {
    root: {
        background: `#151515 url(${BackgroundUrl}) no-repeat center bottom`,
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed'
    }
};

const Intro = forwardRef<HTMLElement, IntroProps>((props, ref) => {
    const { className, onShowMore, style = {}, ...rest } = props;

    return (
        <section
            {...rest}
            ref={ref}
            className={clsx(
                'relative flex justify-center items-center min-h-lg h-full w-full',
                className
            )}
            style={{ ...styles.root, ...style }}
        >
            <div className="absolute left-0 top-0 h-full w-full bg-gray-900 opacity-80"></div>

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
