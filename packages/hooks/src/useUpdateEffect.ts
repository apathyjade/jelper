
import { useState, useEffect } from 'react';

export default function useUpdateEffect (
  cb: () => void,
  deps: any[],
) {
  const [initial, setInitial] = useState(true)
  useEffect(() => {
    if (initial) {
      setInitial(false)
      return;
    }
    return cb();
  }, deps);
};
