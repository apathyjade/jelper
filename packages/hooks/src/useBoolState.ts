/**
 * @Author: apathyjade
 * @Date: 2025-03-16 11:16:34
 * @Last Modified by: apathyjade
 * @Last Modified time: 2025-03-16 11:21:54
 */

import { useState, useCallback } from 'react';

const useBoolState = (value: boolean) => {
  const [val, setVal] = useState<boolean>(value);
  const switchFn = useCallback((switchValue?: React.SetStateAction<boolean>) => {
    if (switchValue === undefined || switchValue === null) {
      setVal((oldVal) => !oldVal);
    } else if (typeof switchValue === 'boolean' || typeof switchValue === 'function') {
      setVal(switchValue);
    } else {
      setVal(!!switchValue);
    }
  }, []);
  return [val, switchFn];
};

export default useBoolState;
