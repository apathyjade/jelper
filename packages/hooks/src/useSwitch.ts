import { useState, useCallback } from 'react';

const useSwitch = (value: boolean) => {
  const [val, setVal] = useState<boolean>(value);
  const switchFn = useCallback((switchValue: React.SetStateAction<boolean> | undefined) => {
    if (typeof switchValue === 'boolean') {
      setVal(switchValue)
    }
    setVal((oldVal) => !oldVal);
  }, [])
  return [val, switchFn];
}

export default useSwitch;