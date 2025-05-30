
import React, { useCallback, useEffect, useState } from 'react';
import { Button } from 'antd';
import { useInterval, useIntervalHandler } from '@jelper/hooks';



export default () => {
  const [bindTimer, clearTimer] = useIntervalHandler();
  const [count, setCount] = useState(0);

  const clearEffectInterval = useInterval((step) => {
    setCount(val => val + step);
  }, 3000, 2);

  const start = useCallback(() => {
    bindTimer(() => {
      console.log('bindTimer');
      setCount((val) => val + 1);
    }, 1000);
  }, [])
  return <>
    <div>count: {count}</div>
    <Button onClick={start}>启动</Button>
    <Button onClick={clearTimer}>停止</Button>
    <Button onClick={clearEffectInterval}>停止默认</Button>
  </>
};
