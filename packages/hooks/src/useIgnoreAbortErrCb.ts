import { useCallback } from 'react';

interface Opts<T> {
  onAbort: (err: Error) => T;
}
const useIgnoreAbortErrCb = <T = any>(cb: (err: Error) => T, deps: React.DependencyList = [], opts?: Opts<T>) => {
  return useCallback((err: Error) => {
    if (err.name === 'AbortError') return opts?.onAbort?.(err);
    return cb(err);
  }, deps);
};
export default useIgnoreAbortErrCb;
