
import { useCallback } from 'react';
import useIsUnmount from "./useIsUnmounted";

const useSafeRunner = () => {
  const isUnmount = useIsUnmount();
  return useCallback((cb: () => void, unmountCb?: () => void): Promise<undefined> => {
    return new Promise((resolve) => {
      if (isUnmount()) {
        unmountCb?.();
      } else {
        cb();
        resolve(undefined);
      }
    });
  }, []);
};

export default useSafeRunner;
