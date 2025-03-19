/**
 * @Author: apathyjade
 * @Date: 2025-03-19 22:55:28
 * @Last Modified by: apathyjade
 * @Last Modified time: 2025-03-19 22:55:48
 */

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
