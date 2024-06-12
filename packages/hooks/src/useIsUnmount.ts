
import { useCallback, useEffect, useRef } from 'react';

const useIsUnmount = (): (() => boolean) => {
  const ref = useRef(true);

  useEffect(() => {
    return () => {
      ref.current = false;
    };
  }, []);

  return useCallback(() => !ref.current, [])
}

export default useIsUnmount;
