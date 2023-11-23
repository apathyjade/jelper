
import { useCallback } from 'react';
import useSafeState from './useSafeState';

export default function useParamsState<T extends object>(defData: T): [
  d: T,
  u: React.Dispatch<React.SetStateAction<Partial<T>>>,
  s: React.Dispatch<React.SetStateAction<T>>,
] {
  const [data, setData] = useSafeState(defData);
  const update = useCallback((params: Partial<T>) => {
    setData((oldVal: T) => ({
      ...(oldVal || {}) as T,
      ...params,
    }));
  }, []);
  return [data, update, setData];
}
