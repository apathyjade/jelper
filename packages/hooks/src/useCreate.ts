

import { useState } from 'react';

const useCreate = (cb: Function) => {
  useState<any>(cb);
}

export default useCreate;