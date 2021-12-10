import { ComponentProps, forwardRef } from 'react';

import CV from 'modules/personal/assets/files/cv.pdf';
import { About } from 'modules/personal/components';

const cvName = 'cv_alexander-trishin_senior-front-end-developer.pdf';

type AboutControllerProps = Omit<ComponentProps<typeof About>, 'cvName' | 'cvPath'>;

const AboutController = forwardRef<HTMLElement, AboutControllerProps>((props, ref) => {
    return <About {...props} ref={ref} cvName={cvName} cvPath={CV} />;
});

export default AboutController;
