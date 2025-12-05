/**
 * @Author: apathyjade
 * @Date: 2025-03-17 00:22:11
 * @Last Modified by: apathyjade
 * @Last Modified time: 2025-03-17 00:22:56
 */

import { useCallback } from 'react';
import useRtRef from './useRtRef';

const useRtCb = <T extends (...args: any[]) => any>(cb: T): T => {
  const ref = useRtRef<T>(cb);
  return useCallback((...args: any[]) => {
    return (ref.current as T)(...args);
  }, []) as T;
};

export default useRtCb;
