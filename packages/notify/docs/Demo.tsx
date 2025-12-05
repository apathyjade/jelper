import React, { useState, useEffect } from 'react';
import { Button } from 'antd';
import notify from '@jelper/notify';

const clickNotify = notify<number>();

const TestCom = () => {

  const [cnt, setCnt] = useState(0);

  useEffect(() => {
    return clickNotify.on(setCnt);
  }, []);

  return (
    <div>
      <Button onClick={() => clickNotify.notify(cnt + 1)} >累加</Button> => 数字：{cnt}
    </div>
  );
};

export default () => {
  return (<TestCom />)
};


