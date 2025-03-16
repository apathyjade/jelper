
import { useEffect } from 'react';

const useMount = (cb: () => void) => {
  useEffect(cb, []);
};

export default useMount;
