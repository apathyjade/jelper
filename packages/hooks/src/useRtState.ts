
import { useState, useCallback, useRef } from 'react';

export default function useRtState<T>(value: T) {
  const [data, setData] = useState(value);
  const dataRef = useRef(value);
  const setRefData = useCallback((newVal) => {
    dataRef.current = newVal
    setData(newVal)
  }, [])
  const getRefData = useCallback(() => dataRef.current, [])
  return [data, setRefData, getRefData];
}