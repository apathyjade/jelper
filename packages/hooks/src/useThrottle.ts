import { throttle, ThrottleSettings, DebouncedFuncLeading } from 'lodash';
import { useMemo } from 'react';
import useRtCb from './useRtCb';

const useThrottle = <T extends (...args: any) => any >(
  cb: T,
  wait: number = 200,
  opts?: ThrottleSettings,
): DebouncedFuncLeading<T> => {
  const rtCb = useRtCb(cb);
  return useMemo(() => {
    return throttle((...args: Parameters<T>) => {
      rtCb(...args)
    }, wait, opts);
  }, [wait, rtCb]);
}

export default useThrottle;
