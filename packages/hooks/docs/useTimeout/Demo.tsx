
import React, { useCallback, useEffect, useState } from 'react';
import { Button } from 'antd';
import { useTimeout, useTimeoutHandler } from '@jelper/hooks';



export default () => {
  const [bindTimer, clearTimer] = useTimeoutHandler();
  const [count, setCount] = useState(0);

  const clearEffTimout = useTimeout(() => {
      setCount((val) => val + 3);
  }, 6000)

  const start = useCallback(() => {
    bindTimer(() => {
      setCount((val) => val + 1);
    }, 3000);
  }, [])
  return <>
    <div>count: {count}</div>
    <Button onClick={start}>启动</Button>
    <Button onClick={clearTimer}>停止</Button>
    <Button onClick={clearEffTimout}>停止默认</Button>
  </>
};
