
import { useState } from 'react';

const useCreate = (cb: () => void) => {
  useState(cb);
}

export default useCreate;
