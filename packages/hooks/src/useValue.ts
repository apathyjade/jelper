/*
 * @Author: jade <apathyjade@outlook.com>
 * @Version: 0.0.1
 * @Date: 2023-04-05 14:39:52
 * @Last Modified by:   jade
 * @Last Modified Time: 2023-04-05 14:39:52
 */

import { useState, useEffect } from 'react';
import useRtCb from './useRtCb';
interface Options<T> {
  isEqual?: (a:T, b: T) => boolean
}

const defEqual = (a: any, b: any) => a === b;

const useValue = <T = any>(
  value: T,
  onChange?: (value: T) => void,
  opts?: Options<T>
): [
  T,
  React.Dispatch<React.SetStateAction<T>>,
] => {
  const { isEqual = defEqual } = opts || {};
  const [val, setVal] = useState<T>(value);
  const updateValue = useRtCb((value: T) => {
    setVal(value);
    onChange?.(value);
  }, [])
  const [oldValue, setOldValue] = useState<T>(value);
  useEffect(() => {
    if (!isEqual(value, oldValue)) {
      setOldValue(value);
      if (!isEqual(value, val)) {
        updateValue(value);
      }
    }
  }, [value, oldValue, val]);
  return [val, setVal];
};

export default useValue;
