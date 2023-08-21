import { useRef, useMemo } from 'react';
import useSafeCb from './useSafeCb';

const useRtMemo = (cb: Function, deps: any[] = []) => {
    const ref = useRef(cb);
    ref.current = cb;
    return useRtMemo(() => {
        ref.current();
    }, deps)
}

export default useRtMemo;
