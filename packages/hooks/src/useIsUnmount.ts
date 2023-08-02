
import { useCallback, useEffect, useRef } from 'react';

const useIsUnmount = (): (() => boolean) => {
  const ref = useRef(true);

  useEffect(() => {
    return () => {
      ref.current = false;
    };
  });

  const isUnmount = useCallback(() => !ref.current, [])

  return isUnmount
}

export default useIsUnmount;