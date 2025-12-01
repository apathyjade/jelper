/**
 * @Author: apathyjade
 * @Date: 2025-03-19 22:55:14
 * @Last Modified by: apathyjade
 * @Last Modified time: 2025-05-29 18:56:32
 */

import { debounce, DebounceSettings, DebouncedFunc } from 'lodash';
import { useMemo } from 'react';
import useRtCb from './useRtCb';

const useDebounce = <T extends (...args: any) => any>(
  cb: T,
  wait?: number,
  opts?: DebounceSettings
): DebouncedFunc<T> => {
  const rtCb = useRtCb(cb);

  return useMemo(() => {
    return debounce(
      (...arg: Parameters<T>) => {
        rtCb(...arg);
      },
      wait,
      opts
    );
  }, [wait, opts]);
};

export default useDebounce;
