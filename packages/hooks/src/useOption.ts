import { useCallback, useState } from 'react';

const useOption = <T extends {}>(defOpt: Partial<T> = {}): [
  Partial<T>,
  {
    reset: () => void;
    setOption: React.Dispatch<React.SetStateAction<Partial<T>>>;
    update: React.Dispatch<React.SetStateAction<Partial<T>>>;
  },
 ] => {
  const [initOpt] = useState<Partial<T>>(defOpt);
  const [option, setOption] = useState<Partial<T>>(initOpt);

  const reset = useCallback(() => {
    setOption(initOpt);
  }, [initOpt]);

  const update: React.Dispatch<React.SetStateAction<Partial<T>>> = useCallback((newOpts: React.SetStateAction<Partial<T>>) => {
    setOption((oldOpts) => ({
      ...oldOpts,
      ...(typeof newOpts === 'function' ? newOpts(oldOpts) : newOpts),
    }));
  }, []);

  return [option, { setOption, reset, update }];
};

export default useOption;
