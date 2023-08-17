
import { debounce } from 'lodash-es';
import { useCallback, useRef } from 'react';
import useSafeCb from './useSafeCb';

const useDebounceCb = (cb, deps: any[], wait opts) => {
    const safeCb = useSafeCb(cb, deps);

    return useCallback((...arg) => {
        return debounce(() => {
            safeCb(...arg)
        });
    }, [safeCb])
}

export default useDebounceCb;
