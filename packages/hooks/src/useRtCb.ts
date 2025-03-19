/**
 * @Author: apathyjade
 * @Date: 2025-03-17 00:22:11
 * @Last Modified by: apathyjade
 * @Last Modified time: 2025-03-17 00:22:56
 */

import { DependencyList, useCallback } from 'react';
import useRtRef from './useRtRef';

const useRtCb = <
  T extends Function,
>(cb: T, deps: DependencyList = []): T => {
  const ref = useRtRef<T>(cb);
  return useCallback((...args: any[]) => {
    return ref.current(...args);
  }, deps) as unknown as T;
};

export default useRtCb;
