
import { throttle, ThrottleSettings } from 'lodash-es';
import { useMemo } from 'react';
import useRtCb from './useRtCb';

/**
 * 用于节流函数的钩子函数
 * @param cb - 要节流的函数
 * @param wait - 节流延迟时间，默认为0
 * @param opts - 节流选项对象，默认为{}
 * @returns 节流函数
 */
const useThrottle = <T extends (...args: any) => any >(cb: T, wait?: number, opts?: ThrottleSettings) => {
    const rtCb = useRtCb(cb);
    return useMemo(() => {
        return throttle((...arg: Parameters<T>) => {
            rtCb(...arg)
        }, wait, opts);
    }, []);
}

export default useThrottle;
