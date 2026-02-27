import { useCallback, useState } from 'react';

const useBoolState = (value: boolean): [
  boolean,
  (switchValue?: React.SetStateAction<boolean>) => void
] => {
  const [val, setVal] = useState<boolean>(value);
  const switchFn = useCallback((switchValue?: React.SetStateAction<boolean>) => {
    if (switchValue === undefined || switchValue === null) {
      setVal((oldVal) => !oldVal);
    } else if (typeof switchValue === 'boolean' || typeof switchValue === 'function') {
      setVal(switchValue);
    } else {
      setVal(!!switchValue);
    }
  }, []);
  return [val, switchFn];
};

export default useBoolState;
