import { useMemo } from 'react';
import useRtRef from './useRtRef';

const useRtMemo = (cb: Function, deps: any[] = []) => {
  const ref = useRtRef(cb);
  return useMemo(() => ref.current(), deps);
};

export default useRtMemo;
