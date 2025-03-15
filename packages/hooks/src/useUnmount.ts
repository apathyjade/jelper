import { useEffect, useRef } from 'react';

const useUnmount = (cb: () => void) => {
  const ref = useRef(cb);
  ref.current = cb;
  useEffect(() => {
    return () => {
      ref.current();
    };
  }, []);
}

export default useUnmount;
