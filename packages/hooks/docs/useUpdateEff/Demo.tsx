
import React, { DOMElement, useEffect, useRef, useState } from 'react';
import { Button } from 'antd';
import { useUpdateEff } from '@jelper/hooks';

export default () => {
  const [val, setVal] = useState(0);
  const [update, setUpdate] = useState(0);

  useUpdateEff(() => {
    setUpdate(val => val + 1);
  }, [val])

  return <>
    count: {val}
    <br />
    更新次数: {update}
    <br />
    <Button onClick={() => setVal(val + 1)}>count++</Button>
  </>
};
