import { useCallback, useEffect, useRef } from 'react';

const useIsUnmount = (): (() => boolean) => {
  const ref = useRef(true);
  useEffect(() => {
    ref.current = false
    return () => {
      ref.current = true;
    };
  }, []);
  return useCallback(() => ref.current, []);
};

export default useIsUnmount;
