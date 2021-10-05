import { MouseEventHandler, RefObject, useRef } from 'react';

import { About, Footer, Intro } from 'modules/personal/components';
import { GoTop } from 'modules/personal/elements';

const Home = () => {
    const introRef = useRef<HTMLElement>(null);
    const aboutRef = useRef<HTMLElement>(null);

    const scrollToSection =
        (targetRef: RefObject<HTMLElement>): MouseEventHandler<HTMLElement> =>
        event => {
            event.currentTarget.blur();

            targetRef.current?.scrollIntoView({
                behavior: 'smooth'
            });
        };

    const scrollToIntroSection = scrollToSection(introRef);
    const scrollToAboutSection = scrollToSection(aboutRef);

    return (
        <>
            <main>
                <Intro id="intro" ref={introRef} onShowMore={scrollToAboutSection} />
                <About id="about" ref={aboutRef} />
            </main>
            <Footer>
                <div className="fixed bottom-0 right-0 z-20">
                    <GoTop onGoTop={scrollToIntroSection} />
                </div>
            </Footer>
        </>
    );
};

export default Home;
