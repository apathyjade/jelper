

import { useCallback } from 'react';
import useRtCb from './useRtCb';
import useRtEffect from './useRtEffect';

const useListener = (
  type: keyof WindowEventMap,
  listener: () => any,
  options?: boolean | AddEventListenerOptions
) => {
  const cb = useRtCb(listener);
  const remove = useCallback(() => {
    window.removeEventListener(type, cb);
  }, []);
  useRtEffect(() => {
    window.addEventListener(type, cb, options);
    return () => {
      window.removeEventListener(type, cb);
    }
  })
  return remove;
}

export default useListener;
