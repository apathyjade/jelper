import { useState, useCallback } from 'react';
import useIsUnmount from './useIsUnmount';

const useSafeCb = <
  T extends DefFn,
  D extends any[]
>(cb: T, deps?: D): (
  (p: Parameters<T>) => (ReturnType<T> | undefined)
) => {
  const isUnmount = useIsUnmount();
  return useCallback((...arg) => {
    if (!isUnmount()) {
      return cb(...arg)
    }
  }, deps);
}
export default useSafeCb;
