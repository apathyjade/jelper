
import React, { DOMElement, useEffect, useRef, useState } from 'react';
import { Button } from 'antd';
import { useRtRef } from '@jelper/hooks';

export default () => {
  const [val, setVal] = useState(0);

  const syncDataRef = useRtRef(val)

  return <>
    count: {val}
    <br />
    syncData: {syncDataRef.current}
    <br />
    <Button onClick={() => setVal(val + 1)}>count++</Button>
  </>
};
