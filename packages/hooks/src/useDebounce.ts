
import { debounce, DebounceSettings, DebouncedFunc } from 'lodash-es';
import { useMemo } from 'react';
import useRtCb from './useRtCb';

const useDebounce = <T extends (...args: any) => any >(cb: T, wait?: number, opts?: DebounceSettings): DebouncedFunc<T> => {
    const rtCb = useRtCb(cb);

    return useMemo(() => {
        return debounce((...arg: Parameters<T>) => {
            rtCb(...arg)
        }, wait, opts);
    }, []);
}

export default useDebounce;
