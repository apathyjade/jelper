import { useCallback } from 'react';
import useIsUnmount from './useIsUnmount';

const useSafeCb = <
  T extends DefFn,
  D extends any[]
>(cb: T, deps?: D): T => {
  const isUnmount = useIsUnmount();
  return useCallback((...arg: any) => {
    if (!isUnmount()) {
      return cb(...arg)
    }
  }, deps || []) as T;
}
export default useSafeCb;
