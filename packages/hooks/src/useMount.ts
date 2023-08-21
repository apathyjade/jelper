import { useEffect, useRef } from 'react';

const useMount = (cb: Function) => {
  const ref = useRef(cb);
  ref.current = cb

  useEffect(() => {
    ref.current();
  });
}

export default useMount;