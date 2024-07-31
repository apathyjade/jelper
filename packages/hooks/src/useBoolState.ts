import { useCallback } from 'react';
import useSafeState from './useSafeState';


const useBoolState = (value: boolean) => {
  const [val, setVal] = useSafeState<boolean>(value);
  const switchFn = useCallback((switchValue?: React.SetStateAction<boolean>) => {
    if (switchValue === undefined || switchValue === null) {
      setVal((oldVal) => !oldVal);
    } else if (typeof switchValue === 'boolean' || typeof switchValue === 'function') {
      setVal(switchValue);
    } else {
      setVal(!!switchValue);
    }
  }, [])
  return [val, switchFn];
}

export default useBoolState;
