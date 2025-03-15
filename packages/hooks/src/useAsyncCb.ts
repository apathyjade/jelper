import { useCallback } from 'react';
import useRunWithSafe from './useSafeRunner';

const useAsyncCb = <T extends (...p: any) => Promise<any>>(cb: T, deps: any[] = []): T  => {
  const runWithSafe = useRunWithSafe();
  return useCallback((...param: Parameters<T>) => {
    return cb(...param).then(
      (data) => runWithSafe<ReturnType<T>>(() => data),
      (err) => runWithSafe<ReturnType<T>>(() => err),
    );
  }, deps) as T;
};

export default useAsyncCb;
