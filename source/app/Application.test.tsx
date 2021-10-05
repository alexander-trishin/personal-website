import { render } from '@testing-library/react';

import { Application } from '.';

jest.mock('common/constants/Environment', () => ({
    __esModule: true,
    default: {
        ...jest.requireActual('common/constants/Environment').default,
        Mode: 'production'
    }
}));

jest.mock('containers', () => ({
    Analytics: () => <div data-testid="analytics" />
}));

jest.mock('modules/personal', () => ({
    PersonalModule: () => <div data-testid="personal" />
}));

describe('<Application />', () => {
    it('should use analytics in production mode', () => {
        const wrapper = render(<Application />);

        const actual = wrapper.getByTestId('analytics');

        expect(actual).toBeDefined();
    });

    it('should render personal module', () => {
        const wrapper = render(<Application />);

        const actual = wrapper.getByTestId('personal');

        expect(actual).toBeDefined();
    });
});
