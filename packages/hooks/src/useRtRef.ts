import { useEffect, useRef } from 'react';

const useRtRef = <T>(val: T) => {
  const ref = useRef<T>(val);
  useEffect(() => {
    ref.current = val;
  }, [val]);
  return ref;
};

export default useRtRef;
