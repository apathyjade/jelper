/*
 * @Author: jade <apathyjade@outlook.com>
 * @Version: 0.0.1
 * @Date: 2023-04-05 14:39:52
 * @Last Modified by:   jade
 * @Last Modified Time: 2023-04-05 14:39:52
 */

import { useState, useEffect } from 'react';
interface Options<T> {
  isEqual?: (a:T, b: T) => boolean
}

function useValue<T = any>(value: T, opts: Options<T> = {}) {
  const {
    isEqual = (a, b) => a === b
  } = opts;
  const [val, setVal] = useState<T>(value);
  const [oldValue, setOldValue] = useState<T>(value);
  useEffect(() => {
    if (!isEqual(value, oldValue)) {
      setOldValue(value)
      if (!isEqual(value, val)) {
        setVal(value);
      }
    }
    
  }, [value, oldValue, val])
  return [val, setVal]
}

export default useValue;
