/* * @Author: apathyjade* @Date: 2025-03-07 15:31:35* @Last Modified by: apathyjade* @Last Modified time: 2025-03-07 15:31:35*/

import { useCallback, useMemo, useState } from 'react';

const useOption = <T extends {}>(defOpt: Partial<T> = {}): {
  option: Partial<T>;
  reset: () => void;
  setOption: React.Dispatch<React.SetStateAction<Partial<T>>>;
  update: React.Dispatch<React.SetStateAction<Partial<T>>>;
} => {
  const [initOpt] = useState<Partial<T>>(defOpt);
  const [option, setOption] = useState<Partial<T>>(initOpt);

  const reset = useCallback(() => {
    setOption(initOpt);
  }, [initOpt]);

  const update: React.Dispatch<React.SetStateAction<Partial<T>>> = useCallback((newOpts: React.SetStateAction<Partial<T>>) => {
    setOption((oldOpts) => ({
      ...(oldOpts || {}),
      ...(typeof newOpts === 'function' ? newOpts(oldOpts) : newOpts || {}),
    }));
  }, []);

  return useMemo(() => ({
    option,
    setOption,
    reset,
    update,
  }), [option, setOption, reset, update]);
};

export default useOption;
