/**
 * @Author: apathyjade
 * @Date: 2025-03-16 11:35:20
 * @Last Modified by: apathyjade
 * @Last Modified time: 2025-03-18 00:17:09
 */

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
