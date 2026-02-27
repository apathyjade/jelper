import { useCallback } from 'react';
import useRtRef from './useRtRef';

const useRtCb = <T extends (...args: any[]) => any>(cb: T): T => {
  const ref = useRtRef<T>(cb);
  return useCallback((...args: any[]) => {
    return (ref.current as T)(...args);
  }, []) as T;
};

export default useRtCb;
