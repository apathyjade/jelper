
import { useEffect } from 'react';
import useRtRef from './useRtRef';

const useMount = (cb: Function) => {
  const ref = useRtRef(cb);
  useEffect(() => {
    ref.current?.();
  });
}

export default useMount;
