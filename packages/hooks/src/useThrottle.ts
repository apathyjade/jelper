/**
 * @Author: apathyjade
 * @Date: 2025-03-19 22:55:28
 * @Last Modified by: apathyjade
 * @Last Modified time: 2025-05-30 15:31:34
 */

import { throttle, ThrottleSettings, DebouncedFuncLeading } from 'lodash';
import { useMemo } from 'react';
import useRtCb from './useRtCb';

const useThrottle = <T extends (...args: any) => any >(
  cb: T,
  wait?: number,
  opts?: ThrottleSettings,
): DebouncedFuncLeading<T> => {
  const rtCb = useRtCb(cb);
  return useMemo(() => {
    return throttle((...args: Parameters<T>) => {
      rtCb(...args)
    }, wait, opts);
  }, [wait, opts]);
}

export default useThrottle;
