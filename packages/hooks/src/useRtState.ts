
import { useCallback, useRef } from 'react';
import useSafeState from './useSafeState';

export default function useRtState<T>(value: T): [
  data: T,
  setRefData: React.Dispatch<React.SetStateAction<T>>,
  getRefData: () => T,
] {
  const [data, setData] = useSafeState(value);
  const dataRef = useRef(value);
  const setRefData = useCallback((newVal: T) => {
    setData((oldVal: T) => {
      dataRef.current = typeof newVal === 'function' ? newVal(oldVal) : newVal
      return dataRef.current
    })
  }, [])
  const getRefData = useCallback(() => dataRef.current, [])
  return [data, setRefData, getRefData];
}