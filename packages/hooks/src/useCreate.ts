

import { useState } from 'react';

const useCreate = (cb: () => void) => {
  useState<any>(cb);
}

export default useCreate;
