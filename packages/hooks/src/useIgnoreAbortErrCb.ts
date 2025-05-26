/**
 * @Author: apathyjade
 * @Date: 2025-03-19 22:28:14
 * @Last Modified by: apathyjade
 * @Last Modified time: 2025-03-19 22:57:23
 */

import { useCallback } from "react";

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
