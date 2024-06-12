
import useSafeCb from './useSafeCb';
import useRtRef from './useRtRef';

const useRtCb = <
  T extends DefFn,
  D extends any[]
>(cb: T, deps?: D): ReturnFn<T> => {
  const ref = useRtRef<T>(cb);
  return useSafeCb((...arg: Parameters<T>[]) => {
    return ref.current?.(...arg);
  }, deps) as T;
}

export default useRtCb;
