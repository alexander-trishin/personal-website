import { render, waitFor } from '@testing-library/react';

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
    __esModule: true,
    default: () => <div data-testid="personal" />
}));

describe('<Application />', () => {
    it('should use analytics in production mode', async () => {
        const wrapper = render(<Application />);

        await waitFor(() => {
            const actual = wrapper.getByTestId('analytics');

            expect(actual).toBeDefined();
        });
    });

    it('should render personal module', async () => {
        const wrapper = render(<Application />);

        await waitFor(() => {
            const actual = wrapper.getByTestId('personal');

            expect(actual).toBeDefined();
        });
    });
});
