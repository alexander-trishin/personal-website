import { useEffect, useRef } from 'react';

const useUpdateEffect: typeof useEffect = (effect, deps) => {
    const mount = useRef(true);

    useEffect(() => {
        if (!mount.current) {
            return effect();
        } else {
            mount.current = false;
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, deps);
};

export default useUpdateEffect;
