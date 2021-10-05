import { HTMLAttributes, MouseEventHandler, forwardRef } from 'react';

import clsx from 'clsx';

import { Typography } from 'elements';

import AvatarSrc from '../../assets/images/avatar.jpg';

interface AboutProps extends HTMLAttributes<HTMLElement> {
    onDownloadCV?: MouseEventHandler<HTMLElement>;
}

const About = forwardRef<HTMLElement, AboutProps>((props, ref) => {
    const { className, ...rest } = props;

    return (
        <section {...rest} ref={ref} className={clsx('bg-white pt-32 pb-36', className)}>
            <div className="text-center max-w-2xl mx-auto px-5 mb-8">
                <Typography className="text-primary mb-1" variant="h5">
                    About
                </Typography>
                <Typography className="text-gray-800 xs:mb-10 md:mb-3" variant="h1">
                    Let me introduce myself.
                </Typography>

                <div className="flex xs:flex-col xs:gap-y-2 xs:items-center md:flex-row md:gap-x-4">
                    <img
                        className="rounded-full xs:h-16 xs:w-16 md:h-24 md:w-24"
                        src={AvatarSrc}
                        alt="Profile Picture"
                    />

                    <Typography className="xs:text-center md:text-left" variant="subtitle">
                        Hi, I&apos;m Alex. I am a software engineer, currently living in Minsk,
                        Belarus. I like building things and learn something new every day. In my
                        free time I like: read, travel, swim, listen to music and play electric
                        guitar. I am currently mainly focused on building this website.
                    </Typography>
                </div>
            </div>
        </section>
    );
});

export default About;
