

import { useState } from 'react';

const useBeforeMount = (cb: Function) => {
  const [val, setVal] = useState<boolean>(false);
  if (val) {
    setVal(false)
    cb()
  }
}

export default useBeforeMount;