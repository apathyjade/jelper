/**
 * @Author: apathyjade
 * @Date: 2025-03-16 11:35:13
 * @Last Modified by: apathyjade
 * @Last Modified time: 2025-03-16 11:35:13
 */

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
