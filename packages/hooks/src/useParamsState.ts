
import { useState, useCallback } from 'react';

const useParamsState = <T extends {}>(defData: T): [
  d: T,
  {
    setData: React.Dispatch<React.SetStateAction<T>>;
    update: React.Dispatch<React.SetStateAction<Partial<T>>>;
  },
] => {
  const [data, setData] = useState<any>(() => defData || {});
  const update = useCallback((params: Partial<T>) => {
    setData((oldVal: T) => ({
      ...(oldVal || {}) as T,
      ...(params || {}) as T,
    }));
  }, []) as any;
  return [data, { update, setData }];
};

export default useParamsState;
