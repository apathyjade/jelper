
import React, { useState } from 'react';
import { Button } from 'antd';
import { useThrottle } from '@jelper/hooks';



export default () => {
  const [count, setCount] = useState(0);
  const setCountDebounce = useThrottle(() => {
    setCount(count + 1);
  }, 500);
  return <>
    <div>count: { count }</div>
    <Button onClick={setCountDebounce}>点击</Button>
  </>
};
