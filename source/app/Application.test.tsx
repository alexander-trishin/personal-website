import { render } from '@testing-library/react';

import { Application } from '.';

jest.mock('modules/personal', () => ({
    PersonalModule: () => <div data-testid="personal" />
}));

describe('<Application />', () => {
    it('should render personal module', () => {
        const wrapper = render(<Application />);

        const actual = wrapper.getByTestId('personal');

        expect(actual).toBeDefined();
    });
});
