import { renderHook } from '@testing-library/react-hooks';

import useUpdateEffect from './useUpdateEffect';

describe('useUpdateEffect', () => {
    it('should skip mount event', () => {
        const effectMock = jest.fn();

        renderHook(() => useUpdateEffect(effectMock));

        expect(effectMock).not.toBeCalled();
    });

    it('should execute effect on update', () => {
        const effectMock = jest.fn();

        const wrapper = renderHook(() => useUpdateEffect(effectMock));

        wrapper.rerender();
        wrapper.rerender();

        expect(effectMock).toBeCalledTimes(2);
    });
});
