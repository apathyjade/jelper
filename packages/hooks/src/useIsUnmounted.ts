
import { useCallback, useEffect, useRef } from 'react';

const useIsUnmounted = (): (() => boolean) => {
  const ref = useRef(false);
  useEffect(() => {
    return () => {
      ref.current = true;
    };
  }, []);
  return useCallback(() => ref.current, []);
}
export default useIsUnmounted;
