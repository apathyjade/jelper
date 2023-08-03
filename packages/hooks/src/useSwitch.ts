import React, { useState, useCallback } from 'react';
import useSafeState from './useSafeState';


const useSwitch = (value: boolean) => {
  const [val, setVal] = useSafeState<boolean>(value);
  const switchFn = useCallback((switchValue: React.SetStateAction<boolean> | undefined) => {
    if (typeof switchValue === 'boolean') {
      setVal(switchValue)
    }
    setVal((oldVal) => !oldVal);
  }, [])
  return [val, switchFn];
}

export default useSwitch;