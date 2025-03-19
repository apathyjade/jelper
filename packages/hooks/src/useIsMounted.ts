/**
 * @Author: apathyjade
 * @Date: 2025-03-16 21:34:27
 * @Last Modified by: apathyjade
 * @Last Modified time: 2025-03-16 21:37:21
 */

import { useCallback, useEffect, useRef } from 'react';

const useIsMounted = (): (() => boolean) => {
  const ref = useRef(false);
  useEffect(() => {
    ref.current = true;
    return () => {
      ref.current = false;
    };
  }, []);
  return useCallback(() => ref.current, []);
};

export default useIsMounted;
