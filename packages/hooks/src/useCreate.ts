/**
 * @Author: apathyjade
 * @Date: 2025-03-16 11:34:59
 * @Last Modified by: apathyjade
 * @Last Modified time: 2025-03-19 22:53:33
 */

import { useState } from 'react';

const useCreate = (cb: () => void) => {
  useState(cb);
};

export default useCreate;
