/**
 * @Author: apathyjade
 * @Date: 2025-03-16 11:36:09
 * @Last Modified by: apathyjade
 * @Last Modified time: 2025-03-19 22:41:39
 */

import { useCallback } from 'react';
import useIsUnmount from "./useIsUnmount";

const useSafeRunner = () => {
  const isUnmount = useIsUnmount();
  return useCallback((cb: () => void, unmountCb?: () => void) => {
    if (isUnmount()) {
      unmountCb?.();
    } else {
      cb();
    }
  }, []);
};

export default useSafeRunner;
