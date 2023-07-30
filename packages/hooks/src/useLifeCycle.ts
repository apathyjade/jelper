import { useCallback, useEffect, useRef } from 'react';

interface UseLifeCycleProps {
  onMount: Function;
  onUnmount: Function;
}

const useLifeCycle = (props: UseLifeCycleProps) => {
  const { onMount, onUnmount } = props;
  const ref = useRef(true);
  const mountRef = useRef<Function>();
  const unmountRef = useRef<Function>();
  
  mountRef.current = onMount;
  unmountRef.current = onUnmount;

  useEffect(() => {
    mountRef.current?.()
    return () => {
      ref.current = false;
      unmountRef.current?.();
    };
  }, []);

  const isUnmount = useCallback(() => !ref.current, [])

  return {
    isUnmount,
  }
}

export default useLifeCycle;
