
import { useEffect } from 'react';
import useRtCb from './useRtCb';


const useRtEffect = (cb: any, deps?: any[]) => {
  const rtCb = useRtCb(cb, deps);
  useEffect(rtCb, [rtCb])
}

export default useRtEffect;
