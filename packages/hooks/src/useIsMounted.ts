
import { useCallback, useEffect, useRef } from 'react';

const useIsMounted = (): (() => boolean) => {
  const ref = useRef(false);
  useEffect(() => {
    ref.current = true;
    return () => {
      ref.current = false;
    };
  }, []);
  return useCallback(() => ref.current, [])
}
export default useIsMounted;
