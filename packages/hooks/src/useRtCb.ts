
import useSafeCb from './useSafeCb';
import useRtRef from './useRtRef';

const useRtCb = <
  T extends DefFn,
  D extends any[]
>(cb: T, deps?: D): ReturnFn<T> => {
  const ref = useRtRef(cb);
  return useSafeCb((...arg: Parameters<T>) => {
    return ref.current?.(...arg);
  }, deps)
}

export default useRtCb;
