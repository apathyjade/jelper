
import React, { useCallback, useEffect, useState } from 'react';
import { Button } from 'antd';
import { useTimeout } from '@jelper/hooks';



export default () => {
  const [bindTimer, clearTimer] = useTimeout();
  const [count, setCount] = useState(0)

  const start = useCallback(() => {
    bindTimer(() => {
      console.log('bindTimer');
      setCount((val) => val + 1);
    }, 3000);
  }, [])
  return <>
    <div>count: {count}</div>
    <Button onClick={start}>启动</Button>
    <Button onClick={clearTimer}>停止</Button>
  </>
};
