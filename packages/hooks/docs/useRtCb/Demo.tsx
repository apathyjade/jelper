
import React, { DOMElement, useEffect, useRef, useState } from 'react';
import { Button } from 'antd';
import { useRtCb } from '@jelper/hooks';

export default () => {
  const [val, setVal] = useState(0);
  const [syncData, setSyncData] = useState(0);

  const syncCb = useRtCb(() => {
    setSyncData(val);
  })

  return <>
    count: {val}
    <br />
    syncData: {syncData}
    <br />
    <Button onClick={() => setVal(val + 1)}>count++</Button>
    <Button onClick={syncCb}>count++</Button>
  </>
};
