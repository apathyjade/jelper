
import React, { useState } from 'react';
import { Button } from 'antd';
import { useIgnoreAbortErrCb } from '@jelper/hooks';


const getAbortErr = () => {
  const abortController = new AbortController();
  abortController.abort();
  return abortController.signal.reason;
}

export default () => {

  const [count, setCount] = useState(0);
  const updateCount = useIgnoreAbortErrCb(() => {
    setCount((val) => val + 1);
  }, [], { onAbort() {
    setCount(0)
  }});
  return <>
    <div>count: { count }</div>
    <Button onClick={updateCount}>点击</Button>
    <Button onClick={() => updateCount(getAbortErr())}>点击(onAbort 重置)</Button>
  </>
};
