/*
 * @Author: jade <apathyjade@outlook.com>
 * @Version: 0.0.1
 * @Date: 2023-07-31 18:14:40
 * @Last Modified by:   jade
 * @Last Modified Time: 2023-07-31 18:14:40
 */
import React, { useCallback, useState } from 'react';

export default function useParamsState<T = object>(defData: T): [
  d: T,
  u: React.Dispatch<React.SetStateAction<Partial<T>>>,
  s: React.Dispatch<React.SetStateAction<T>>,
] {
  const [data, setData] = useState(defData);
  const update = useCallback((params: Partial<T>) => {
    setData((oldVal: T) => ({
      ...(oldVal || {}) as T,
      ...params,
    }));
  }, []);
  return [data, update, setData];
}