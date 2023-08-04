import { useRef, useCallback } from 'react';
import useSafeState from './useSafeState';
import { set } from 'lodash';


const useWatchState = <T>(value: T, cb?: (val: React.SetStateAction<T>) => void): [
  s: T,
  setFn: React.Dispatch<React.SetStateAction<T>>,
]  => {
  const [val, setVal] = useSafeState<T|undefined>(value);
  const ref = useRef(cb)
  ref.current = cb
  const setValFn = useCallback((newVal: React.SetStateAction<T>) => {
    setVal(newVal);
    cb?.(newVal)
  }, [])
  return [val, setValFn];
}

export default useWatchState;