import type { MutableRefObject, Ref } from 'react';

const setRef = <T>(ref: Ref<T> | MutableRefObject<T>, value: T) => {
    if (typeof ref === 'function') {
        ref(value);
    } else if (ref) {
        (ref as MutableRefObject<T>).current = value;
    }
};

export default setRef;
