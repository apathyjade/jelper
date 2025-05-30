/**
 * @Author: apathyjade
 * @Date: 2025-03-16 21:33:24
 * @Last Modified by: apathyjade
 * @Last Modified time: 2025-05-29 20:15:50
 */

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
