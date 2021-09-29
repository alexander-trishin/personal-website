import { CSSProperties } from 'react';

import { Typography } from 'elements';
import { Social } from 'modules/personal/elements';

import BackgroundUrl from '../../assets/images/intro-bg.jpg';

import './Intro.pcss';

const styles: Record<string, CSSProperties> = {
    root: {
        background: `#151515 url(${BackgroundUrl}) no-repeat center bottom`,
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed'
    }
};

const Intro = () => {
    return (
        <section
            id="intro"
            className="relative flex justify-center items-center min-h-lg h-full w-full"
            style={styles.root}
        >
            <div className="absolute left-0 top-0 h-full w-full bg-gray-900 opacity-80"></div>

            <div className="text-center z-10">
                <div className="mx-auto max-w-6xl">
                    <div className="text-white px-4">
                        <Typography className="font-bold text-primary uppercase" variant="h5">
                            Hello, World.
                        </Typography>

                        <Typography className="font-semibold max-w-5xl mb-2 mx-auto" variant="h1">
                            I&apos;m Alexander Trishin.
                        </Typography>

                        <Typography className="position uppercase mb-8">
                            Full-Stack Developer
                        </Typography>
                    </div>
                </div>
            </div>

            <Social
                className="social block absolute left-0 bottom-16 list-disc text-center text-white w-full"
                size="large"
            />
        </section>
    );
};

export default Intro;
