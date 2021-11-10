import { render } from '@testing-library/react';

import { Resume } from '.';

jest.mock('./ResumeBlock', () => () => <div data-testid="period-block" />);

describe('<Resume />', () => {
    it('should match snapshot', () => {
        const wrapper = render(<Resume education={[]} workExperience={[]} />);

        expect(wrapper).toMatchSnapshot();
    });
});
