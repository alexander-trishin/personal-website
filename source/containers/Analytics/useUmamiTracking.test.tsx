import { fireEvent, render } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import userEvent from '@testing-library/user-event';

import useUmamiTracking from './useUmamiTracking';

const AnchorWrapper = () => {
    useUmamiTracking(true);

    return <a href="#test">test link</a>;
};

const ButtonWrapper = () => {
    useUmamiTracking(true);

    return <button>test button</button>;
};

const DivWrapper = () => {
    useUmamiTracking(true);

    return <div>test div</div>;
};

describe('useUmamiTracking', () => {
    let originalUmami: umami.umami;

    const trackEventMock = jest.fn();

    beforeAll(() => {
        originalUmami = window.umami;

        Object.defineProperty(window, 'umami', {
            get: (): Partial<umami.umami> => ({ trackEvent: trackEventMock }),
            set: value => value
        });
    });

    beforeEach(() => {
        trackEventMock.mockReset();
    });

    afterAll(() => {
        window.umami = originalUmami;
    });

    it('should render without errors when tacking is off', () => {
        const { result } = renderHook(() => useUmamiTracking(false));

        expect(result.error).toBeUndefined();
    });

    it('should track click event on anchor element', () => {
        const wrapper = render(<AnchorWrapper />);

        userEvent.click(wrapper.getByRole('link'));

        expect(trackEventMock).toBeCalledTimes(1);
    });

    it('should track click event on button element', () => {
        const wrapper = render(<ButtonWrapper />);

        userEvent.click(wrapper.getByRole('button'));

        expect(trackEventMock).toBeCalledTimes(1);
    });

    it('should track click event on container', () => {
        const wrapper = render(<DivWrapper />);

        userEvent.click(wrapper.container);

        expect(trackEventMock).not.toBeCalled();
    });

    it('should track click event on window', () => {
        render(<DivWrapper />);

        fireEvent(window, new MouseEvent('click'));

        expect(trackEventMock).not.toBeCalled();
    });
});
