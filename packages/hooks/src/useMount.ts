/**
 * @Author: apathyjade
 * @Date: 2025-03-18 00:21:16
 * @Last Modified by: apathyjade
 * @Last Modified time: 2025-03-18 00:21:16
 */

import { useEffect } from 'react';

const useMount = (cb: () => void) => {
  useEffect(cb, []);
};

export default useMount;
