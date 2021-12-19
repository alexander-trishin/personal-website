import type { MutableRefObject, Ref } from 'react';

import setRef from './setRef';

const mergeRefs = <T>(...refs: Array<Ref<T> | MutableRefObject<T>>) => {
    return (value: T) => refs.forEach(ref => setRef(ref, value));
};

export default mergeRefs;
