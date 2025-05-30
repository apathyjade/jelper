/**
 * @Author: apathyjade
 * @Date: 2025-03-16 22:19:57
 * @Last Modified by: apathyjade
 * @Last Modified time: 2025-05-30 15:05:26
 */

import { useRef } from 'react';

const useRtRef = <T>(val: T) => {
  const ref = useRef<T>(val)
  ref.current = val;
  return ref;
};

export default useRtRef;
