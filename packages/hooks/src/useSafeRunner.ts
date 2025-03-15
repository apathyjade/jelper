import { useCallback } from 'react';
import useIsUnmount from "./useIsUnmounted";

const useSafeRunner = () => {
  const isUnmount = useIsUnmount();
  return useCallback((cb: () => void, unmountCb?: () => void): Promise<undefined> => {
    return new Promise((resolve) => {
      if (!isUnmount()) {
        cb()
        resolve(undefined);
      } else {
        unmountCb?.();
      }
    });
  }, []);
};

export default useSafeRunner;
