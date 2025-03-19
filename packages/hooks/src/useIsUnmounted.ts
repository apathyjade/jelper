/**
 * @Author: apathyjade
 * @Date: 2025-03-16 21:33:24
 * @Last Modified by: apathyjade
 * @Last Modified time: 2025-03-16 21:35:46
 */

import { useCallback, useEffect, useRef } from 'react';

const useIsUnmounted = (): (() => boolean) => {
  const ref = useRef(false);
  useEffect(() => {
    return () => {
      ref.current = true;
    };
  }, []);
  return useCallback(() => ref.current, []);
};

export default useIsUnmounted;
