import { useEffect } from 'react';
import useRtRef from './useRtRef';

const useUnmount = (cb: () => void) => {
  const ref = useRtRef(cb);
  useEffect(() => {
    return () => {
      ref.current();
    };
  }, []);
};

export default useUnmount;
