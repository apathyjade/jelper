
import { throttle, ThrottleSettings } from 'lodash-es';
import { useMemo } from 'react';
import useRtCb from './useRtCb';

const useThrottle = <T extends (...args: any) => any >(cb: T, wait?: number, opts?: ThrottleSettings) => {
    const rtCb = useRtCb(cb);
    return useMemo(() => {
        return throttle((...arg: Parameters<T>) => {
            rtCb(...arg)
        }, wait, opts);
    }, []);
}

export default useThrottle;
