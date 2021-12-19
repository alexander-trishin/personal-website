import { HTMLAttributes, MouseEventHandler, forwardRef } from 'react';

import clsx from 'clsx';

import { Button, Typography } from 'elements';

import AvatarSrc from '../../assets/images/avatar.jpg';

interface AboutProps extends HTMLAttributes<HTMLElement> {
    cvName?: string;
    cvPath?: string;
    onContactMe?: MouseEventHandler<HTMLElement>;
}

const About = forwardRef<HTMLElement, AboutProps>((props, ref) => {
    const { className, cvName, cvPath, onContactMe, ...rest } = props;

    return (
        <section {...rest} ref={ref} className={clsx('bg-white pt-32 pb-36', className)}>
            <div className="text-center max-w-2xl mx-auto px-5 mb-8">
                <Typography className="text-primary mb-1" variant="h5">
                    About
                </Typography>
                <Typography className="text-neutral-800 mb-10 md:mb-3" variant="h1">
                    Let me introduce myself.
                </Typography>

                <div className="flex flex-col gap-y-2 items-center md:flex-row md:gap-x-4">
                    <img
                        className="rounded-full h-16 w-16 md:h-24 md:w-24"
                        src={AvatarSrc}
                        alt="Profile Picture"
                    />

                    <Typography className="text-center md:text-left" variant="subtitle">
                        Hi, I&apos;m Alex. I am a software engineer, currently living in Minsk,
                        Belarus. I like building things and learn something new every day. In my
                        free time I like: read, travel, swim, listen to music and play electric
                        guitar.
                    </Typography>
                </div>
            </div>

            <div
                className={clsx(
                    'flex text-black',
                    'flex-col gap-y-5',
                    'md:flex-row md:gap-x-5 md:justify-center',
                    'max-w-2xl mx-auto px-5'
                )}
            >
                <Button
                    variant="outlined"
                    className="focus:text-primary hover:text-primary"
                    onClick={onContactMe}
                >
                    Contact Me
                </Button>
                {cvName && cvPath && (
                    <Button
                        variant="contained"
                        className="text-white bg-neutral-800 focus:bg-neutral-800 hover:bg-neutral-800"
                        download={cvName}
                        to={cvPath}
                    >
                        Download CV
                    </Button>
                )}
            </div>
        </section>
    );
});

export default About;
