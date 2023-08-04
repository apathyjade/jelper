

import { useState } from 'react';

const useCreate = (cb: Function) => {
  const [val, setVal] = useState<boolean>(true);
  if (val) {
    setVal(false)
    cb()
  }
}

export default useCreate;