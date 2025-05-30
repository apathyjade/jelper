
import React, { DOMElement, useEffect, useRef, useState } from 'react';
import { Button } from 'antd';
import { useUnmount } from '@jelper/hooks';

const UnmountNode = ({ onUnmount }) => {

  useUnmount(() => {
    onUnmount?.();
  });

  return <>UnmountNode</>;
}

export default () => {
  const [bool, setBool] = useState(true);

  const [val, setVal] = useState(0);

  const onUnmount = () => {
    setVal((val) => val + 1);
  };

  return <>
    { bool ? <UnmountNode onUnmount={onUnmount} /> : undefined }
    <br />
    <Button onClick={() => setBool(!bool)}>控制</Button>
    <br />
    组件卸载次数：{val}
  </>
};
