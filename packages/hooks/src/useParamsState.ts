
import { useCallback } from 'react';
import useSafeState from './useSafeState';

export default function useParamsState<T extends object>(defData: T): [
  d: T|undefined,
  u: React.Dispatch<React.SetStateAction<Partial<T|undefined>>>,
  s: React.Dispatch<React.SetStateAction<T| undefined>>,
] {
  const [data, setData] = useSafeState<any>(defData);
  const update = useCallback((params: Partial<T>) => {
    setData((oldVal: T) => ({
      ...(oldVal || {}) as T,
      ...params,
    }));
  }, []) as any;
  return [data, update, setData];
}
