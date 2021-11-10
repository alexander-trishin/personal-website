import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { render } from '@testing-library/react';

import ResumeBlock from './ResumeBlock';

describe('<ResumeBlock />', () => {
    it('should match snapshot', () => {
        const wrapper = render(
            <ResumeBlock
                icon={faGraduationCap}
                periodHeader="UI Designer"
                period="July 2015 - Present"
                contentHeader="Awesome Studio"
            >
                Lorem ipsum Occaecat do esse ex et dolor culpa nisi ex in magna consectetur nisi
                cupidatat laboris esse eiusmod deserunt aute do quis velit esse sed Ut proident
                cupidatat nulla esse cillum laborum occaecat nostrud sit dolor incididunt amet est
                occaecat nisi.
            </ResumeBlock>
        );

        expect(wrapper).toMatchSnapshot();
    });
});
