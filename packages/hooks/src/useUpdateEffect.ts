
import { useRef, useEffect } from 'react';

export default function useUpdateEffect (
  cb: () => void,
  deps: any[],
) {
  const ref = useRef<boolean>(true)
  useEffect(() => {
    if (ref.current) {
      ref.current = false;
      return;
    }
    return cb();
  }, deps);
};
