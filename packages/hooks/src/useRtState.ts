
import { useState, useCallback, useRef } from 'react';
import useSafeState from './useSafeState';

export default function useRtState<T>(value: T) {
  const [data, setData] = useSafeState(value);
  const dataRef = useRef(value);
  const setRefData = useCallback((newVal) => {
    dataRef.current = newVal
    setData(newVal)
  }, [])
  const getRefData = useCallback(() => dataRef.current, [])
  return [data, setRefData, getRefData];
}