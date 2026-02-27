import { debounce, DebounceSettings, DebouncedFunc } from 'lodash';
import { useMemo } from 'react';
import useRtCb from './useRtCb';
const useDebounce = <T extends (...args: any[]) => any>(
  cb: T,
  wait: number = 200,
  opts?: DebounceSettings
): DebouncedFunc<T> => {
  const rtCb = useRtCb(cb);
  return useMemo(() => {
    return debounce((...arg: Parameters<T>) => {
      return rtCb(...arg);
    }, wait, opts);
  }, [wait, rtCb]);
};

export default useDebounce;
