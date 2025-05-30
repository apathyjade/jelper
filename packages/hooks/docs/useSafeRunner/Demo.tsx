
import React, { DOMElement, useEffect, useRef, useState } from 'react';
import { Button } from 'antd';
import { useSafeRunner } from '@jelper/hooks';

const UnmountNode = () => {
  const [val, setVal] = useState(0);
  const safeRunner = useSafeRunner();

  const asyncSetVal = () => {
    setTimeout(() => {
      safeRunner(() => {
        setVal((val) => val + 1);
      }, () => {
        console.log('组件已卸载，回调未执行');
      });
    }, 5000);

  }

  return <>
    计数：{val}{'    '}
    <Button size="small" onClick={asyncSetVal}>计数增加</Button>
  </>;
}

export default () => {
  const [bool, setBool] = useState(true);
  return <>
    { bool ? <UnmountNode /> : undefined }
    <br />
    <Button onClick={() => setBool(!bool)}>控制</Button>
  </>
};
