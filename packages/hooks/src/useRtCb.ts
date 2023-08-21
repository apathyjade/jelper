import { useRef } from 'react';
import useSafeCb from './useSafeCb';

const useRtCb = <
  T extends (...arg: any) => any,
  D extends any[]
>(cb: T, deps?: D): ReturnFn<T> => {
  const ref = useRef(cb);
  ref.current = cb;
  return useSafeCb((...arg: Parameters<T>) => {
    return ref.current(...arg);
  }, deps)
}

export default useRtCb;
