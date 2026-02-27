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
