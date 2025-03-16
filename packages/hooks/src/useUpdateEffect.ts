
import { useRef, useEffect } from 'react';

const useUpdateEffect = (
  cb: React.EffectCallback,
  deps?: React.DependencyList,
) => {
  const ref = useRef<boolean>(false)
  useEffect(() => {
    if (ref.current) {
      return cb();
    }
    ref.current = true;
  }, deps);
};

export default useUpdateEffect;
