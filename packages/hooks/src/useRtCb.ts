import { useRef } from 'react';
import useSafeCb from './useSafeCb';

const useRtCb = (cb: Function, deps: any[] = []) => {
    const ref = useRef(cb);
    ref.current = cb;
    return useSafeCb((...arg) => {
        ref.current(...arg);
    }, deps)
}

export default useRtCb;
