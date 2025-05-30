/*
 * @Author: jade <apathyjade@outlook.com>
 * @Version: 0.0.1
 * @Date: 2023-04-05 14:39:52
 * @Last Modified by:   jade
 * @Last Modified Time: 2023-04-05 14:39:52
 */

import { useState } from 'react';
import useUpdateEff from './useUpdateEff';

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

  useUpdateEff(() => {
    if (!isEqual(value, val)) {
      onChange?.(val);
    }
  }, [val]);

  useUpdateEff(() => {
    if (!isEqual(value, val)) {
      setVal(value);
    }
  }, [value]);
  return [val, setVal];
};

export default useValue;
