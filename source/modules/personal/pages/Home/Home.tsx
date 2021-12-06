import { MouseEventHandler, RefObject, useRef } from 'react';

import { useNavigate } from 'react-router-dom';

import { About, Footer, Intro } from 'modules/personal/components';
import { ContactController, ResumeController } from 'modules/personal/containers';
import { GoTop } from 'modules/personal/elements';

const Home = () => {
    const navigate = useNavigate();

    const introRef = useRef<HTMLElement>(null);
    const aboutRef = useRef<HTMLElement>(null);
    const contactRef = useRef<HTMLElement>(null);

    const scrollToSection = (targetRef: RefObject<HTMLElement>): MouseEventHandler<HTMLElement> => {
        return event => {
            event.currentTarget.blur();

            if (targetRef.current?.id) {
                navigate(`#${targetRef.current.id}`);
            }

            targetRef.current?.scrollIntoView({ behavior: 'smooth' });
        };
    };

    const scrollToIntroSection = scrollToSection(introRef);
    const scrollToAboutSection = scrollToSection(aboutRef);
    const scrollToContactSection = scrollToSection(contactRef);

    return (
        <>
            <main>
                <Intro id="intro" ref={introRef} onShowMore={scrollToAboutSection} />
                <About id="about" ref={aboutRef} onContactMe={scrollToContactSection} />
                <ResumeController id="resume" />
                <ContactController id="contact" ref={contactRef} />
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
