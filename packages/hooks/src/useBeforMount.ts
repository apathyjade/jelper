

import { useState } from 'react';

const useBeforMount = (cb: Function) => {
  const [val, setVal] = useState<boolean>(false);
  if (val) {
    setVal(false)
    cb()
  }
}

export default useBeforMount;