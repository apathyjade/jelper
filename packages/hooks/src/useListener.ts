

import useRtEffect from './useRtEffect';

const useListener = (
  type: keyof WindowEventMap,
  listener: () => any,
  options?: boolean | AddEventListenerOptions
) => {
  useRtEffect(() => {
    window.addEventListener(type, listener, options);
    return () => {
      window.removeEventListener(type, listener);
    }
  })
}

export default useListener;
