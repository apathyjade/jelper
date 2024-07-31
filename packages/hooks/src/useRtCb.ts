
import useSafeCb from './useSafeCb';
import useRtRef from './useRtRef';

const useRtCb = <
  T extends DefFn,
>(cb: T, deps?: any[]): ReturnFn<T> => {
  const ref = useRtRef<T>(cb);
  return useSafeCb((...arg: Parameters<T>[]) => {
    return ref.current?.(...arg);
  }, deps) as T;
}

export default useRtCb;
