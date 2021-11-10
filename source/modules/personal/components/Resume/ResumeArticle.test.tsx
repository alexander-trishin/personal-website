import { render } from '@testing-library/react';

import ResumeArticle from './ResumeArticle';

describe('<ResumeArticle />', () => {
    it('should match snapshot', () => {
        const wrapper = render(<ResumeArticle header="Title">Content</ResumeArticle>);

        expect(wrapper).toMatchSnapshot();
    });
});
